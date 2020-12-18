class Solution {
func generate(_ numRows: Int) -> [[Int]] {
    if numRows == 0 {
        return []
    }
    if numRows == 1 {
        return [[1]]
    }
    var triangle: [[Int]] = [[1],[1, 1]]
    if numRows > 2 {
        for n in 2..<numRows {
            triangle.append([Int](repeating: 1, count: n + 1))
            for k in 1..<n {
                triangle[n][k] = triangle[n-1][k-1] + triangle[n-1][k]
            }
        }
    }
    return triangle
}
}