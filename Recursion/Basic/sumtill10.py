from tkinter import N


def supers(n):
    if n // 10 == 0:
        return n 
    return (n % 10) + supers(n // 10)
    

print(supers(2345))
