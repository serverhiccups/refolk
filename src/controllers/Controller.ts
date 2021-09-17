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

	async search() {
		let term = this.searchState;
		if(term == "") {
			this.results.clear();
			return
		}
		this.updateSearchState("");
		await this.results.search(term);
	}

	expandEntry() {

	}
}
