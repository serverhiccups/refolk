import m from "mithril";

import { Controller } from "../controllers/Controller";

import { ResultsList } from "../models/ResultsList";

export class ResultsListView {
	controller: Controller;
	results: ResultsList;

	constructor(props) {
		this.controller = props.attrs.controller;
		this.results = props.attrs.results;
	}

	view() {
		return (
			<div id="results">
				{this.results.result.map((r) => {
						return (<p>{r.key + " - " + r.translation[0]}</p>);
					})}
			</div>
		)
	}
}
