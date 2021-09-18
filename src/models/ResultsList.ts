import m from "mithril";
import info from "../word-type-info.json"

import { SearchClient as TypesenseSearchClient } from "typesense";

export class ResultsList {
	client: TypesenseSearchClient;

	result: Array<any>;

	filterNames: Set<string>;

	typeinfo: object;

	constructor(client: TypesenseSearchClient) {
		this.client = client;
		this.result = [];
		this.filterNames = new Set();
		this.typeinfo = new Object(info);
		for (const v of Object.values(this.typeinfo)) {
			//@ts-ignore
			this.filterNames.add("#" + v.shortcode);
		}
		this.filterNames.add("#en");
		this.filterNames.add("#sv")
	}

	async search(term: string) {
		let sTerm = term.substring(0, 50).trim();
		let f: Set<string> = new Set();
		sTerm = sTerm.split(" ").map((m: string) => {
			if(this.filterNames.has(m)) {
				f.add(m.slice(1));
				return ""
			}
			return m;
		}).join("").trim();
		let realParameterNames = [];
		//@ts-ignore
		for (const [k, v] of Object.entries(this.typeinfo)) {
			if(f.has(v.shortcode)) {
				realParameterNames.push(k);
			}
		}
		let searchParameters = {
			'q': sTerm,
			'query_by': 'key, translation, inflection, definition, idioms, idiomsTranslation',
			'query_by_weights': '10, 8, 6, 6, 5, 5',
			'limit_hits': 50,
			'per_page': 50,
			'filter_by': (realParameterNames.length > 0 ? "type:=[" + realParameterNames.join(", ") + "]": "") + (f.has("en") ? "lang:=en" : f.has("sv") ? "lang:=sv" : "")
		}
		this.result = this.parseResults(await this.client.collections('refolk').documents().search(searchParameters));
		m.redraw();
	}

	async clear() {
		this.result = []
		m.redraw()
	}

	parseResults(res) {
		//console.log("we have results");
		//console.dir(res);
		return res.hits.map((v) => {
			return v.document;
		})
	}
}
