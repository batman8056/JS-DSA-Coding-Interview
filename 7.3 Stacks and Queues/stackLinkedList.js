class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (!this.top) return "Stack is empty";
        let removedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return removedNode.val;
    }

    peek() {
        return this.top ? this.top.val : "Stack is empty";
    }

    isEmpty() {
        return this.size === 0;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // Output: 20
console.log(stack.peek()); // Output: 10
