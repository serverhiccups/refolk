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
					<span class="quick-info">
						<span>{this.word.key + " — " }{this.prettifyList(this.topDefinition(this.word))}</span><span class="comment">{this.word.comment ? `[${this.word.comment}]` : ""}</span>
					</span>
				</div>
				<div class="word-main">
					{this.word.definition?.length > 0 &&
						<div class="word-definition">
							<div class="title">{this.controller.polyglot.t("word.definition")}</div>
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
					{!!this.word.explanation && (
						<div class="word-explanation">
							<div class="title">{this.controller.polyglot.t("word.explanation")}</div>
							<ul>
							{Object.values(this.word.explanation).map((t, i) => {
								if(!t) return;
								if((this.word.lang == "sv") != (i == 0)) {
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
					)}
					{!!this.word.phonetic && (
						<div class="word-phonetic">
							<span class="title">{this.controller.polyglot.t("word.phonetic")}&nbsp;</span>
							<span>[{this.word.phonetic}]</span>
						</div>
					)}
					{this.word.idioms.length > 0 && (
						<div class="word-idioms">
							<span class="title">{this.controller.polyglot.t("word.idioms")}</span>
							<ul>
								{this.word.idioms.map((i, j) => {
									return <li><span>{i}</span>{!!this.word.idiomsTranslation[j] && (<span>&nbsp;[{this.word.idiomsTranslation[j]}]</span>)}</li>
								})}
							</ul>
						</div>
					)}
				</div>
				<div class="word-ti">
				{this.word.translation?.length > 0 &&
					<div class="word-translations">
						<span class="title">{this.controller.polyglot.t("word.translations")}</span>
						<ul>
						{this.word.translation.map((t, i) => {
							return (
								<li><span>{t}</span><span>&nbsp;{this.word.translationComment[i] ? "[" + this.word.translationComment[i] + "]" : ""}</span></li>
							)
						})}
						</ul>
					</div>
				}
				{this.word.inflection.length > 0 && (
					<div class="word-inflections">
						<span class="title">{this.controller.polyglot.t("word.inflections")}</span>
						<ul>
						{this.word.inflection.map((i) => {
							return (
								<li><span>{i}</span></li>
							)
						})}
						</ul>
					</div>
				)}
				{this.word.synonyms?.length > 0 && (
					<div class="word-synonyms">
						<span class="title">
							Synonyms
						</span>
						<ul>
						{this.word.synonyms.map((s) => {
							return (
								<li><span>{s}</span></li>
							)
						})}
						</ul>
					</div>
				)}
				</div>
			</div>
		)
	}
}
