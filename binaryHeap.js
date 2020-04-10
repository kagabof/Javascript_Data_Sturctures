class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12];
        // this.values = [];
    }

    insert(element) {
        this.values.push(element);
        return this.bubbleUp();
    }

    bubbleUp () {
        let idx = this.values.length - 1;
        const element = 
        this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx -1)/2);
            let parent = this.values[parentIdx];
            if(parent >= element) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
        return this.values;
    }

    extractMax () {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown(0);
        }
        
        return max;
    }
    
    sinkDown (n) {
    let length = this.values.length;
    let element = this.values[n];

    while (true) {
        let child2N = 2 * n + 2, child1N = 2 * n + 1;;
        let swap = null;
        if (child1N < length) {
            let child1 = this.values[child1N];
            if (child1 < element) swap = child1N;
        }
        if (child2N < length) {
            var child2 = this.values[child2N];
            if (child2N < (swap == null ? element : child2))
                swap = child2N;
        }

        if (swap == null) break;
        this.values[n] = this.values[swap];
        this.values[swap] = element;
        n = swap;
    }
}
}

let heap = new MaxBinaryHeap();

console.log(heap.insert(55));
console.log(heap.extractMax());
console.log(heap.values);