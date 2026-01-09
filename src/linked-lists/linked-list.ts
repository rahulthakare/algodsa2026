export class ListNode<T> {
    val: T;
    next: ListNode<T> | null;
    constructor(val: T, next?: ListNode<T> | null) {
        this.val = val;
        this.next = next === undefined ? null : next;
    }
}

export function createList<T>(arr: T[]): ListNode<T> | null {
    if (arr.length === 0) return null;
    
    let head = new ListNode(arr[0], null);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i], null);
        current = current.next;
    }

    return head;
}

export function listToArray<T>(head: ListNode<T> | null): T[] {
    let arr: T[] = [];
    let current = head;
    while(current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}