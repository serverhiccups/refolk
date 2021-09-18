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
                <a id="home-button" role="link" onclick={(e) => {
                    console.log(m.route.get());
                    if(m.route.get().startsWith("/search/")) {
                        this.controller.updateSearchState("");
                        this.controller.search();
                    } else {
                        m.route.set("/search/:search", {search: ""})
                    }
                }}>Refolk!</a>
                <a href="#!/about">about</a>
            </nav>
        )
    }
}