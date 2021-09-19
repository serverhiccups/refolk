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
		this.searchState = state;
	}

	async searchFromBox() {
		await this.search(this.searchState, true, true);
	}

	async search(term, keepSearchState: boolean, createHistory: boolean) {
		if(term == "") {
			this.results.clear();
		} else {
			this.results.search(term);
		}
		if(!keepSearchState) {
			this.updateSearchState("");
		} else {
			this.updateSearchState(term);
		}
		this.updateRoute(!createHistory);
	}

	/**
	 * Match the route to the current search state
	* @param replace Whether or not to replace the current history entry.
	 */
	updateRoute(replace: boolean) {
		m.route.set("/search/:search", {
			search: this.results.currentResultTerm
		}, {
			state: {search: this.results.currentResultTerm},
			replace: replace
		})
	}

	setDocumentTitle() {
		if(m.route.get().startsWith("/about")) {
			document.title = "Refolk! - about";
			return;
		}
		document.title = (this.results.currentResultTerm ? "Refolk! - " + this.results.currentResultTerm : "Refolk!")
	}
}