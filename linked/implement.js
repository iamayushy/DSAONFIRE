class node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
let  a = new node(1)
let b = new node(2)
let c = new node(3)
let d = new node(4)

a.next = b
b.next = c
c.next = d
d.next = new node(5)
d.next.next = new node(6)
console.log(a)
while(a !== null){
    console.log(a.data)
    a = a.next
}

