import m from "mithril";
import Polyglot from "node-polyglot";

import en from "../../translations/en.json";
import sv from "../../translations/sv.json";

import { FunController } from "./FunController";

import { ResultsList } from "../models/ResultsList";
import { SettingsModel, SettingsObject } from "../models/SettingsModel";
import { Errors } from "../models/Errors";

export class Controller {
	fun: FunController;

	searchState: string;
	results: ResultsList;
	settings: SettingsModel;
	errors: Errors;
	polyglot: Polyglot;

	constructor(results: ResultsList, settings: SettingsModel, errors: Errors) {
		this.results = results;
		this.settings = settings;
		this.errors = errors;
		this.searchState = "";
		this.polyglot = new Polyglot({
			locale: this.settings.settings.language
		});
		this.polyglot.replace(en);
		this.onSettingsUpdate(this.settings.settings);
		this.settings.addListener(this.onSettingsUpdate.bind(this));
		this.fun = new FunController(this);
	}

	setLanguage(lang: string) {
		//@ts-ignore
		this.settings.setSettings({...this.settings.settings, language: lang})
	}

	private onSettingsUpdate(s: SettingsObject) {
		if(s.language == "en") {
			this.polyglot.extend(en)
		} else {
			this.polyglot.extend(sv);
		}
	}

	updateSearchState(state) {
		this.searchState = state;
	}

	async searchFromBox() {
		await this.search(this.searchState, true, true);
		this.fun.confetti();
	}

	async search(term, keepSearchState: boolean, createHistory: boolean) {
		let previousTerm = this.results.currentResultTerm;
		if(term == "") {
			this.results.clear();
		} else {
			if(this.results.isLoading) return;
			try {
				await this.results.search(term);
			} catch (e) {
				this.errors.add(e);
				return;
			}
		}
		if(!keepSearchState) {
			this.updateSearchState("");
		} else {
			this.updateSearchState(term);
		}
		this.updateRoute(term == previousTerm ? true: !createHistory);
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
			document.title = "about - Refolk!";
			return;
		}
		if(m.route.get().startsWith("/settings")) {
			document.title = "settings - Refolk!";
			return;
		}
		document.title = (this.results.currentResultTerm ? this.results.currentResultTerm + " - Refolk!": "Refolk!")
	}
}