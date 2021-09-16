import m from "mithril";
import { NavBar } from "./views/NavBar";

export class About {
    constructor() {}
    view() {
        return (
            <div id="app">
                <NavBar/>
                <h2>Hello, World!</h2>
            </div>
        )
    }
}