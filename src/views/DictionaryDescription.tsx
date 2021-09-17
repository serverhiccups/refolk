import m from "mithril";

export class DictionaryDescription {
    constructor() {}
    view() {
        return (
            <div id="dictionary-description">
                <h2>Welcome to Refolk!</h2>
                <h3>Search to get started</h3>
                <p>The dictionary data has been sourced from the excellent <a href="http://folkets-lexikon.csc.kth.se/folkets/folkets.html">Folkets Lexikon</a> project.</p>
            </div>
        )
    }
}