# The index of the smallest element in the array gives the rotation count
def search(arr):
    low = 0
    high = len(arr) - 1
    while low <= high:
        if arr[low] <= arr[high]:
            return arr[low]
        mid = low + ((high - low) // 2)
        prev = (mid + len(arr) - 1) % len(arr)
        nex = (mid + 1) % len(arr)
       
        if arr[mid] <= arr[nex] and arr[mid] <= arr[prev]:
            return arr[mid]
        elif arr[low] <= arr[mid]:
            low = mid + 1
        elif arr[mid] <= arr[high]:
            high = mid - 1
    return -1
        
x = int(input())
arr = list(map(int, input().split()))
print(search(arr))
