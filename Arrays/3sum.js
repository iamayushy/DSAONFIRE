// 3 sum => return the all the unique pairs whose some is 3
// 1.Sort the array first 2. Make a constant and move check b + c = a // if true store it in the an array
// TC = 0(n2) -> 0(n) => for auxiallary space

const threeSum = (nums) => {
    nums = nums.sort((a, b) => a - b)
    let ans = []

    for(let i = 0; i < nums.length; i++){

        if(i === 0 || i > 0 && nums[i] !== nums[i - 1]){
        let lo = i + 1
        let hi = nums.length - 1
        let sum = 0 - nums[i]

        while(lo < hi){
            const check = nums[lo] + nums[hi]

            if(check === sum){
                ans.push([nums[i], nums[lo], nums[hi]])

                while(lo < hi && nums[lo] === nums[lo+1]) lo++
                while(lo < hi && nums[hi] === nums[hi - 1]) hi--

                lo++
                hi--
            }
            else if(check < sum) lo++
            else hi--

        }
    }
    }
    return ans
}

const nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))
