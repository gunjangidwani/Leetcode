class Solution {
func numDecodings(_ s: String) -> Int {
    let arr = Array(s)
    var dp = [Int](repeating: 0, count: s.count + 1)
    
    dp[0] = 1
    dp[1] = s.first! == "0" ? 0 : 1
    
    if s.count >= 2 {
        for i in 2...s.count {
            let firstDigit = Int(String(arr[i - 1]))!
            if firstDigit >= 1{
                dp[i] += dp[i - 1]
            }
            let twoDigits = firstDigit + Int(String(arr[i - 2]))! * 10
            if twoDigits >= 10 && twoDigits <= 26 {
                dp[i] += dp[i - 2]

            }
        }
    }
    
    return dp[s.count]
}

}