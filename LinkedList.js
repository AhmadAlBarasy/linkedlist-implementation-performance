// LinkedList nodes implementation
class Node {
    value;
    next;
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

// Iterator implementation to iterate over the LinkedList
class LinkedListIterator {
    list;
    cursor;
    constructor(list){
        this.list = list; // the list instance that we want to iterate through
        this.cursor = this.list.head; // a pointer to track which node we are located at
    }
    hasNext(){
        return this.cursor !== null; // retruns false if we reached the end of the list
    }
    next(){
        if (!this.cursor) // if we reached the end of the list, return null
            return null; 
        const temp = this.cursor.value;
        this.cursor = this.cursor.next; // advance the pointer to the next node
        return temp;
    }
}

class LinkedList {
    length;
    head;
    tail;
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    get size() {
        return this.length;
    }

    addLast(value) {
        const temp = new Node(value, null);
        if (!this.head){ // it means this is the first node to be added to the list
            this.head = temp;
            this.tail = temp;
            this.length++;
            return;
        }
        this.tail.next = temp;
        this.tail = temp;
        this.length++;
    }

    removeLast(){
        if (this.isEmpty()) // if the list is empty, it returns null
            return null;
        if (this.length === 1){ // edge case: if the list has only one node
            const temp = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp; // return the value of the node
        }
        let dummyPointer = this.head; // initiate a pointer to reach the node before the last one
        while(dummyPointer.next.next !== null) {
            dummyPointer = dummyPointer.next;
        }
        const temp = this.tail.value;
        this.tail = dummyPointer;
        this.tail.next = null;
        this.length--;
        return temp; // return the value of the node
    }

    addFirst(value) {
        const temp = new Node(value, null);
        if (!this.head){ // it means this is the first node to be added to the list
            this.head = temp;
            this.tail = temp;
            this.length++;
            return;
        }
        temp.next = this.head;
        this.head = temp;
        this.length++;
    }

    removeFirst(){
        if (this.isEmpty()) // if the list is empty, it returns null
            return null;
        if (this.length === 1){ // edge case: if the list has only one node
            const temp = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp; // return the value of the node
        }
        const temp = this.head.value;
        this.head = this.head.next;
        this.length--;
        return temp; // return the value of the node
    }
    iterator(){
        return new LinkedListIterator(this);
    }
}

// test 1: adding 500000 items to our LinkedList
const list = new LinkedList();
console.time("linkedlist");
for (let i = 0; i < 500000; i++) {
    list.addFirst(i); 
}
console.timeEnd("linkedlist");


// test 2: adding 500000 items to an array 
const arr = [];
console.time("array");
for (let i = 0; i < 500000; i++) {
    arr.unshift(i); 
}
console.timeEnd("array");
