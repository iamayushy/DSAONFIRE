def sub(arr, op):
    if len(arr) == 0:
        print(op)
        return
    two = [*op]
    two.append(arr[0])
    ans = arr.pop(0)
    sub(arr, op)
    sub(arr, two)
    arr.append(ans)
    return

arr = [1, 2, 3]
sub(arr, [])
