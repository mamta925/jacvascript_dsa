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
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, key) {
    if (node == null) {
      return null;
    }
    if (key < node.element) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    if (key > node.element) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left == null || node.right == null) {
        node = null;
        return node;
      }
      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }
      let rightMinNode = this.findMinNode(node.right);
      node.element = rightMinNode && rightMinNode.element;
      node.right = this.removeNode(node.right, rightMinNode.element);
      return node;
    }
  }
  findMinNode(node) {
    if (node.left == null) {
      return node;
    } else {
       return this.findMinNode(node.left);
    }
  }
  getRootNode() {
    return this.root;
  }
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.element);
      this.inOrder(node.right);
    }
    return;
  }
  preOrder(node) {
    if (node !== null) {
      console.log(node.element);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.posOrder(node.right);
      console.log(node.element);
    }
  }
  search(node, data) {
    // if trees is empty return null
    if (node === null) return null;
    // if data is less than node's data
    // move left
    else if (data < node.element) return this.search(node.left, data);
    // if data is less than node's data
    // move left
    else if (data > node.element) return this.search(node.right, data);
    // if data is equal to the node data
    // return node
    else return node;
  }
}

let BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
var root = BST.getRootNode();
BST.preOrder(root);
//BST.remove(15);
//BST.inOrder(root);
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17
