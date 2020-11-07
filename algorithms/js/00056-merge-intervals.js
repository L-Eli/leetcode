/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length < 2) {
        return intervals;
    }

    intervals.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        }
        return 1;
    });

    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        if (result[result.length - 1][1] < intervals[i][0]) {
            result.push(intervals[i]);
        } else {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
        }
    }

    return result;
};
