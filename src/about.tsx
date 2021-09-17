import m from "mithril";
import { NavBar } from "./views/NavBar";
import { BottomBar } from "./views/BottomBar";

export class About {
    constructor() {}
    view() {
        return (
            <div id="app">
                <NavBar/>
                <div>
                    <h2>About Refolk!</h2>
                    <p>Refolk! was created by me, @serverhiccups to provide an interface for Folket's Lexicon that felt at home on mobile devices and was more open than FL's current closed source implementation.</p>
                    <p>This project could never have worked without the freely accessible data from Folket's Lexikon, thank you for making it free.</p>
                    <p>This project also uses Mithril as a front-end framework. Typesense powers the search engine. Parcel was used for bundling. fast-xml-parser and node-fetch power the script used to hydrate Typesense.</p>
                    <p>This project and website are licensed under AGPL 3.0.</p>
                </div>
                <BottomBar/>
            </div>
        )
    }
}