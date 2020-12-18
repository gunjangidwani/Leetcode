class Solution {
    func twoCitySchedCost(_ costs: [[Int]]) -> Int {
        var sum = 0
        for c in costs {
            
        }
        var costSorted = costs.sorted { $0[0] - $0[1] < $1[0] - $1[1]  }
        
        print(costSorted)
        
        for c in 0..<costSorted.count / 2 {
            let costA = costSorted[c][0]
               sum += costA
        }
    
        for c in costSorted.count / 2 ..< costSorted.count {
            let costB = costSorted[c][1]
               sum += costB
        }
        return sum
    }
}