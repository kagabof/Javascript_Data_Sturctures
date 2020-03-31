class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop () {
        if(!this.length) return undefined;
        let tail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = tail.prev;
            this.tail.next = null;
            tail.prev = null;
        }
        this.length--;
        return tail;
    }

    shift () {
        if(!this.length) return undefined;
        let head = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            head.next = null;
        }
        this.length--;
        return head;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get (index) {
        if(typeof(index) !== 'number' || index < 0 || index > this.length - 1) return undefined;
        if(index === 0) return this.head;
        if(index === this.length - 1) return this.tail;
        if(index <= this.length/2) {
            let count = 0;
            let current = this.head;
            while (index !== count) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length - 1;
            let current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
            return current;
        }
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
        
        if (index < 0 || index >= this.length) return undefined;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevIndex = this.get(index - 1);
        newNode.next = prevIndex.next;
        newNode.prev = prevIndex;
        prevIndex.next= newNode;
        this.length++;
        return true;
    }

    remove (index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift(index);
        if(index === this.length - 1) return this.pop(index);
        
        let result = this.get(index);
        let prevNode = result.prev;
        let nextNode = result.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        result.next = null;
        result.prev = null;
        this.length--;
        return result;
    }

    reverse () {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev =  null;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            node.prev = next;
            prev = node;
            node = next;
        }
        return this;
    }

    print () {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr.join(' <--> ');
    }
}

let p = new DoubleLinkedList();

p.push(5)
p.push('ded')
p.push('kagabo')
p.push('kagaboss')
p.push('kagabwwo')
p.reverse()
console.log(p.get(4))
console.log(p.print())