import m from "mithril";
const Typesense = require("typesense");

import { Controller } from "./controllers/Controller";

import { ResultsList } from "./models/ResultsList";

import { SearchView } from "./views/SearchView";
import { ResultsListView } from "./views/ResultsListView";
import { NavBar } from "./views/NavBar";
import { BottomBar } from "./views/BottomBar";

import { About } from "./about";

class App {
	client: any;
	results: ResultsList;
	controller: Controller;

	constructor(node: {host: string, port: string, protocol: string}, apiKey: string) {
		this.client = new Typesense.Client({
			'nodes': [node],
			'apiKey': apiKey,
			'connectionTimeoutSeconds': 2
		})

		this.results = new ResultsList(this.client);

		this.controller = new Controller(this.results);
	}

	oninit(props) {
		if(m.route.param()?.search) {
			this.controller.updateSearchState(m.route.param().search);
			this.controller.search();
			return;
		} 
	}

	view() {
		return (
			<div id="app">
				<NavBar controller={this.controller}/>
				<div id="dictionary">
					<SearchView controller={this.controller}/>
					<ResultsListView controller={this.controller} results={this.results}/>
				</div>
				<BottomBar/>
			</div>
		)
	}
}

let a = new App({
	host: "localhost",
	port: "8108",
	protocol: "http"
}, String(process.env.TYPESENSE_KEY));

let c = new About(a.controller);

m.route(document.body, "/search", {
	"/search": a,
	"/search/:search": a,
	"/about": c
})