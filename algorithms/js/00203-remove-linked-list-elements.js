/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let root = new ListNode(0, head);
    while (head && head.next) {
        if (head.next.val === val) {
            head.next = head.next.next;
            continue;
        }
        head = head.next
    }
    while (root.next && root.next.val === val) {
        root.next = root.next.next;
    }
    return root.next;
};