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

  async getHTML() {
    return "";
  }
}
