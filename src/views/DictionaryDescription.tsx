import m from "mithril";

import { Controller } from "../controllers/Controller";

import { TypeIcon } from "./TypeIcon";

import info from "../word-type-info.json";

export class DictionaryDescription {
    controller: Controller;
    typeInfo: object;
    keys: Array<string>;

    constructor(props) {
        this.controller = props.attrs.controller;
        this.typeInfo = info;
        this.keys = [];
		for (const v of Object.keys(this.typeInfo)) {
            this.keys.push(v);
        }
    }
    view() {
        return (
            <div id="dictionary-description">
                <h2>{this.controller.polyglot.t("home.welcome")}</h2>
                <img src={new URL('../icon.svg', 
                //@ts-ignore
                import.meta.url)} alt="Refolk! logo" />
                <h3>{this.controller.polyglot.t("home.search")}</h3>
                <p>{this.controller.polyglot.t("home.description")}</p>
                <p>{m.trust(this.controller.polyglot.t("home.filters"))}
                    <div id="dictionary-reference">
                    {this.keys.map((k) => {
                        return (
                            <span>
                            <TypeIcon types={[k]} />
                            <span>{this.typeInfo[k].name}</span>
                            </span>
                        )
                    })}
                    <span>
                        <span class="type-icons">
                            <div title="English" class="type-icon">
                                <span>en</span>
                            </div>
                        </span>
                        <span>English</span>
                    </span>
                    <span>
                        <span class="type-icons">
                            <div title="Swedish" class="type-icon">
                                <span>sv</span>
                            </div>
                        </span>
                        <span>Swedish</span>
                    </span>
                    </div>
                </p>
                <p>{m.trust(this.controller.polyglot.t("home.data"))}</p>
                <p>{this.controller.polyglot.t("home.switch")}<a id="switch-button" onclick={(e) => {
                    m.route.set("/settings");
                }}>{this.controller.polyglot.t("home.switchbutton")}</a>.</p>
            </div>
        )
    }
}