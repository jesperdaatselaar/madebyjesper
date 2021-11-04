import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("404 - Made by Jesper");
  }

  async getHTML() {
    return `<h1>404</h1>`;
  }
}
