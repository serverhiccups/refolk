import m from "mithril";

import { SearchClient as TypesenseSearchClient } from "typesense";

export class ResultsList {
	client: TypesenseSearchClient;

	result: Array<any>;

	constructor(client: TypesenseSearchClient) {
		this.client = client;
		this.result = [];
	}

	async search(term: string) {
		let searchParameters = {
			'q': term,
			'query_by': 'key, translation, definition',
			'limit_hits': 50
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
