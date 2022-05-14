from math import floor
import math


def masai(s, c={}):
    if s in c:
        return c[s]
    if s == 1:
        return 1
    if s <= 0:
        return 0
    val = masai(math.ceil(s/2),c) + masai(math.ceil(s/2),c) + masai(math.ceil(s/2),c)
    if c[s] < val:
        c[s] = val
    
    return c[s]
    

print(masai(12))