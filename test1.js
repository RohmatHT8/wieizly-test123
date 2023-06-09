const arr = [1,3,5,7,9]

const minMaxSum = (arr) => {
    let arrTemp = []
    for(let i = 0; i < arr.length; i++) {
        let temp = 0
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] !== arr[i]) {
                temp += arr[j]
            }
        }
        arrTemp.push(temp)
    }
    
    console.log(Math.min(...arrTemp), Math.max(...arrTemp))
}

minMaxSum(arr)