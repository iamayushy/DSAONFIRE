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

// Reverse LinkedList;
let dum = null;

while(a!== null){
    let next = a.next;
    a.next = dum;
    dum = a;
    a = next;


}
while(dum){
    console.log(dum.val);
    dum = dum.next
}
/*
dum = null
1 => 2 => 3 => 4 => 5 => 6
let next = a.next (2)
a.next = dum 1 => dum(null);
dum = a; => 
a = next;
*/