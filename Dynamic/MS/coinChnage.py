#follows the same approach for of subset and the unbounded knapsack
def change(arr, s, n, m = {}):
    key = n, s
    if key in m:
        return m[key]
    if s == 0:
        return 1
    if n == 0:
        return 0
    elif arr[n - 1] > s:
        
        m[key] = change(arr, s, n - 1)
        return m[key]
    m[key] = change(arr, s - arr[n - 1], n) + change(arr, s, n- 1)
    return m[key]
    
x, y = list(map(int, input().split(' ')))
arr = list(map(int, input().split(' ')))
print(change(arr, x, y))