export default class {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  setDescription(description) {
    document.querySelector("meta[name='description']").content = description;
  }

  setStyle(css) {
    let style = document.querySelectorAll("style");
    if (style.length === 0) {
      document.head.appendChild(document.createElement("style"));
    }
    style = document.querySelector("style");
    style.innerHTML = css;
  }

  async getHTML() {
    return "";
  }
}
