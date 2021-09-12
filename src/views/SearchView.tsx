import m from "mithril";

import { Controller } from "../controllers/Controller";

export class SearchView {
	controller: Controller;

	constructor(props) {
		this.controller = props.attrs.controller;
	}

	view() {
		return (
			<div id="search">
				<input type="search" id="searchInput" name="searchInput" value={this.controller.searchState} oninput={(e) => {
					this.controller.updateSearchState(e.target.value);
				}}/>
				<button onclick={(e) => this.controller.search()}>search</button>
			</div>
		)
	}
}
