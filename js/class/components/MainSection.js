import PSElement from "../PSElement";
import Button from "./Button";
import Title from "./Title";

export default class MainSection extends PSElement {
	static #main = null;

	static Init() {
		if (MainSection.#main === null) MainSection.#main = new MainSection();

		return MainSection.#main;
	}

	/**
	 * @type {Title}
	 */
	#Title = Title;

	/**
	 * @type {Button}
	 */
	#Button = Button;

	ownTag = "main";

	/**
	 * @type {HTMLElement}
	 */
	#element;

	get element() {
		return this.#element;
	}

	/**
	 * @type {id: string, className: string}
	 */
	#attr = {
		id: "main",
		className: "main",
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

	constructor() {
		super();

		try {
			this.#children = [this.#FirstPart(), this.#SecondPart()];
		} catch (error) {
			console.log(error);
		}

		this.#element = MainSection.Create(this.ownTag, this.#children, this.#attr);
	}

	/**
	 * @type {HTMLElement}
	 */
	#baner;

	/**
	 * @returns {HTMLElement|Error}
	 */
	#CreateBaner() {
		const titleParamas = {
			content: "the world is changing here ...",

			attr: { className: this.tags.heading() },
		};

		this.#baner = new this.#Title(titleParamas).element;

		return this.#baner;
	}

	/**
	 *
	 * @param {string|HTMLElement} content
	 * @returns {HTMLElement}
	 */
	#CreateButton(content = "button", attr = {}) {
		return new this.#Button({ content: content, attr: attr }).element;
	}

	/**
	 * @returns {HTMLElement}
	 */
	#FirstPart() {
		const attributes = {
			className: "first-part",
		};

		const children = [
			this.#CreateBaner(),
			MainSection.Create(
				this.tags.div,
				["start", "explore", "change"].map((text, i) => {
					const button = this.#CreateButton(text);

					if (!i) button.classList.add("main-btn");

					return button;
				})
			),
		];

		return MainSection.Create(this.tags.div, children, attributes);
	}

	/**
	 * @returns {HTMLElement}
	 */
	#SecondPart() {
		const attributes = {
			className: "second-part",
		};

		const text = {
			begin: "In the first part we'll talk about this website and answer some questions in order to better understand the website goal, so let's getting started, let's go.",
			live: this.lorem,
			end: this.lorem,
		};

		let children = [
			{ title: "begening", content: MainSection.Create(this.tags.p, text.begin) },
			{ title: "the live", content: MainSection.Create(this.tags.p, text.live) },
			{ title: "end is here", content: MainSection.Create(this.tags.p, text.end) },
		];

		children = children.map((child) => {
			const title = new this.#Title({ content: child.title, level: 3 }).element;
			const content = typeof child.content !== "string" ? child.content : MainSection.Create(this.tags.span, child.content);

			const children = [title, content];

			return MainSection.Create(this.tags.div, children);
		});

		return MainSection.Create(this.tags.div, children, attributes);
	}
}
