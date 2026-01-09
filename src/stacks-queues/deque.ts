export class Deque<T> {

    private nodes: T[] = [];

    constructor() {

    }

    public push(val: T) {
        this.nodes.push(val)
    }

    public pop() {
        this.nodes.pop();
    }

    public pushFront(val: T) {
        this.nodes.unshift(val);
    }

    public popFront() {
        this.nodes.shift();
    }

    public peekFront() {
        return this.nodes[0];
    }

    public peek() {
        return this.nodes[this.nodes.length - 1];
    }
}