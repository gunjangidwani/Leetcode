class Solution {
func climbStairs(_ n: Int) -> Int {
    var howMany = [Int](repeating: 0, count: n + 1)
    howMany[0] = 1
    howMany[1] = 2

    if n > 2 {
        for i in 2..<n {
            howMany[i] = howMany[i-1] + howMany[i-2]
        }
    }
    
    return howMany[n - 1]
}

}