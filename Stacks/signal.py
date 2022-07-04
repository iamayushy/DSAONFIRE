def ngr(arr):
    s = []
    ans = []
    for i in range(len(arr)):
        while(len(s) != 0 and arr[i] >= arr[s[-1]]):
            s.pop()
        if(len(s) == 0):
            ans.append(i + 1)
        else:
            ans.append(i - s[-1])
        s.append(i)
    # return ans
    x = ''
    for ele in ans:
        x += str(ele) + ' '
    return x
for i in range(int(input())):
    x = int(input())
    arr = list(map(int, input().split()))
    print(ngr(arr))
