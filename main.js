import "./assets/css/app.css";
import PSElement from "./js/class/PSElement";
import Wrapper from "./js/class/components/Wrapper";
import Item from "./js/class/components/Item";
import Header from "./js/class/components/Header";
import MainSection from "./js/class/components/MainSection";
import SecondSection from "./js/class/components/SecondSection";
import TherdSection from "./js/class/components/TherdSection";

const body = document.querySelector("body");
const app = document.getElementById("app");

/**
 *
 * @param {HTMLElement} root
 * @returns {boolean}
 */
function Render(root) {
	try {
		if (typeof PSElement === "undefined") throw Error("Error on loading page, retry");

		const headerOps = { logo: true };
		const header = Header.Init();

		header.navItems = [
			{ text: "service", href: "#" },
			{ text: "works", href: "#" },
			{ text: "about", href: "#" },
			{ text: "contact", href: "#" },
		];

		const main = MainSection.Init().element;

		const secondSection = SecondSection.Init().element;

		const therdSection = TherdSection.Init().element;

		const wrapperChildren = [header.element, main, secondSection, therdSection];

		let wrapper = Wrapper.Init(wrapperChildren);

		wrapper.focus(secondSection);

		wrapper = wrapper.element;

		PSElement.GiveChild(wrapper, root);

		return true;
	} catch (error) {
		console.log(error);

		return false;
	}
}

window.addEventListener("load", (e) => {
	Render(app);
});
