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
    //     var current = this.head;
    //     while(current){
    //         console.log(current.val)
    //         current = current.next;
    //     }
    // }

    //pop to the end of the node with value O(n)
    pop(){
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
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return newNode
    }
    get(index){
        if(index < 0 || index >=this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++
        }
        return current;

    }
    set(index,val){
       var foundIndex =  this.get(index);
       if(foundIndex){
            foundIndex.val = val;
            return console.log(true);
       }
       return false;
    }
    insert(){
        
    }
}
var list = new SingleLinkedList();
list.push("Hi");
list.push("there");
list.push("how");
list.push("are");
list.push("you");
list.push(100);
console.log(list);
// Head → "Hi" → "there" → "how" → "are" → "you" → 100 → null

// list.pop(); // Removes 100
// list.pop(); // Removes "you"

// list.traverse();
// console.log(list);
// list.shift();// Remove the first element of the list
// console.log(list);
// list.unshift("hello");// Added the first element of the list
// console.log(list);

list.get(1);
// console.log(list);

list.set(1, "hey")
console.log(list);
