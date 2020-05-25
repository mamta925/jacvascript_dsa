class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);

    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if ((index > 0 && index > this.size) || index < 0) {
      return false;
    }
    let node = new Node(element);
    let cur = this.head;
    let pre;
    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let pos = 0;
      while (pos < index) {
        pre = cur;
        cur = cur.next;
        pos++;
      }
      node.next = cur;
      pre.next = node;
    }
    this.size++;
  }
  size_of_list() 
  { 
      console.log(this.size); 
  } 
  // checks the list for empty
  isEmpty() {
    return this.size == 0;
  }

  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}
var ll = new LinkedList(); 
ll.add(10); 
ll.add(40);
ll.add(50);
ll.add(180);
console.log(ll.size_of_list()); 
ll.insertAt(60, 4); 
ll.insertAt(60, 0);
ll.printList(); 