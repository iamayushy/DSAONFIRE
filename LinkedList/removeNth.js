class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
let a = new Node(1)
let b = new Node(2)
let c = new Node(3)
let d = new Node(4)
let e = new Node(5)
let f = new Node(6)

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
 
let n = 2;

let start = new Node(0);

start.next = a;

let fast = start;
let slow = start;

for(let i = 0; i < n; i++){
    fast = fast.next;
}
while(fast.next !== null){
    fast = fast.next;
    slow = slow.next;
}
slow.next = slow.next.next;

while(a){
    console.log(a.val);
    a = a.next
}

/*
1. Create A Dummy Node and initialize it with head node;
2. Create two pointers=> {
    move the fast pointer till n;
    after that move the fast pointer and slow pointer by one till fast reaches end of linkedlist.

    next point slow.next = slow.next.next;
    return head;
}

*/