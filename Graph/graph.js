class Graph {
    constructor(){
        this.adjacencyList = {}
    }

addVertex(vertex){
    if(!this.adjacencyList[vertex])  this.adjacencyList[vertex] = []


}

addEdge(vertex1, vertex2){
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
}
printVertexes(){
console.log(this.adjacencyList)
}
}

let g = new Graph()

g.addVertex('kasaragod')
g.addVertex('calicut')
g.addVertex('kannur')

g.addEdge('kasaragod', 'kannur')

g.printVertexes()

