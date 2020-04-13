class Graph {
    constructor () {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );

        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    } 

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {

            let ad = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, ad);
        }

        delete this.adjacencyList[vertex];
    }

    dfRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        })(start);
        return result;
    }
    dfIterative (start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentV;
        
        visited[start] = true;
        while(stack.length) {
            currentV = stack.pop();
            result.push(currentV);

            this.adjacencyList[currentV].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }

    breadthFirst (start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentV;

        while(queue.length) {
            currentV = queue.shift();
            result.push(currentV);

            this.adjacencyList[currentV].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
// g.removeVertex('kigali');
console.log(g.adjacencyList);
console.log(g.dfRecursive('A'));
console.log(g.dfIterative('A'));
console.log(g.breadthFirst('A'));
