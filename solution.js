var postorderTraversal = function(root) {
    let list = [];
    if (!root) return list
    const helper = (node) => {
        if (!node) return
        helper(node.left)
        helper(node.right)
        list.push(node.val)
    }
    
    helper(root)
    return list
};
