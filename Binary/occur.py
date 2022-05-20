# first occurence of element


def first(arr):
    low = 0
    ans = -1
    target = 10
    high = len(arr) - 1 
    while low <= high:
        mid = low + ((high - low) // 2)
        if arr[mid] == target:
            ans = mid
            high = mid - 1
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return ans
arr = [2, 3, 10, 10, 10, 10, 10];


#last occurence of element
def last(arr):
    low = 0
    ans = -1
    target = 10
    high = len(arr) - 1 
    while low <= high:
        mid = low + ((high - low) // 2)
        if arr[mid] == target:
            ans = mid
            low = mid + 1
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return ans

x = first(arr)
y = last(arr)
print((y - x) + 1) # this gives count of the element.