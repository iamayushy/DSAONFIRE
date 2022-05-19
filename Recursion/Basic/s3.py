def sub(arr, op):
    if len(arr) == 0:
        print(op)
        return
    two = [*op]
    two.append(arr[0])
    arr.pop(0)
    sub(arr, op)
    sub(arr, two)
    return

arr = [1, 2, 2, 3]
sub(arr, [])
