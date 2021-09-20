import m from "mithril";

import { Controller } from "../controllers/Controller";

import { ResultsList } from "../models/ResultsList";

import { WordView } from "./WordView";
import { DictionaryDescription } from "./DictionaryDescription";

export class ResultsListView {
	controller: Controller;
	results: ResultsList;

	constructor(props) {
		this.controller = props.attrs.controller;
		this.results = props.attrs.results;
	}

	view() {
		if(this.results.result.length > 0) {
			return (
				<div id="results">
					<span id="title">Showing results for "<span id="word">{this.results.currentResultTerm}</span>"</span>
					{this.results.result.map((r, i) => {
							return (
								<WordView key={r.id} controller={this.controller} id={i} word={r}/>
							)
						})}
				</div>
			)
		}
		return <DictionaryDescription controller={this.controller}/>
	}
}
