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

		window.onpopstate = (e) => {
			this.controller.search((e.state?.search != null && e.state?.search != undefined) ? e.state.search : "", true, false);
		}
	}

	oninit() {
		if(m.route.param()?.search) {
			this.controller.search(m.route.param().search, true, false);
		}
		this.controller.setDocumentTitle();
	}

	onupdate() {
		this.controller.setDocumentTitle();
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
	host: String(process.env.TYPESENSE_HOST),
	port: String(process.env.TYPESENSE_PORT),
	protocol: String(process.env.TYPESENSE_PROTOCOL)
}, String(process.env.TYPESENSE_KEY));

let c = new About(a.controller);

m.route(document.body, "/search", {
	"/search": a,
	"/search/:search": a,
	"/about": c
})