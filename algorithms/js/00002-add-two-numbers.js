/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const ListNode = function (val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    dummyHead = new ListNode(0);
    p = l1;
    q = l2;
    curr = dummyHead;
    let carry = 0;
    while (p || q) {
        let x = p ? p.val : 0;
        let y = q ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p) p = p.next;
        if (q) q = q.next;
    }
    if (carry) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
};
