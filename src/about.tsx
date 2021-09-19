import m from "mithril";
import { NavBar } from "./views/NavBar";
import { BottomBar } from "./views/BottomBar";

import { Controller } from "./controllers/Controller";

export class About {
    controller: Controller;

    constructor(controller) {
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
                <div>
                    <h2>About Refolk!</h2>
                    <p>Refolk! was created by me, <a href="https://github.com/serverhiccups">@serverhiccups</a> to provide an interface for <a href="https://folkets-lexikon.csc.kth.se/folkets/folkets.html">Folket's Lexicon</a> that felt at home on mobile devices and was more open than FL's current closed source implementation.</p>
                    <p>This project could never have worked without the freely accessible data from Folket's Lexikon, thank you for making it open.</p>
                    <p>This project also uses <a href="https://mithril.js.org/">Mithril</a> as a front-end framework. <a href="https://typesense.org/">Typesense</a> powers the search engine. <a href="https://v2.parceljs.org/">Parcel</a> was used for bundling. <a href="https://www.npmjs.com/package/fast-xml-parser">fast-xml-parser</a> and <a href="https://www.npmjs.com/package/node-fetch">node-fetch</a> power the script used to hydrate Typesense.</p>
                    <p>Some features were inspired by the Japanese dictionary <a href="https://jisho.org">jisho.org</a>.</p>
                    <h2>FAQ</h2>
                    <h3>Why is this website so slow?</h3>
                    <p>The website is hosted on a $5 VPS in Australia, that also hosts other websites and a email server. As such response times are slow, and the latency can be bad if you're accessing from NA or Europe. If you have resources to donate, please see the "How to Help" section.</p>
                    <h3>How to help + Contributing</h3>
                    <p>This is an open-source project! If you've experienced a bug, or have an idea, please check out the <a href="https://github.com/serverhiccups/refolk">Github repository</a>.</p>
                    <p>If you want to make a donation to the project, or can offer hosting or hardware, please contact me at hiccup (at) hiccup01.com.</p>
                    <h3>What license do you use?</h3>
                    <p>This project and website are licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons BY-SA 4.0</a>.</p>
                </div>
                <BottomBar/>
            </div>
        )
    }
}