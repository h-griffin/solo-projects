

def weird(n):
    """takes in an integer and returns
    not weird if it is in the range of 2-6 and even ,
    returns weird if it is in the range of 6-21 and even,
    and returns not weird if it is less than 20 and even,
    if it is not even it returns weird.
    """
    if n % 2 == 0:
        if n in range(2,6):
            print("Not Weird")
            return("Not Weird")
        elif n in range(6,21):
            print("Weird")
            return("Weird")
        elif n > 20:
            print("Not Weird")
            return("Not Weird")
    else:
        print("Weird")
        return("Weird")
if __name__ == '__main__':
    # n = int(input().strip())
    weird(29)
