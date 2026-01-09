
export class Stack<T> {

   
    private nodes:T[] = [];


    public push(node: T) {
        this.nodes.push(node);
    }

    public pop() {
        return this.nodes.pop()
    }

    public peek() {
        return this.nodes[this.nodes.length -1];
    }

}