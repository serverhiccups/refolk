import m from "mithril";

import { ResultsList } from "../models/ResultsList";

export class Controller {
	searchState: string;
	results: ResultsList;

	constructor(results: ResultsList) {
		this.results = results;
		this.searchState = "";
	}

	updateSearchState(state) {
		if(state == this.searchState) return;
		this.searchState = state;
		m.route.set("/search/:search", {search: this.searchState});
	}

	async search() {
		let term = this.searchState;
		if(term == "") {
			this.results.clear();
			return
		}
		// this.updateSearchState("");
		await this.results.search(term);
	}

	expandEntry() {

	}
}
