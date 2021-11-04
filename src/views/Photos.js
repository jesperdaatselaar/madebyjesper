import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Photos - Made by Jesper");
  }

  async getHTML() {
    return `<h1>Photos</h1>`;
  }
}
