/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let listA = listMaker(headA);
    let listB = listMaker(headB);
    let lengthA = listA.length - 1;
    let lengthB = listB.length - 1;
  
    if (listA[lengthA] != listB[lengthB]) {
      return null;
    } else {
      let answer;
      while (
        listA[lengthA] == listB[lengthB] &&
        lengthA > -1 &&
        lengthB > -1
      ) {
        answer = listA[lengthA];
        lengthA--;
        lengthB--;
      }
        console.log(answer)
      return answer;
    }
  
    function listMaker(head) {
      let cur = head;
      let list = [];
      while (cur != null) {
        list.push(cur);
        cur = cur.next;
      }
      return list;
    }
  };
  