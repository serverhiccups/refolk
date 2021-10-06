import m from "mithril";

import { Controller } from "../controllers/Controller";

export class ErrorView {
    controller: Controller;

    constructor(props) {
        this.controller = props.attrs.controller;
    }

    view() {
        return (
            <div id="error-list">
                {this.controller.errors.errors.map((e, i) => {
                    return (
                        <div class="error-message">
                            <span class="dismiss" onclick={(e) => {
                                this.controller.errors.remove(i);
                            }}>X</span>
                            <span class="name">{e.name}</span>
                            <span class="message">{e.message}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}