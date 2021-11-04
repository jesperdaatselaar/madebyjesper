import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Projects - Made by Jesper");
  }

  async getHTML() {
    return `<h1>Projects</h1>`;
  }
}
