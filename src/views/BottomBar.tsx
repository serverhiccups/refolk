import m from "mithril";

export class BottomBar {
    constructor() {}
    view() {
        return (
            <footer>
                <span>Made with ❤️ in Sweden - v{process.env.VERSION}-{process.env.NODE_ENV}.</span>
            </footer>
        )
    }
}