import AbstractView from "./AbstractView.js";
import photos from "../data/photos.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Photos - Made by Jesper");
    this.setDescription(
      "This is the photo gallery page. Here I highlight my best photos",
    );
    this.photos = photos;
  }

  async getHTML() {
    let output = [];
    for (let i = 0; i < this.photos.length; i++) {
      output.push(
        `<a data-link href="/photos/${this.photos[i].id}"><img src="${this.photos[i].path}"></a>`,
      );
    }
    return output.join("\n");
  }
}
