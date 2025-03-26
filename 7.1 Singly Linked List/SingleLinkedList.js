//piece of data - val
//reference to next node - pointer 
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
// class to manage the linked list.
class SingleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //push into the end of the list new node with value O(1)
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // traverse(){
        // var current = this.head;
        // while(current){
    //         console.log(current.val)
    //         current = current.next;
    //     }
    // }

    //pop to the end of the node with value
    pop(val){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return console.log(current);
    }
}
var list = new SingleLinkedList()
list.push("Hi")
list.push("there")
list.push("how")
list.push("are")
list.push("you")
list.push(100)
console.log(list);
// Head → "Hi" → "there" → "how" → "are" → "you" → 100 → null

list.pop()//remove the last value 
list.pop()
// list.traverse();
console.log(list);
