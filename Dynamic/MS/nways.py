def nways(n, dict = {}):
    if n in dict:
        return dict[n]
    if n == 0:
        return 1
    elif n < 0:
        return 0
    dict[n] = nways(n - 1, dict) + nways(n - 2, dict) + nways(n - 3, dict)
    return dict[n]

print(nways(int(input('Give me n: '))))