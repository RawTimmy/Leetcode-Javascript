class Solution:
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        maxRes = nums[0];
        sum = 0;
        for i in nums:
            if sum <= 0:
                sum = i;
            else:
                sum += i;

            if maxRes < sum:
                maxRes = sum;

        return maxRes;

        
