import PSElement from "../PSElement";
import Image from "./Image";
import Item from "./Item";
import Navigation from "./Navigation";

export default class Header extends PSElement {
	/**
	 * @type {Header}
	 */
	static #header = null;

	/**
	 *
	 * @param {content: string|HTMLElement|HTMLElement[]} content
	 * @returns {Header}
	 */
	static Init(content) {
		if (Header.#header === null) Header.#header = new Header(content);
		return Header.#header;
	}

	/**
	 * @type {Item}
	 */
	#item = Item;

	/**
	 * @type {Image}
	 */
	#image = Image;

	/**
	 * @type {Navigation}
	 */
	#nav = Navigation;

	/**
	 * @type {HTMLElement}
	 */
	#element;

	get element() {
		return this.#element;
	}

	/**
	 * @type {HTMLElement}
	 */
	#logo;

	/**
	 * @type {HTMLElement}
	 */
	#navigation;

	/**
	 * @type {HTMLElement[]}
	 */
	#children;

	get children() {
		return this.#children;
	}

	/**
	 * @type {{id: string, className: string}}
	 */
	#attr = {
		id: "header",
		className: "header",
	};

	get attributes() {
		return this.#attr;
	}

	/**
	 * @type {string|HTMLElement|HTMLElement[]}
	 */
	#content;

	get content() {
		return this.#content;
	}

	/**
	 * @param {string|HTMLElement|HTMLElement[]} content
	 */
	constructor(content = "") {
		super();

		try {
			if (this.#item === undefined) throw new Error("Can not create item elements");
			if (this.#image === undefined) throw new Error("Can not create image elements");
			if (this.#nav === undefined) throw new Error("Can not create navigation elements");
		} catch (error) {
			console.log(error);
		}

		this.#content = content;

		this.#children = [...this.#content, this.#Logo(), this.#Navigation()];

		this.#element = Header.Create(this.tags.header, this.#children, this.#attr);
	}

	#Logo(path = "/logo.png") {
		const logo = [new this.#image({ src: path }).element, Header.Create(this.tags.span, "world changer")];
		const attributes = {
			id: "logoContainer",
			className: "logo-container",
		};

		this.#logo = Header.Create(this.tags.div, logo, attributes);

		return this.#logo;
	}

	/**
	 * @param {string} path
	 */
	set logo(path) {
		if (this.#logo !== undefined) this.#logo.remove();

		Header.GiveChild(this.#Logo(path), this.#element);
	}

	/**
	 * @type {HTMLElement[]}
	 */
	#navItems = (() => {
		const items = [];

		for (let i = 1; i < 6; i++) {
			items.push({ text: `Nav item ${i}` });
		}

		return items;
	})();

	#Navigation() {
		const params = () => {
			return {
				content: this.#navItems,

				attr: { id: "headerNav", className: "header-nav" },

				options: { bind: true },
			};
		};

		this.#navigation = new this.#nav(params.bind(this)()).element;

		return this.#navigation;
	}

	/**
	 * @param {HTMLElement[]} items
	 */
	set navItems(items) {
		if (this.#navigation !== undefined) this.#navigation.remove();

		this.#navItems = items;

		Header.GiveChild(this.#Navigation(), this.#element);
	}
}
