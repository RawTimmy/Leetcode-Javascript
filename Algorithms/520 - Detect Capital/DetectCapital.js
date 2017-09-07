/**
 *  @RawTimmy
 */

 /**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return /^[A-Z]*$|^[A-Z][a-z]*$|^[a-z]+$/g.test(word);
};