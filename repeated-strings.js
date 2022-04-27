function repeatedString(s, n) {
    let originalCount = s.split('a').length - 1; // count number of A in original string
    let stringCount = s.length; // get lenght of string 
    // get number of full string
    let repeatCount = Math.floor(n/stringCount);  
    // get remainder of full string 
    let remainder = n % s.length; 
    let remainderString = s.slice(0, remainder); 
    let remainderCount = remainderString.split('a').length - 1; 
    let totalA = originalCount * repeatCount + remainderCount; 
    
    return totalA;   
}