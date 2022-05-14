def backtrack(first, curr ,nums):
            # if the combination is done
        if len(curr) == k:  
            output.append(curr[:])
            return
        for i in range(first, n):
            curr.append(nums[i])
            backtrack(i + 1, curr, nums)
            curr.pop()
        
output = []
nums =[1, 2, 3]
n = len(nums)
for k in range(n + 1):
    backtrack(0, [], nums)
print(output)