const { LinkedListNode } = require('./LinkedListNode.js')

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  getNode() {
    console.log(`${this.head} ${this.tail} yay!`)
  }
}

new LinkedList().getNode()
new LinkedListNode().getLLNode()