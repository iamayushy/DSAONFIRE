def check(s):
    if(len(s) == 0):
        return 'Empty String'
    if(len(s) == 1):
        return s
    
    st = ''
    for i in range(len(s)):
        if(i == 0):
            if(s[i] != s[i + 1]):
                st += s[i]
        elif (i == len(s) -1):
            if(s[i] != s[i - 1]):
                st += s[i]
        else:
            if(s[i] != s[i - 1] and s[i] != s[i + 1]):
                st += s[i]
    if(len(s) == len(st)):
        return st
    return check(st)

print(check('aabbcddbe'))
