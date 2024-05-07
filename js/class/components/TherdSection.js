import PSElement from "../PSElement";

export default class TherdSection extends PSElement {
	/**
	 * @type {TherdSection}
	 */
	static #therdSec = null;

	/**
	 * @returns {TherdSection}
	 */
	static Init() {
		if (TherdSection.#therdSec === null) TherdSection.#therdSec = new TherdSection();

		return TherdSection.#therdSec;
	}

	/**
	 * @type {HTMLElement}
	 */
	#element;

	get element() {
		return this.#element;
	}

	/**
	 *@type {{id:string, className: string}}
	 */
	#attr = {
		id: "therdSection",
		className: "therd-sec",
	};

	get attributes() {
		return this.#attr;
	}

	/**
	 * @type {HTMLElement[]}
	 */
	#children;

	get children() {
		return this.#children;
	}

	/**
	 *
	 */
	constructor() {
		super();

		this.#element = TherdSection.Create(this.tags.section, this.#children, this.#attr);
	}
}
