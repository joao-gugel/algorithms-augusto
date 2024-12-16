class LINode {
  constructor(public value: any, public next: LINode | null = null) {}
}

class LinkedList {
  constructor(
    public head: LINode | null = null,
    public tail: LINode | null = null
  ) {}

  add(value: any) {
    const node = new LINode(value);

    if (!this.tail) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }

  shift() {
    if (!this.head) return null;

    const value = this.head.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    return value;
  }
}

const ll = new LinkedList();

ll.add(10);
ll.add(20);

ll.shift();
ll.shift();

ll.add(5);

console.log(ll);
