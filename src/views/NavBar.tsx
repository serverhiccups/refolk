import m from "mithril";

export class NavBar {
    constructor() {}
    view() {
        return (
            <nav>
                <a href="#!/">Refolk!</a>
                <a href="#!/about">about</a>
            </nav>
        )
    }
}