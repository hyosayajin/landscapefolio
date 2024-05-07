import PSElement from "../PSElement";

export default class Image extends PSElement {
	/**
	 * @type {HTMLElement}
	 */
	#element = null;

	/**
	 *
	 * @param {{id: string, className: string, src: string}} attr
	 */
	constructor(attr = {}) {
		super();

		this.#element = Image.Create(this.tags.img, null, attr);
	}

	get element() {
		return this.#element;
	}
}
