import m from "mithril";

import { TypeIcon } from "./TypeIcon";

import info from "../word-type-info.json";

export class DictionaryDescription {
    typeInfo: object;
    keys: Array<string>;

    constructor() {
        this.typeInfo = info;
        this.keys = [];
		for (const v of Object.keys(this.typeInfo)) {
            this.keys.push(v);
        }
    }
    view() {
        return (
            <div id="dictionary-description">
                <h2>Welcome to Refolk!</h2>
                <h3>Search to get started</h3>
                <p>You can refine your search by filtering by part of speech. Here's a list of filters that you can add in addition to your search term for reference. Each filter must be preceded by a <code>#</code>. For example, to search for the verb <i>to book</i>, type <code>book #V</code>.
                    <div id="dictionary-reference">
                    {this.keys.map((k) => {
                        return (
                            <span>
                            <TypeIcon types={[k]} />
                            <span>{this.typeInfo[k].name}</span>
                            </span>
                        )
                    })}
                    </div>
                </p>
                <p>The dictionary data has been sourced from the excellent <a href="http://folkets-lexikon.csc.kth.se/folkets/folkets.html">Folkets Lexikon</a> project.</p>
            </div>
        )
    }
}