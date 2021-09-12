import m from "mithril";

import { Controller } from "../controllers/Controller";

export class WordView {
	controller: Controller;
	word: any;

	constructor(props) {
		this.controller = props.attrs.controller;
		this.word = props.attrs.word
	}

	view() {
		return (
			<div class="word">
				<div class="word-key">
					<span>{this.word.lang == "en" ? "🇬🇧" : "🇸🇪"}</span>
					<span>{this.word.key}</span>
				</div>
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
		)
	}
}
