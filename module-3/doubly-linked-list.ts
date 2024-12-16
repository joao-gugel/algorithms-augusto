class LNode {
  constructor(
    public value: any,
    public next: LNode | null = null,
    public prev: LNode | null = null
  ) {}
}

class DoublyLinkedList {
  constructor(
    public head: LNode | null = null,
    public tail: LNode | null = null
  ) {}

  addToFront(value: any) {
    const newNode = new LNode(value);

    newNode.next = this.head;

    if (this.head) {
      this.head.prev = newNode;
    }
    if (!this.tail) {
      this.tail = newNode;
    }

    this.head = newNode;
  }

  addToEnd(value: any) {
    const newNode = new LNode(value);

    newNode.prev = this.tail;

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
  }

  removeFromFront() {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      }

      return value;
    }

    return null;
  }

  removeFromEnd() {
    if (this.tail) {
      const value = this.tail.value;

      this.tail = this.tail.prev;

      if (this.tail) {
        this.tail.next = null;
      }

      return value;
    }

    return null;
  }
}

const dl = new DoublyLinkedList();

dl.addToEnd(10);
dl.addToEnd(20);

console.log(dl.removeFromEnd());
console.log(dl.removeFromEnd());

dl.addToFront(6);
dl.addToFront(5);
dl.addToFront(4);
dl.addToFront(3);
dl.addToFront(2);
dl.addToFront(1);
