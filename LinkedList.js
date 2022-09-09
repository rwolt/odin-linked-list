class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  append = (value) => {
    //Appends to the end of the list
    const appended = new Node(value);
    if (!this.head) {
      this.head = appended;
    } else {
      this.tail.nextNode = appended;
    }
    this.tail = appended;
  };

  prepend = (value) => {
    //Prepends to the start of the list
    const prepended = new Node(value);
    if (!this.head) {
      this.tail = prepended;
    } else {
      prepended.nextNode = this.head;
    }
    this.head = prepended;
  };

  size = () => {
    //Iterate over the list and increase a counter
    let tmp = this.head;
    let count = 0;
    while (tmp) {
      count += 1;
      tmp = tmp.nextNode;
    }
    return count;
  };

  at = (index) => {
    //Iterate through the list until reaching the index, beginning from 0
    let tmp = this.head;
    let current = 0;
    while (current < index) {
      tmp = tmp.nextNode;
      current += 1;
    }
    return tmp;
  };
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let list = new LinkedList();
list.prepend("first");
list.append("second");
list.append("third");
list.append("fourth");
// console.log(list.head);
// console.log(list.tail);
// console.log(list.size());
console.log(list.at(3));
