import { assert } from "https://deno.land/std@0.220.0/assert/assert.ts";
import { Node, SingleLinkedList } from "./singleLinkedList.ts";
import { assertObjectMatch } from "https://deno.land/std@0.220.0/assert/assert_object_match.ts";
import { assertEquals } from "https://deno.land/std@0.220.0/assert/assert_equals.ts";

Deno.test(
  "SingleLinkedList: a SingleLinkedList should have a head and tail",
  () => {
    const LL = new SingleLinkedList();

    assertObjectMatch(LL, { head: null, tail: null });
  },
);

Deno.test(
  "SingleLinkedList: a node in SingleLinkedList should have value and the next node ",
  () => {
    const node = new Node(1);

    assertEquals(node.value, 1);
    assertEquals(node.next, null);
  },
);


Deno.test(
  "SingleLinkedList: the head.next element should point to node2",
  () => {
    const LL = new SingleLinkedList();

    const node1 = new Node(1);
    const node2 = new Node(2);

    LL.insertNodeAtHead(node1).insertNodeAtHead(node2);

    assertEquals(LL.head?.next, node1);
  },
);

Deno.test(
  "SingleLinkedList: the head element should be the last element inserted ",
  () => {
    const LL = new SingleLinkedList();

    const node1 = new Node(1);
    const node2 = new Node(2);

    LL.insertNodeAtHead(node1).insertNodeAtHead(node2);

    assertEquals(LL.head, node2);
    assertEquals(LL.head?.next, node1);
    assertEquals(LL.tail, node1);
    assertEquals(LL.tail?.next, null);
  },
);

Deno.test(
  "SingleLinkedList: the tail element should be the fist element inserted",
  () => {
    const LL = new SingleLinkedList();

    const node1 = new Node(1);
    const node2 = new Node(2);

    LL.insertNodeAtHead(node1).insertNodeAtHead(node2);

    assertEquals(LL.tail, node1);
  },
);

Deno.test("SingleLinkedList: the tail.next should be null", () => {
  const LL = new SingleLinkedList();

  const node1 = new Node(1);
  const node2 = new Node(2);

  LL.insertNodeAtHead(node1).insertNodeAtHead(node2);

  assertEquals(LL.tail?.next, null);
});

Deno.test("SingleLinkedList: nodes in a LL are represented correct", () => {
  const LL = new SingleLinkedList();

  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);

  LL.insertNodeAtHead(node1).insertNodeAtHead(node2).insertNodeAtHead(node3);

  assertEquals(LL.head?.value, 3);
  assertEquals(LL.head?.next?.value, 2);
  assertEquals(LL.tail?.value, 1);
});

Deno.test("SingleLinkedList: in a LL I am able to pop the Last node", () => {
  const LL = new SingleLinkedList();

  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);

  const val = LL.insertNodeAtHead(node1)
    .insertNodeAtHead(node2)
    .insertNodeAtHead(node3)
    .popLastNode();

  assertEquals(val, node1);
});

Deno.test(
  "SingleLinkedList: in a LL poping the last element will change the tail in the LL",
  () => {
    const LL = new SingleLinkedList();

    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    LL.insertNodeAtHead(node1)
      .insertNodeAtHead(node2)
      .insertNodeAtHead(node3)
      .popLastNode();

    assertEquals(LL.head?.value, 3);
    assertEquals(LL.head?.next?.value, 2);
    assertEquals(LL.tail?.value, 2);
    assertEquals(LL.tail?.next, null);
  },
);

Deno.test("SingleLinkedList: poping an empty LL will return null", () => {
    const LL = new SingleLinkedList();

      const val = LL.popLastNode();

    assertEquals(val, null);

});

