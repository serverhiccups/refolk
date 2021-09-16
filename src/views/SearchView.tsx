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
				<input type="search" id="search-input" name="searchInput" placeholder="Type here!" value={this.controller.searchState} oninput={(e) => {
					this.controller.updateSearchState(e.target.value);
				}}/>
				<input id="search-submit" type="submit" name="searchSubmit" value="Search" onclick={(e) => this.controller.search()}/>
			</div>
		)
	}
}
