def knapsack(p,wt, w, n, bag = {}):
    if n in bag:
        return bag[n]
    if n == 0 or w == 0:
        return 0
    if wt[n - 1] > w:
        bag[n] =  knapsack(p, wt, w, n - 1)
        return bag[n]
    else:

        bag[n] =  max(p[n - 1] + knapsack(p, wt, w - wt[n - 1], n),knapsack(p, wt, w, n - 1))
        return bag[n]

wt = [3, 4, 5]
p = [30, 50, 60]

print(knapsack(p, wt,8, 3))