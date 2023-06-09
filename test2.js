const arr = [-4,3,-9,0,4,1]

const plusMinus = (arr) => {
   let countPositive = 0
   let countNegative = 0
   let countZero = 0
   
   for(let i = 0; i < arr.length; i++) {
     if(arr[i] > 0) {
        countPositive++
     }else if(arr[i] == 0) {
        countZero++
     }else {
        countNegative++
     }
   }

   console.log((countNegative / arr.length).toFixed(6))
   console.log((countPositive / arr.length).toFixed(6))
   console.log((countZero / arr.length).toFixed(6))
}

plusMinus(arr)