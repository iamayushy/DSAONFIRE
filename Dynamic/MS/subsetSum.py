def sub(arr,t, n, d={}):
    key = n , t
    if key in d:
        return d[key]
    if t == 0:
        return True
    if n == 0:
        return False
    elif arr[n - 1] > t:
        d[key] =sub(arr, t, n - 1, d)
        return d[key]
    d[key] = sub(arr, t-arr[n - 1], n - 1, d) or sub(arr, t, n - 1, d)
    return d[key]
    
    
x = int(input())
arr = list(map(int, input().split(' ')))
t = int(input())
print('yes' if sub(arr, t, len(arr)) else 'no')