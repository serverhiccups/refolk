import m from "mithril";

import { Controller } from "./controllers/Controller";

import { NavBar } from "./views/NavBar";
import { Footer } from "./views/Footer";

export class Settings {
    controller: Controller;

    constructor(controller: Controller) {
        this.controller = controller;
    }

    oninit() {
        this.controller.setDocumentTitle();
    }

    onupdate() {
        this.controller.setDocumentTitle();
    }

    view() {
        return (
            <div id="app">
                <NavBar controller={this.controller}/>
                <div id="settings">
                    <h2>{this.controller.polyglot.t("settings.settings")}</h2>
                    <h3>{this.controller.polyglot.t("settings.display")}</h3>
                    <label for="language-select">{this.controller.polyglot.t("settings.language")}: </label>
                    <select id="language-select" oninput={(e) => {
                        this.controller.setLanguage(e.target.value);
                    }} value={this.controller.settings.settings.language}>
                        <option value="en">English</option>
                        <option value="sv">Svenska</option>
                    </select>
                    {this.controller.settings.settings.language == "sv" && (
                        <span><br/>Swedish support is still being worked on. Please read the about page to learn how you can contribute!</span>
                    )}
                    <h3>{this.controller.polyglot.t("settings.fun")}</h3>
                    <ul>
                        <li>
                            <label for="fun-confetti">{this.controller.polyglot.t("settings.party")} 🎉 </label>
                            <input id="fun-confetti" checked={this.controller.settings.settings.fun.confetti} type="checkbox" name="confetti" oninput={(e) => {
                                this.controller.fun.setConfetti(e.target.checked);
                            }}/>
                        </li>
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}