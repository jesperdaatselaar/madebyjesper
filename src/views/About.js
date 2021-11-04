import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("About - Made by Jesper");
  }

  async getHTML() {
    return `<h1>About</h1>`;
  }
}
