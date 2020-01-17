/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums1len = nums1.length;
    let nums2len = nums2.length;
    let nums1index = 0;
    let nums2index = 0;
    let tmp = [];
    while (nums1index < nums1len || nums2index < nums2len) {
        if (nums1index < nums1len && (nums2index >= nums2len || nums1[nums1index] < nums2[nums2index])) {
            tmp.push(nums1[nums1index]);
            nums1index++;
        } else if (nums2index < nums2len) {
            tmp.push(nums2[nums2index]);
            nums2index++;
        }  else {
            break;
        }
    }
    let pos = tmp.length / 2;
    if (pos != Math.floor(pos)) {
        return tmp[Math.floor(pos)];
    }
    return (tmp[pos - 1] + tmp[pos]) / 2;
};
