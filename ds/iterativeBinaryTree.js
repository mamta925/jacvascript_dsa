class Node {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let newNode = new Node(data);
    let current = this.root;
    if (current == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  getRootNode() {
    return this.root;
  }
  insertNode(node, newNode) {
    if (newNode.element < node.element) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrder(root) {
    var stack = [];

    if (node !== null) {
      stack.push(root);
    }

    var res = [];

    while (stack.length > 0) {
      let node = stack.pop();

      res.push(node.element);

      if (node.right !== null) {
        stack.push(node.right);
      }

      if (node.left !== null) {
        stack.push(node.left);
      }
    }

    return res;
  }

  preOrder(root) {
    var stack = [];
    let current = root;

    var res = [];
    do {
        if(current!=null){
            stack.push(current);
            current = current.left;
        } else{
            current = stack.pop();
            res.push(current.element);
            current = current.right;
        }

    } while(stack.length > 0 || current != null)

    return res;
  }

  postOrder(root) {
    var stack = [];
    stack.push(root);
    var res = [];
    while(stack.length > 0) {
        let current = stack.pop();
        res.unshift(current.element);
        if (current.left) {
            stack.push(current.left);
        }
        if (current.right) {
            stack.push(current.right);
        }

    } 

    return res;
  }
}

let BST = new BinarySearchTree();
BST.insert(8);
BST.insert(2);
BST.insert(1);
BST.insert(10);
BST.insert(4);
BST.insert(5);
BST.insert(9);
BST.insert(27);
var root = BST.getRootNode();
BST.postOrder(root);
