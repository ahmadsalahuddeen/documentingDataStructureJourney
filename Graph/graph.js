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

removeEdge(vertex1, vertex2){
this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v)=>v !== vertex2) 
this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v)=>v !== vertex1) 

}

removeVertex(vertexToRemove){
while(this.adjacencyList[vertexToRemove].length){
    let edge = this.adjacencyList[vertexToRemove].pop()
this.removeEdge(vertexToRemove, edge)

}


delete this.adjacencyList[vertexToRemove]

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
g.addEdge('kasaragod', 'calicut')
g.removeEdge('calicut', 'kasaragod')
g.removeVertex('calicut')
g.printVertexes()

