import m from "mithril";

import { Controller } from "../controllers/Controller";

export class WordView {
	controller: Controller;
	word: any;

	constructor(props) {
		this.controller = props.attrs.controller;
		this.word = props.attrs.word
	}

	topDefinition(word): Array<string> {
		if(word.translation?.length > 0) return word.translation;
		if(word.definition?.length > 1) return [word.definition[2]];

	}

	prettifyList(l: Array<string>) {
		return (
			<span>
			{l.map((w, i) => {
				if(i == l.length - 1) {
					return (
						<span class="def-word">{w}</span>
					)
				} else {
					return <span class="def-world">{w}<span class="separator">,&nbsp;&nbsp;</span></span>
				}
			})}
			</span>
		)
	}

	view() {
		console.log(this.prettifyList(this.topDefinition(this.word)));
		return (
			<div class="word">
				<div class="word-icon">{this.word.lang == "en" ? "🇬🇧" : "🇸🇪"}</div>
				<div class="word-key"><span>{this.word.key + " — " }</span>{this.prettifyList(this.topDefinition(this.word))}</div>
				<div class="word-main">
					<div class="word-translations">
						<span>Translations</span>
						{this.word.translation.map((t) => {
							return (
								<span>{t}</span>
							)
						})}
					</div>
					<div class="word-definitions">
						<span>Definitions</span>
						{this.word.definition.map((t) => {
							return (
								<span>{t}</span>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}
