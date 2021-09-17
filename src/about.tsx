import m from "mithril";
import { NavBar } from "./views/NavBar";
import { BottomBar } from "./views/BottomBar";

export class About {
    constructor() {}
    view() {
        return (
            <div id="app">
                <NavBar/>
                <h2>Hello, World!</h2>
                <BottomBar/>
            </div>
        )
    }
}