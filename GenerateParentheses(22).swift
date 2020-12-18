class Solution {
    func generateParenthesis(_ n: Int) -> [String] {
        var parenthesis: [String] = []
        
        makeParenthisHelper(ps: n - 1, pe: n - 1, current: "(", parenthesis: &parenthesis)
        
        return parenthesis
    }
    
    
    func makeParenthisHelper(ps: Int, pe: Int, current: String, parenthesis: inout [String]) {

        if ps == 0 && pe == 0 {
            parenthesis.append(current + ")")
            return
        } else {
            if pe > 0 && ps - pe < 1{
                makeParenthisHelper(ps: ps, pe: pe - 1, current: current + ")", parenthesis: &parenthesis)
            }
            if ps > 0 {
                makeParenthisHelper(ps: ps - 1, pe: pe, current: current + "(", parenthesis: &parenthesis)
            }
        }
    }
}