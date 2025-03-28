class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.front) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (!this.front) return "Queue is empty";
        let removedNode = this.front;
        this.front = this.front.next;
        this.size--;
        return removedNode.val;
    }

    peek() {
        return this.front ? this.front.val : "Queue is empty";
    }

    isEmpty() {
        return this.size === 0;
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // Output: 10
console.log(queue.peek()); // Output: 20
