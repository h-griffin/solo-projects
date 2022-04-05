def math(a, b):
    """takes in two integgers and prints the two added, subtracted, and multiplied by eachother"""
    addition = a + b
    subtraction = a - b
    multiplication = a * b
    print(addition)
    print(subtraction)
    print(multiplication)

def div(a, b):
    """takes in two integers and prints the intiger divistion, adn float devision of the two numbers"""
    intiger = a // b
    floated = a % b
    print(intiger)
    print(floated)

def squares(n):
    """takes in an integer and prints all the square numbers below given number"""
    for i in range(n):
        print(i**2)


if __name__ == '__main__':
    # a = int(input())
    # b = int(input())
    math(3, 5)
    div(3,5)
    squares(3)


