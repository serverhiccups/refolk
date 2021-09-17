import m from "mithril";

export class NavBar {
    constructor() {}
    view() {
        return (
            <nav>
                {m(m.route.Link, {
                    selector: 'a',
                    options: {replace: true},
                    href: "/search/"
                }, "Refolk!")}
                <a href="#!/about">about</a>
            </nav>
        )
    }
}