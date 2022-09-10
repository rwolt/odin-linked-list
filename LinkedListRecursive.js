class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  append = (value) => {
    //Append to end of list: tail points to appended node, appended node points to null
    const appended = new Node(value);
    if (this.head) {
      this.tail.nextNode = appended;
    } else {
      this.head = appended;
    }
    this.tail = appended;
  };

  prepend = (value) => {
    const prepended = new Node(value);
    if (this.head) {
      prepended.nextNode = this.head;
    } else {
      this.tail = prepended;
    }
    this.head = prepended;
  };
}
const list = new LinkedList();
list.append("1");
list.prepend("first");
console.log(list.head);
console.log(list.tail);
