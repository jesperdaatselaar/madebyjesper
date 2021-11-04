import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home - Made by Jesper");
  }

  async getHTML() {
    return `<h1>Home</h1>`;
  }
}
