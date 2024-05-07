import PSElement from "../PSElement";
import Anchor from "./Anchor";
import Item from "./Item";

export default class Navigation extends PSElement {
	/**
	 * @type {Item}
	 */
	#Item = Item;

	/**
	 * @type {Anchor}
	 */
	#Anchor = Anchor;

	/**
	 * @type {HTMLElement|null}
	 */
	#element = null;

	/**
	 * @type {HTMLElement}
	 */
	#content;

	get content() {
		return this.#content;
	}

	/**
	 *
	 * @param {{content: {text:string, href:string}[], attr: {id: string, className: string}, options: {bind: boolean}}} params
	 */
	constructor(params = {}) {
		super();

		const bindItems = params.options !== undefined && params.options.bind !== undefined ? params.options.bind : false;

		let content = params.content;

		try {
			if (!Array.isArray(content)) throw Error("The navigation content is not a string array");

			content = content.map((item) => {
				if (bindItems) item = new this.#Anchor({ content: item.text, attr: { href: item.href ?? "#" } }).element;
				return new this.#Item({ content: item }).element;
			});

			content = Navigation.Create(this.tags.ul, content);

			this.#element = Navigation.Create(this.tags.nav, content, params.attr);
		} catch (error) {
			this.element = null;

			console.log(error);
		}
	}

	get element() {
		return this.#element;
	}
}
