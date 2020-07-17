// YOUR CODE HERE
class $ {
  constructor(str) {
    elements: [];
    this.getElements(str);
  }

  getElements(str) {
    if(str[0]==='.')
      this.elements = [...document.getElementsByClassName(str.slice(1))];
      else if(str[0]==='#')
      this.elements = [document.getElementById(str.slice(1))];
      else this.elements = [...document.getElementsByTagName(str)];

      return this;
  }

  hide(){
    this.elements.forEach(elem=>{
      elem.style.display="none"
    })

    return this;
  }

  show(){
    this.elements.forEach(elem=>{
      elem.style.display="inherit"
    })

    return this;
  }

  addClassName(className){
    this.elements.forEach(elem =>
      elem.classList.add(className)
    )

    return this;
  }

  removeClassName(className){
    this.elements.forEach(elem =>
      elem.classList.remove(className)
    )

    return this;
  }

  text(txt){
    this.elements.forEach(elem =>
      elem.innerText=txt
      )

      return this;
  }

  addChild(tag){
    this.elements.forEach(elem =>
      elem.appendChild(document.createElement(tag))
      )

      return this;

  }


}
