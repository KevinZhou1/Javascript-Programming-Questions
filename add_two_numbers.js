/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

function Node(data) {
    this.data = data;
    this.next = null;
}


*/


//Iterative approach
function addTwo(firstLL, secondLL ) {

	var carry = 0;
	var sum = 0;
	var returnList = new Node();
	var cursor = returnList;

	//When both are null that is when we know we have finished adding the integers
	while (firstLL.data != null && secondLL.data != null && carry == 0 ) {
		// IN javascript, null gets evaluated to 0 so we are safe
		sum = firstLL.data + secondLL.data + carry;

		//handle the carry
		if (sum >= 10) {
			sum = sum - 10;
			carry = 1;
		}
        else {
            carry = 0;
        }

        cursor.data = sum;
        //WE ARE FINISHED IF CONDITION IS TRUE
		if (firstLL.next.data == null && secondLL.next.data == null && carry ==0) {
        cursor.next = new Node();
		cursor = cursor.next;
    }
	}
 return returnList;

}










