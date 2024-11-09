function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var deleteNode = function (root, key) {
    if (!root) {
        return null;
    }
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.right)
            return root.left
        if (!root.left)
            return root.right
        let temp = findMin(root.right);
        root.val = temp.val;
        root.right = deleteNode(root.right, temp.val);
    }
    return root;
}

var findMin = function (root) {
    if (!root) {
        return null;
    }
    if (!root.left) {
        return root;
    } else {
        findMin(root.left);
    }
}


function insetNode(node, item) {
    if (!node) {
        return new TreeNode(item);
    }
    if (item <= node.val) {
        node.left = insetNode(node.left, item);
    } else {
        node.right = insetNode(node.right, item);
    }
    return node;
}

function printTree(node) {
    if (!node)
        return;
    printTree(node.left);
    console.log(node.val);
    printTree(node.right);
}

let root;
root = insetNode(root, 5);
root = insetNode(root, 3);
root = insetNode(root, 6);
root = insetNode(root, 2);
root = insetNode(root, 4);
root = insetNode(root, 7);
root = deleteNode(root, 2);
console.log("After deletion")
printTree(root);