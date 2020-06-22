/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (!head.next) {
        return null;
    }

    let list = [];
    let current = head;

    if (n == 1) {
        while (current.next && current.next.next) {
            current = current.next;
        }
        current.next = null;
        return head;
    }

    while (current && current.next) {
        list.push(current);
        list.push(current.next);
        current = current.next.next;
    }

    if (current) {
        list.push(current);
    }

    if (n == list.length) {
        return head.next;
    }

    list[list.length - n - 1].next = list[list.length - n + 1];
    return head;
};