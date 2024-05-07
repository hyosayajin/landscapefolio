import PSElement from "../PSElement";

export default class Button extends PSElement {
	/**
	 * @type {HTMLElement}
	 */
	#element;

	get element() {
		return this.#element;
	}

	/**
	 * @type {string|HTMLElement}
	 */
	#content;

	get content() {
		return this.#content;
	}

	/**
	 * @type {{id: string, className: string}}
	 */
	#attr = {
		className: "button",
	};

	/**
	 * @param {{id: string, className: string}} attr
	 */
	set attributes(attr) {
		this.#attr = attr;

		Button.SetAttr(this.#element, this.#attr);
	}

	get attributes() {
		return this.#attr;
	}

	/**
	 *@param  {{content: string|HTMLElement, attr: {id: string, className: string}}} params
	 */
	constructor(params = {}) {
		super();

		const attributes = params.attr ?? this.#attr;

		this.#content = params.content;

		this.#element = Button.Create(this.tags.button, this.#content, attributes);
	}
}
