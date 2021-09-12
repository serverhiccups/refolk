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
		this.searchState = "";
		await this.results.search(term);
	}

	expandEntry() {

	}
}
