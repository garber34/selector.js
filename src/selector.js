// YOUR CODE HERE
class $ {
  constructor(str) {
    elements: [];
    this.getElements(str);
  }

  getElements(str) {
      this.elements = [...document.getElementsByClassName(str.slice(1))];
  }

}
