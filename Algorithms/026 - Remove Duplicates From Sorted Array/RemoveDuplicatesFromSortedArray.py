class Solution:
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) <= 1:
            return len(nums);

        cc = 0;
        for i in range(1, len(nums)):
            if nums[i] == nums[i-1]:
                cc += 1;
            else:
                nums[i-cc] = nums[i];

        return len(nums) - cc;
