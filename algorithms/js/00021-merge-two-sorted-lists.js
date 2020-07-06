/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let result = null;
  let node = null;
  while (l1 || l2) {
    if (!l1) {
      if (!node) {
        node = new ListNode(l2.val);
        result = node;
      } else {
        node.next = new ListNode(l2.val);
        node = node.next;
      }
      l2 = l2.next;
    } else if (!l2) {
      if (!node) {
        node = new ListNode(l1.val);
        result = node;
      } else {
        node.next = new ListNode(l1.val);
        node = node.next;
      }
      l1 = l1.next;
    } else if (l1.val < l2.val) {
      if (!node) {
        node = new ListNode(l1.val);
        result = node;
      } else {
        node.next = new ListNode(l1.val);
        node = node.next;
      }
      l1 = l1.next;
    } else {
      if (!node) {
        node = new ListNode(l2.val);
        result = node;
      } else {
        node.next = new ListNode(l2.val);
        node = node.next;
      }
      l2 = l2.next;
    }
  }

  return result;
};
