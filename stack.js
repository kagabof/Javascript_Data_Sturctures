class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push (val) {
        let node = new Node(val);
        if(!this.first){
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop () {
        if(!this.size) return undefined;
        let first = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            first.next = null;
        }
        this.size--;
        return first;
    }
}

let st = new Stack();
st.push(' am')
st.push('I')
// console.log(st.push('I'))
// console.log(st.push(' am'))
console.log(st.pop(), st.size)