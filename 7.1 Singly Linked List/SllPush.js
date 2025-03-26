//piece od data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = this.next;
    }
}
// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")
// console.log(first)

class SingleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){

    }
}

var list = new SingleLinkedList()
list.push("Hi")
list.push("there")
list.push("how")
list.push("are")
list.push("you")
console.log(list);