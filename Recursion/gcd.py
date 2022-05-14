# ecludiean algorithm
def gcd(a, b):
    if a == 0:
        return b
    return gcd(b % a, a)
print(gcd(51,68))

a = 51
b = 68
r = 0
while(a % b > 0):
    r = a % b;
    a = b;
    b = r;
print(r)