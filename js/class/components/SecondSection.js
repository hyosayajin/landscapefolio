import PSElement from "../PSElement";

export default class SecondSection extends PSElement {
	/**
	 * @type {SecondSection}
	 */
	static #secondSec = null;

	/**
	 * @returns {SecondSection}
	 */
	static Init() {
		if (SecondSection.#secondSec === null) SecondSection.#secondSec = new SecondSection();

		return SecondSection.#secondSec;
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
		id: "secondSection",
		className: "second-sec",
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

		this.#element = SecondSection.Create(this.tags.section, this.#children, this.#attr);
	}
}
