import m from "mithril";
const Typesense = require("typesense");

import { Controller } from "./controllers/Controller";

import { ResultsList } from "./models/ResultsList";

import { SearchView } from "./views/SearchView";
import { ResultsListView } from "./views/ResultsListView";
import { NavBar } from "./views/NavBar";

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

	view() {
		return (
			<div id="app">
				<NavBar/>
				<div id="dictionary">
					<SearchView controller={this.controller}/>
					<ResultsListView controller={this.controller} results={this.results}/>
				</div>
			</div>
		)
	}
}

let a = new App({
	host: "localhost",
	port: "8108",
	protocol: "http"
}, "123456");

let c = new About();

m.route(document.body, "/", {
	"/": a,
	"/about": c
})