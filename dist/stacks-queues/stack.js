"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    nodes = [];
    push(node) {
        this.nodes.push(node);
    }
    pop() {
        return this.nodes.pop();
    }
    peek() {
        return this.nodes[this.nodes.length - 1];
    }
}
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map