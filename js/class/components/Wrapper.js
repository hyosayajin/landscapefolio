import PSElement from "../PSElement";

export default class Wrapper extends PSElement {
	/**
	 * @type {Wrapper}
	 */
	static #wrapper = null;

	/**
	 * @type {HTMLElement}
	 */
	#element;

	get element() {
		return this.#element;
	}

	/**
	 * @type {string|HTMLElement|HTMLElement[]}
	 */
	#content;

	get content() {
		return this.#content;
	}

	/**
	 * @type {{id: string, className: string}}
	 */
	#attr = { id: "wrapper", className: "wrapper" };

	get attributes() {
		return this.#attr;
	}

	/**
	 *
	 * @param {{content: string|HTMLElement|HTMLElement[], attr: {id: string, className: string}}} params
	 * @returns {Wrapper}
	 */
	static Init(params = {}) {
		if (Wrapper.#wrapper === null) Wrapper.#wrapper = new Wrapper(params);
		return Wrapper.#wrapper;
	}

	/**
	 *
	 * @param {content: string|HTMLElement|HTMLElement[]} content
	 */
	constructor(content = []) {
		super();

		this.#content = content;

		this.#element = Wrapper.Create(this.tags.div, this.#content, this.#attr);
	}

	/**
	 *
	 * @param {HTMLElement|HTMLElement[]} trigger
	 */
	focus(trigger = []) {
		const listnerFunc = (e) => {
			e.stopPropagation();

			this.#element.classList.add("focus");
		};

		/**
		 * 
		 * @param {HTMLElement} t 
		 */
		const listner = (t) => {
			t.addEventListener("mouseenter", listnerFunc);
		};

		if (!Array.isArray(trigger)) listner(trigger);
		else
			trigger.forEach((t) => {
				listner(t);
			});
	}
}
