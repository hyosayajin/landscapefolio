import PSElement from "../PSElement";

export default class Title extends PSElement {
	/**
	 * @type {HTMLElement}
	 */
	#element = null;

	/**
	 *
	 * @param {{content: string|HTMLElement|HTMLElement[], attr: {id: string,className: string}, level : number}} params
	 */
	constructor(params = {}) {
		super();

		const level = params.level;

		this.#element = Title.Create(this.tags.heading(level), params.content, params.attr);
	}

	get element() {
		return this.#element;
	}
}
