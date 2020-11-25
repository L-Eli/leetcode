/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let mapS = {};
    let mapT = {};
    for (let i = 0; i < s.length; i++) {
        let chS = s.charAt(i);
        let chT = t.charAt(i);
        if (!mapS[chS] && !mapT[chT]) {
            mapS[chS] = chT;
            mapT[chT] = chS;
            continue;
        }
        if (mapS[chS] !== chT || mapT[chT] !== chS) {
            return false;
        }
    }

    return true;
};