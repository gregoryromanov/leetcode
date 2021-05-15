class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function generate_list(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let current: ListNode | null = null;
  let new_node: ListNode;

  for (let n of values) {
    if (!head || !current) {
      current = head = new ListNode(n);
    } else {
      new_node = new ListNode(n);
      current.next = new_node;
      current = new_node;
    }
  }
  return head;
}

function showValues(list: ListNode | null): void {
  while (list) {
    console.log(list.val);
    list = list.next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head: ListNode | null = null;
  let current: ListNode | null = null;
  let to_be_added: number = 0;

  while (l1 || l2 || to_be_added > 0) {
    let l1_val: number = l1 ? l1.val : 0;
    let l2_val: number = l2 ? l2.val : 0;

    let new_val: number = l1_val + l2_val + to_be_added;
    to_be_added = 0;

    if (new_val >= 10) {
      [to_be_added, new_val] = String(new_val)
        .split("")
        .map((n) => +n);
    }

    if (!head || !current) {
      head = current = new ListNode(new_val);
    } else {
      let new_node: ListNode = new ListNode(new_val);
      current.next = new_node;
      current = new_node;
    }

    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }

  return head;
}

const l1: ListNode | null = generate_list([2, 3, 4]);
const l2: ListNode | null = generate_list([2, 8, 9]);

const sum: ListNode | null = addTwoNumbers(l1, l2);

showValues(sum);
