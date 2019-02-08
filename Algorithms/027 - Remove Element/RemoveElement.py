class Solution:
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        cc = 0;
        for i in range(len(nums)):
            if nums[i] != val:

                nums[cc] = nums[i];
                cc += 1;

        del nums[cc:];
        return len(nums);
