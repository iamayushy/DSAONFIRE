const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
var removeMaximum = function (head) {
    if(head === null){
        return null
    }
    else if(!head.next){
        return head.next
    }
    let max = new LinkedListNode(-1)
    let curr = head
    let pos = 0
    while(curr !== null){
        if(max.data <= curr.data){
            max.data = curr.data
            
        }
        curr = curr.next
    }
    //find index of the last occurence of the largest element
    curr = head
    let ans = 0
    while(curr !== null){
        if(max.data === curr.data){
            ans = pos
        }
        pos++
        curr = curr.next
    }
    curr = head
    while(curr !== null && ans !== 1){
        curr = curr.next
        ans--
    }
    if(!curr){
        return head.next
    }
    curr.next = curr.next.next
    return head
    
    
};
