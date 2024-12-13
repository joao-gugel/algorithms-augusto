## Stack

LIFO -> Last In, First Out.

The last element in our stack will be the first element that pops.

Pop: O(1) -> Pops the last element
Append: O(1) -> Add a new element on the top

#### APPEND

We have a pointer to the head, when an element is added, we move the head pointer to the new element, and the new element points to the previous head.

#### POP

Move the head pointer to the next element node.
