
function maxProfit(prices){
    let left = 0; //buy
    let right = 1; //sell
    let maxprofit = 0;

    while(right < prices.length){
        if(prices[left] < prices[right]){
            profit = prices[right] - prices[left]
            maxprofit = Math.max(maxprofit, profit)
        } else {
            left = right
        }
        right ++
    }
    return maxprofit;
}

console.log(maxProfit([7,1,5,3,6,4]))

// Here's a breakdown of the code maxProfit with a clear example:

// Purpose:

// This function calculates the maximum profit that can be made by buying and selling a stock once within a given array of prices.
// Key Steps:

// Initialization:

// left and right pointers are set to the first two indices of the prices array, representing potential buy and sell points.
// max_profit is initialized to 0 to track the maximum profit found so far.
// Iterating through prices:

// The while loop continues as long as the right pointer hasn't reached the end of the array.
// Potential Profit Check:

// Inside the loop, it compares the prices at left and right:
// If prices[left] < prices[right], it means there's a potential profit to be made by buying at left and selling at right.
// Calculate and Update Profit:

// If a potential profit exists:
// It calculates the current profit as prices[right] - prices[left].
// It updates max_profit with the maximum value between the current max_profit and the calculated profit.
// Adjust Pointers:

// If no potential profit exists (meaning the price has decreased or stayed the same):
// It moves the left pointer to the right index, essentially starting a new potential buying point.
// The right pointer always moves to the next index to explore potential selling points.
// Return Maximum Profit:

// After the loop, the function returns the final max_profit value, representing the highest possible profit found.
// Example:

// Consider prices = [7, 1, 5, 3, 6, 4]:

// left = 0, right = 1, max_profit = 0
// right moves to 2, 5 > 1 (profit), max_profit = 4
// right moves to 3, no profit, left moves to 3
// right moves to 4, 6 > 3 (profit), max_profit = 6 (updated)
// right moves to 5, no profit, left moves to 5
// Loop ends
// Function returns max_profit = 6
// Therefore, the maximum profit achievable in this example is 6 by buying at 1 and selling at 6.