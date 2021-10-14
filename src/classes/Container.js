import Vue from 'vue';

export default class Container {
  constructor(elements) {
    this.elements = elements;
  }

  mixElements() {
    let m = this.elements.length
    let t
    let i

    while (m) {
      i = Math.floor(Math.random() * m--)
      t = this.elements[m]
      Vue.set(this.elements, m, this.elements[i])
      Vue.set(this.elements, i, t)
    }

    return this.elements;
  }
}