import m from "mithril";

import { Controller } from "../controllers/Controller";

export class SearchView {
	controller: Controller;

	constructor(props) {
		this.controller = props.attrs.controller;
	}

	searchDetector(e) {
		if(e.code == 'Enter') this.controller.searchFromBox();
	}

	view() {
		return (
			<div id="search">
				<input type="search" class={this.controller.results.isLoading ? "loading-background" : ""} id="search-input" name="searchInput" placeholder={this.controller.polyglot.t("search.here")} autocapitalize="none" onupdate={({dom}) => {
					// @ts-ignore
					dom.focus();
				}} onkeyup={(e) => this.searchDetector(e)} value={this.controller.searchState} oninput={(e) => {
					this.controller.updateSearchState(e.target.value);
				}}/>
				<input id="search-submit" type="submit" name="searchSubmit" value={this.controller.polyglot.t("search.search")} onclick={(e) => {
					this.controller.searchFromBox()
				}}/>
			</div>
		)
	}
}
