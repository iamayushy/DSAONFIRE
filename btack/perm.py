# generate all permutation of a string
def generate(s, l, r, ans):
    if l == r:
        ans.append([*s])
        # print(s)

        # arr.append(s)
        
    for i in range(l, r+1):
        [s[l], s[i]] = [s[i], s[l]]
        generate(s, l + 1, r, ans)
        [s[l], s[i]] = [s[i], s[l]]
arr = [1, 2, 3]
ans = []
generate(arr, 0, 2, ans)
ans = sorted(ans)
print(ans)

    