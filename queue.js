class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    dequeue () {
        if(!this.first) return undefined;
        let currentFirst = this.first;
        this.first = currentFirst.next;
        this.size--;
        (this.size === 0) && (this.last = null);
        return currentFirst;
    }
}

let q = new Queue();
console.log(q.enqueue(1));
console.log(q.dequeue());