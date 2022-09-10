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

  getHead = () => {
    return this.head;
  };

  getTail = () => {
    return this.tail;
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

  pop = () => {
    //Iterate over the list, keep track of current and previous. Point the second to last element to null.
    let current = this.head;
    let prev;
    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
    this.tail = prev;
    return current;
  };

  contains = (value) => {
    //Iterate over the list, return true if value of node matches value argument
    let tmp = this.head;
    while (tmp) {
      if (tmp.value === value) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    return false;
  };

  find = (value) => {
    //Iterate over the list, keeping track of the index. Return the current index if value is a match.
    let tmp = this.head;
    let current = 0;
    while (tmp) {
      if (tmp.value === value) {
        return current;
      }
      current += 1;
      tmp = tmp.nextNode;
    }
    return null;
  };

  toString = () => {
    //Iterate over the list, return a graphic representation if the node has a next value, else return 'null'
    let stringModel = "";
    let tmp = this.head;
    while (tmp) {
      if (tmp.nextNode) {
        stringModel += `( ${tmp.value} ) -> `;
      } else {
        stringModel += `( ${tmp.value} ) -> null`;
      }
      tmp = tmp.nextNode;
    }
    return stringModel;
  };
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
