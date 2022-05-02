/*
First In First Out DSA
[1, 2, 3, 5]
1=> Push push at top
2 => pop removes the first element
3 => top gives the the first element.
*/

class Queue{
    constructor(){
        this.box = []
    }

    enqueue(ele){
        this.box.push(ele)
    }

    dequeue(){
        if(this.box.length === 0){
            return 'Underflow'
        }
        return this.box.shift()
    }

    front(){
        if(this.box.length === 0){
            return 'EMpty'
        }
        return  this.box[0]
    }
}

let q1 = new Queue()

q1.enqueue(23)
q1.enqueue(28)
console.log(q1);
q1.dequeue()
console.log(q1);
console.log(q1.front());