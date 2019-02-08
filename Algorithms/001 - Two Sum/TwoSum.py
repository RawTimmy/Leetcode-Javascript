class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        num_dict = {};
        for i in range(len(nums)):
            if nums[i] in num_dict:
                return [num_dict[nums[i]],i];
            else:
                num_dict[target - nums[i]] = i;
