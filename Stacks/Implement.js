class Stack {
    constructor(size){
        this.size = size
        this.box = []
    }

    push(ele){
        this.box[this.size] = ele;
        this.size++;
    }
    pop(){
        if(this.size === 0) {
            return 'Outofbound'
        }
        this.size--;
        return this.box.pop()
    }
    peek(){
        if(this.box.length === 0) return []
        return this.box[this.box.length - 1]
    }
}

let s1 = new Stack(0)
s1.push(34)
s1.push(245)
s1.push(1928)

console.log(s1);