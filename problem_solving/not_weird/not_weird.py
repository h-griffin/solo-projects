

def weird(n):
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
