import PSElement from "../PSElement";

export default class Item extends PSElement {
	/**
	 * @type {HTMLElement}
	 */
	#element = null;

	/**
	 *
	 * @param {{content: string|HTMLElement|HTMLElement[], attr: {id: string,className: string}}} params
	 */
	constructor(params = {}) {
		super();

		this.#element = Item.Create(this.tags.li, params.content, params.attr);
	}

	get element() {
		return this.#element;
	}
}
