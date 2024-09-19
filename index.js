// Function to calculate the number of unique paths
function uniquePaths(m, n) {
    // Create a 2D array filled with 1's for the base case
    const dp = Array(m).fill(0).map(() => Array(n).fill(1));
    
    // Iterate through the grid starting from (1,1) and compute the number of paths
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    
    // The bottom-right corner contains the number of unique paths
    return dp[m - 1][n - 1];
}

// Tests
function runTests() {
    console.log("Running tests...");

    // Test case 1: 3x3 grid (example)
    console.assert(uniquePaths(3, 3) === 6, `Test 1 Failed: Expected 6, got ${uniquePaths(3, 3)}`);
    
    // Test case 2: 3x2 grid
    console.assert(uniquePaths(3, 2) === 4, `Test 2 Failed: Expected 4, got ${uniquePaths(3, 2)}`);
    
    // Test case 3: 7x3 grid
    console.assert(uniquePaths(7, 3) === 28, `Test 3 Failed: Expected 28, got ${uniquePaths(7, 3)}`);
    
    // Test case 4: 1x1 grid (minimal case)
    console.assert(uniquePaths(1, 1) === 1, `Test 4 Failed: Expected 1, got ${uniquePaths(1, 1)}`);
    
    // Test case 5: 2x2 grid
    console.assert(uniquePaths(2, 2) === 2, `Test 5 Failed: Expected 2, got ${uniquePaths(2, 2)}`);
    
    // Test case 6: 10x10 grid
    console.assert(uniquePaths(10, 10) === 48620, `Test 6 Failed: Expected 48620, got ${uniquePaths(10, 10)}`);

}

// Run the tests
runTests();
