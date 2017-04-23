/*
 *
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

function longestSubstring(chars) {
    var currLength = 0;
    var maxLength = 0;

    var map = new Map();
    for (var counter = 0; counter < string.length; counter++) {

        //We have not encountered this character yet
        if (!map.has(chars[counter])) {
            currLength++;
            map.set(chars[counter], counter);
        }

        // We have seen this character before
        else {
        maxLength = currLength > maxLength? currLength: maxLength;
        currLength = currLength - map.get(chars[counter]) -1;
        map.delete(chars[counter]);
        map.set(chars[counter], counter);
        }

    }
    return maxLength;
}

