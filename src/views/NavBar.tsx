import m from "mithril";

import { Controller } from "../controllers/Controller";

export class NavBar {
    controller: Controller;

    constructor(props) {
        this.controller = props.attrs.controller;
    }

    view() {
        return (
            <nav>
                <img src={new URL('../icon.svg', 
                //@ts-ignore
                import.meta.url)} alt="logo" />
                <a id="home-button" role="link" onclick={(e) => {
                    this.controller.search("", false, true)
                }}>Refolk!</a>
                <a onclick={(e) => {
                    m.route.set("/about")
                }}>{this.controller.polyglot.t("nav.about")}</a>
                <a onclick={(e) => {
                    m.route.set("/settings")
                }}>{this.controller.polyglot.t("nav.settings")}</a>
            </nav>
        )
    }
}