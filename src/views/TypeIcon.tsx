import m from "mithril";
import info from "../word-type-info.json";

export class TypeIcon {
    types: string[];

    constructor(props) {
        this.types = props.attrs.types;
    }

    view() {
        return (
            <span class="type-icons">
                {this.types.map((t) => {
                    if (!info[t]?.name) return;
                    return (
                        <div title={info[t].name} class={"type-icon " + info[t].shortcode}>
                            <span>{info[t].shortcode}</span>
                        </div>
                    )
                })}
            </span>
        )
    }
}