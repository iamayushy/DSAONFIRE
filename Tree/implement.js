/*
Tree => contains nodes points to other known as edges nodes
the last or node with no node is known as leaf node.
the relationship between is parent => child
the top node is called the root node

//
1.binary tree is tree which has at most 2 children 
2.exactly has a 1 root
3. exactly 1 unique path b/w root and any node
*/
class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}
const root = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
const g = new Node('g')
const h = new Node('h')

root.left = b
root.right = c
b.left = d
b.right = e
c.left = f
c.right = g
g.right = h

//dfs
function iter(root){
if(!root){
    return []
}
const arr = []
const stack = [root]
while(stack.length > 0){
    const current = stack.pop()
    arr.push(current.val)
    
    if(current.right) stack.push(current.right)
    if(current.left) stack.push(current.left)
}
    return arr
}
function recur(root){
    if(!root){
        return []
    }
   const left =  recur(root.left)
   const right = recur(root.right)
   return [root.val, ...left, ...right]

}

// bfs

