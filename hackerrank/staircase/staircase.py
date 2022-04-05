def staircase(n):
    height = n
    output = []
    for i in range(1, height+1):
        output.append( ('#'*i).rjust(height) )
    return output
