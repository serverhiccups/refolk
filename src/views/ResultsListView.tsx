import m from "mithril";

import { Controller } from "../controllers/Controller";

import { ResultsList } from "../models/ResultsList";

import { WordView } from "./WordView";

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
				{this.results.result.map((r, i) => {
						return (
							<WordView key={r.id} controller={this.controller} id={i} word={r}/>
						)
					})}
			</div>
		)
	}
}
