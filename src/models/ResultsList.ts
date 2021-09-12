import m from "mithril";

import Typesense from "typesense";

export class ResultsList {
	client: Typesense.Client;

	result: any;

	constructor(client: Typesense.Client) {
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

	parseResults(res) {
		//console.log("we have results");
		//console.dir(res);
		return res.hits.map((v) => {
			return v.document;
		})
	}
}
