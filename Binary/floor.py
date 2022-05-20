# floor of an element
def floor(arr):
    low = 0;
    high = len(arr) - 1
    target = 5
    ans = -1
    while low <= high:
        mid = low + ((high - low) // 2)
        if arr[mid] == target:
            return arr[mid]
        elif arr[mid] < target:
            ans = mid
            low = mid + 1
        else:
            high = mid - 1
    return arr[ans]

# ceil of an element
def ceil(arr):
    low = 0;
    high = len(arr) - 1
    target = 0
    ans = -1
    while low <= high:
        mid = low + ((high - low) // 2)
        if arr[mid] == target:
            return arr[mid]
        elif arr[mid] < target:
            low = mid + 1
        else:
            ans = mid
            high = mid - 1
    return arr[ans]


arr  = [1, 2, 3, 4, 6, 7, 8, 9, 10]
print(floor(arr))
print(ceil(arr))
