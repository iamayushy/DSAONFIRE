//Find Duplicate In Array where there exist only one duplicate array

// 1. Sort the array and find the the same number
// 2. Create a hashmap and store the number and its index if repeated then return the index of dublicate

function duplicate(nums){

    let slow = nums[0]
    let fast = nums[0]
    do{
        slow = nums[slow]
        fast = nums[nums[fast]]
    }while(slow !== fast)

    fast = nums[0]
    while(slow !== fast){
        slow = nums[slow]
        fast = nums[fast]
    }
    console.log(slow);
}
let arr = [1,3,4,2,2]
duplicate(arr)

