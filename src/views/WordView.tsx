import m from "mithril";

import { Controller } from "../controllers/Controller";

import { TypeIcon } from "./TypeIcon";

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
		return [""];
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
		return (
			<div class="word">
				<div class="word-icon">{this.word.lang == "en" ? "🇬🇧" : "🇸🇪"}</div>
				<div class="word-key">
					<TypeIcon types={this.word.type}/>
					<span>{this.word.key + " — " }</span>{this.prettifyList(this.topDefinition(this.word))}
				</div>
				<div class="word-main">
					{this.word.definition?.length > 0 &&
						<div class="word-definition">
							<div class="title">Definition</div>
							<ul>
							{this.word.definition.map((t, i) => {
								if((this.word.lang == "sv") != (i == 1)) {
									return (
										<li class="swe-bullet">{t}</li>
									)
								} else {
									return (
										<li class="eng-bullet">{t}</li>
									)
								}
							})}
							</ul>
						</div>
					}
				</div>
				{this.word.translation?.length > 0 &&
					<div class="word-translations">
						<span>Translations</span>
						<ul>
						{this.word.translation.map((t) => {
							return (
								<li>{t}</li>
							)
						})}
						</ul>
					</div>
				}
			</div>
		)
	}
}
