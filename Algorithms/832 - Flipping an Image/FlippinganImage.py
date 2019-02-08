class Solution:
    def flipAndInvertImage(self, A):
        """
        :type A: List[List[int]]
        :rtype: List[List[int]]
        """
        for numArr in A:
            for i in range((len(numArr) + 1) // 2):
                numArr[i], numArr[~i] = numArr[~i] ^ 1, numArr[i] ^ 1
        return A
            
