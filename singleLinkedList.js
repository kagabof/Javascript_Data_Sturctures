class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop () {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
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

    shift () {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        (this.length === 0) && (this.tail = null);
        return currentHead;
    }

    unshift (val) {
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            let prevHead = this.head;
            this.head = node;
            this.head.next = prevHead;
        }
        this.length++;
        return this;
    }

    get (index) {
        if(index < 0 || index > this.length) return undefined;
        let count = 0;
        let current = this.head;
        while(count !== index) {
            current = current.next;
            count +=1;
        }
        return current;
    }
    set (index, val) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert (index, val) {
        if (index < 0 || index > this.length) return undefined;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevIndex = this.get(index - 1);
        newNode.next = prevIndex.next;
        prevIndex.next= newNode;
        this.length++;
        return true;
    }

    remove (index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift(index);
        if(index === this.length - 1) return this.pop(index);
        
        let prevNode = this.get(index - 1);
        let result = prevNode.next;
        prevNode.next = prevNode.next.next;
        return result;
    }

    print () {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr.join(' --> ');
    }

    reverse () {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev =  null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}


let p = new SingleLinkedList();