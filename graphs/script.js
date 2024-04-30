class Graph {
    constructor() {
        this.adjacencyList = new Map();

    }

    addNode(node) {
        this.adjacencyList.set(node, []);
    }

    addEdge(origin, destination) {
        this.adjacencyList.get(origin).push(destination);
    }

    removeNode(nodename) {
        this.adjacencyList.delete(nodename);
        for(let e of this.adjacencyList){
            e[1].map((item, index) => {
                if(e === nodename){
                    e[1].splice(index, 1);
                }
            });
        }
    }
}

const adjacencyList = new Map();
const G1 = new Graph();

G1.addNode('A');
G1.addNode('B');
G1.addNode('C');
G1.addNode('D');
G1.addEdge('A', 'B');
G1.addEdge('A', 'C');
G1.addEdge('B', 'D');
G1.addEdge('C', 'D');

console.log(G1);

G1.removeNode('D');

console.log(G1);
