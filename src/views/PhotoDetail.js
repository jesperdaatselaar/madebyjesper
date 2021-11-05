import AbstractView from "./AbstractView.js";
import photos from "../data/photos.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.photo = photos.find((p) => p.id === params.id);
    this.setTitle(`Photo ${this.photo.id} - Made by Jesper`);
  }

  async getHTML() {
    return `
    <img src="${this.photo.path}">
    <h1>${this.photo.name}</h1>
    <p>${this.photo.description}</p>
    `;
  }
}
