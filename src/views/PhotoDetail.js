import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.photoId = params.id;
    this.setTitle("Project - Made by Jesper");
  }

  async getHtml() {
    return `
            <h1>Photo</h1>
            <p>You are viewing Photo #${this.photoId}.</p>
        `;
  }
}
