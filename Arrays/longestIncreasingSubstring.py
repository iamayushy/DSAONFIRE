def lis(arr):
    
    MAX = 1 # assusmes that the longest can be 1
    L = 1 # initial length
    for i in range(1, len(arr)):
        if arr[i] >= arr[i - 1]: # compares with prev number
             
            L += 1 # increases the length
        else:
            MAX = max(MAX, L) # this assigns the max length of the string
            L = 1 # reinitialize the length to begin with new string
    MAX = max(MAX, L) # after the loop end check if the MAX always greater than L // Return The max
    
    return MAX

x = int(input())
for i in range(x):
    a = int(input())
    arr = list(map(int, input().split()))
    print(lis(arr))
    
             

  
  
