function hourglassSum(arr) {
    // since max value is -9 and there are 7 values in an hourgalss so smallest value is -9 * 7 
    let maxSum = -63;
    for (let i = 0; i < 4; i++) { 
        for (let j = 0; j < 4; j++) { 
            let top = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            let mid = arr[i+1][j+1];
            let bot = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            let sum = top + mid + bot; 
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}