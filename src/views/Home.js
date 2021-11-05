import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home - Made by Jesper");
    this.setDescription("The portfolio site of Jesper van Daatselaar");
  }

  async getHTML() {
    return `<h1>Home</h1>`;
  }
}
