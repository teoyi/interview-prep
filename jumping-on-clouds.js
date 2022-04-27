function findPaths(c, paths){ 
    if (c.length > 1) { //remaining items of the array 
        // Creating paths from given path
        let path1 = paths.slice();
        let path2 = paths.slice(); 
        
        // for jump of 1 
        path1 = (c[1] !== 1) ? [...path1, 1] : 0;
        // for jump of 2 
        path2 = (c[2] !== 1) ? [...path2, 2] : 0;
        
        // immediately terminate if both are invalidated 
        if (path1 === 0 && path2 === 0) {
            paths = 0; 
        } else if (path1 !== 0 &&  path2 === 0) {
            // path1 is good, reduce the cloud array with the successful path
            // call the function recursively to continue down this path  
            return findPaths(c.slice(1), path1);
        } else if (path1 === 0 && path2 !== 0) {
            // path2 is good, reduce the cloud array with the successful path
            // call the function recursively to continue down this path
            return findPaths(c.slice(2), path2);
        } else if (path1 !== 0 && path2 !== 0) { 
            // both paths are good continue the check recursively 
            path1 = findPaths(c.slice(1), path1); 
            path2 = findPaths(c.slice(2), path2); 
            
            return (path1.length < path2.length) ? path1 : path2; 
        }
    }
    
    return paths; 
}
/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // Write your code here
    const min = 2; 
    const max = 100; 
    let jumps = 0; 
    
    // Cover constraints 
    if (c.length >= min && c.length <= max) { 
        jumps = findPaths(c, []);
    }
    
    // return the jumps 
    return ((typeof jumps === "number") ? jumps : jumps.length); 

}