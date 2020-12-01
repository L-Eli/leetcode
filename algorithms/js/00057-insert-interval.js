/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (!intervals.length) {
        return [newInterval];
    }

    let index = 0;
    for (; index < intervals.length; index++) {
        if (intervals[index][0] > newInterval[0]) {
            break;
        }
    }
    intervals.splice(index, 0, newInterval);
    for (; index < intervals.length;) {
        if (index && intervals[index - 1][1] >= intervals[index][0]) {
            intervals[index - 1][1] = Math.max(intervals[index - 1][1], intervals[index][1]);
            intervals.splice(index, 1);
            continue;
        }
        index++;
    }
    return intervals;
};