/**
 * @RawTimmy
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Using Recursion Method.

var addOperation = function(l1, l2, carry){
    if(!l1 && !l2 && !carry){
        return null;
    }
    
    l1 = l1 || new ListNode(0);
    l2 = l2 || new ListNode(0);
    carry = carry || 0;
    
    var l3 = new ListNode((l1.val + l2.val + carry) % 10); // Update sum to l3.val;
    carry = parseInt((l1.val + l2.val + carry) / 10); // Check whether carry is 1 or 0;
    
    if(l1.next || l2.next || carry){
        l3.next = addOperation(l1.next, l2.next, carry);
    }
    return l3;
}

var addTwoNumbers = function(l1, l2) {
    return addOperation(l1,l2);
};