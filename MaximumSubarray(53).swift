class Solution {

func maxSubArray(_ nums: [Int]) -> Int {
    var dp = nums
    var max = nums.max()!
    
    for i in 1..<nums.count {
        dp[i] = nums[i]
        if dp[i] < dp[i - 1] + nums[i]   {
            dp[i] = dp[i - 1] + nums[i]
            
            if max < dp[i] {
                max = dp[i]
            }
        }
    }
    
    return max
}
    
}