from difflib import Match


def binary(num):
    if num == 0:
        return
    binary(num // 2)
    print(num % 2)

    

binary(25)
