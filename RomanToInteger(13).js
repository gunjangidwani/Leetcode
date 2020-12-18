/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0
    for(let i = 0; i < s.length; i++ ){
        let next = s.charAt(i + 1) 
          switch(s.charAt(i)){
              case 'I':
                if(next ==='V'){
                    sum += 4;
                    i += 1;
               }else if(next ==='X'){
                    sum += 9;
                    i += 1;
               }else{
                     sum += 1;
               }
                break;
              case 'V':
                 sum += 5;
                 break;
              case 'X':
                  if(next ==='L'){
                      sum += 40;
                       i += 1;
                   }else if(next ==='C'){
                      sum += 90;
                       i += 1;
                   }else{
                     sum += 10;
                   }
                 break;
              case 'L':
                 sum += 50;
                 break;
              case 'C':
                  if(next ==='D'){
                      sum += 400;
                       i += 1;
                   }else if(next ==='M'){
                      sum += 900;
                      i += 1;
                   }else{
                     sum += 100;
                   }
                 break;
              case 'D':
                 sum += 500;
                 break;
              case 'M':
                 sum += 1000;
                 break;
           }
       }
        return sum
   };