import PSElement from "../PSElement";

export default class Anchor extends PSElement {
	/**
	 * @type {HTMLElement}
	 */
	#element = null;

	/**
	 *
	 * @param {{content: string|HTMLElement, attr: {id: string,className: string}}} params
	 */
	constructor(params = {}) {
		super();

		this.#element = Anchor.Create(this.tags.a, params.content, params.attr);
	}

	get element() {
		return this.#element;
	}
}
