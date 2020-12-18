class Solution {
func lengthOfLIS(_ nums: [Int]) -> Int {
    if nums.isEmpty {
        return 0
    }
    var dp = [Int](repeating: 1, count: nums.count)
    
    // var ans = 1
    
    for i in 1..<nums.count {
            var max = 0
            for j in 0..<i{
                if nums[j] < nums[i] && max < dp[j]{
                    max = dp[j]
                }
            dp[i] = max + 1
        //     if dp[i] > ans {
        //     ans = dp[i]
        // }
        }
    }

    return dp.max()!
}

}