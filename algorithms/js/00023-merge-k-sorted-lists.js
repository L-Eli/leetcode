/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let priorityQueue = new PriorityQueue;
    for (let i = 0; i < lists.length; i++) {
        list = lists[i];
        if (list) {
            priorityQueue.push(list.val, list);
        }
    }

    let head = point = new ListNode(0);
    while (node = priorityQueue.pop()) {
        point.next = new ListNode(node.val);
        point = point.next;
        node = node.next;
        if (node) {
            priorityQueue.push(node.val, node);
        }
    }
    return head.next;
};

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    push(priority, value) {
        let index = 0;
        for (; index < this.queue.length; index++) {
            let item = this.queue[index];
            if (item.priority > priority) {
                break;
            }
        }
        this.queue.splice(index, 0, {
            priority,
            value,
        });
    }

    pop() {
        if (this.empty()) {
            return null;
        }

        return this.queue.shift().value;
    }

    empty() {
        return this.queue.length < 1;
    }
}