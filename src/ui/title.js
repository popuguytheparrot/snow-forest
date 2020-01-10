import { h, text } from "/web_modules/effector-dom.js";

export function Title() {
  h("h1", () => {
    text("Hello world!");
  });
}
