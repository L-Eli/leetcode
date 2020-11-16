/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let root = new ListNode(0, head);
    let current = root;
    while (current.next && current.next.next) {
        let temp = current.next;
        current.next = temp.next;
        temp.next = temp.next.next;
        current.next.next = temp;
        current = current.next.next;
    }
    return root.next;
};