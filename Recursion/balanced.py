#generate balanced paranthesis
def generate(open, close, ans, op):

    if open == 0 and close == 0:
        ans.append(op)
        return

    if(open != 0):
        op1 = op
        op1 += '('
        generate(open - 1, close, ans, op1)
    if(close > open):
        op2 = op
        op2 += ')'
        generate(open, close - 1, ans, op2)
ans = []
x = int(input())
generate(x, x, ans, "")
print(ans)
