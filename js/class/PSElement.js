export default class PSElement {
	lorem =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem enim incidunt laudantium impedit nemo ipsa deleniti? Incidunt animi pariatur, iure deleniti quasi suscipit quam minima sit at? Iusto, quam voluptatum.";

	tags = {
		div: "div",
		span: "span",
		section: "section",
		header: "header",
		nav: "nav",
		ul: "ul",
		li: "li",
		a: "a",
		p: "p",
		img: "img",
		button: "button",
		/**
		 *
		 * @param {number} level
		 * @returns {string}
		 */
		heading: (level = 1) => `h${level}`,
	};

	/**
	 * Empty constructor
	 */
	constructor() {}

	/**
	 * @param {string} tag
	 * @param {string|HTMLElement|HTMLElement[]} content
	 * @param {{id: string, className: string}} attr
	 */
	static Create(tag, content = null, attr = {}) {
		try {
			if (!tag || tag === undefined || typeof tag !== "string") throw new Error("The HTML tag is not defined");

			const element = document.createElement(tag);

			PSElement.SetAttr(element, attr);

			if (content !== null) PSElement.GiveChild(content, element);

			return element;
		} catch (err) {
			console.log(err);
		}
	}

	/**
	 *
	 * @param {string|HTMLElement|HTMLElement[]} child
	 * @param {HTMLElement|HTMLElement[]} parent
	 */
	static GiveChild(child, parent) {
		if (Array.isArray(child)) {
			const children = child;

			for (let i = 0; i < children.length; i++) {
				const child = children[i];

				parent.appendChild(child);
			}
		} else if (typeof child !== "string") parent.appendChild(child);
		else parent.textContent = child;
	}

	/**
	 *
	 * @param {HTMLElement} element
	 * @param {{id: string, className: string}} attr
	 */
	static SetAttr(element, attr = {}) {
		for (const key in attr) {
			if (Object.hasOwnProperty.call(attr, key)) {
				let attribute;

				const value = attr[key];

				switch (key) {
					case "className":
						attribute = "class";
						break;

					/* case /^data[A-Z][a-z]+/:
						attribute = "data";
						break; */

					default:
						attribute = key;
						break;
				}

				element.setAttribute(attribute, value);
			}
		}
	}
}
