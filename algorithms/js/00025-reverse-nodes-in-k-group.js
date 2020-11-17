/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let root = new ListNode(0, head);
    head = root;
    let current = head.next;

    while (head && current) {
        let nodes = [];
        for (let i = 0; i < k; i++) {
            nodes.push(current);
            current = current.next;
            if (!current) {
                break;
            }
        }
        if (nodes.length === k) {
            for (let i = k - 1; i > 0; i--) {
                nodes[i].next = nodes[i - 1];
            }
            head.next = nodes[k - 1];
            nodes[0].next = current;
            head = nodes[0];
        }
    }

    return root.next;
};