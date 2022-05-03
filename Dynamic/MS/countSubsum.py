# Insted of finding true set false = 0 and true = 1 

def sub(arr,t, n, d={}):
    key = n , t
    if key in d:
        return d[key]
    if t == 0:
        return 1
    if n == 0:
        return 0
    elif arr[n - 1] > t:
        d[key] =sub(arr, t, n - 1, d)
        return d[key]
    d[key] = sub(arr, t-arr[n - 1], n - 1, d) + sub(arr, t, n - 1, d)
    return d[key]
    
    
x = int(input())
arr = list(map(int, input().split(' ')))
t = int(input())
print(sub(arr, t, len(arr)))