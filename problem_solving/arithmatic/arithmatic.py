def math(a, b):
    addition = a + b
    subtraction = a - b
    multiplication = a * b
    print(addition)
    print(subtraction)
    print(multiplication)

def div(a, b):
    intiger = a // b
    floated = a % b
    print(intiger)
    print(floated)

def squares(n):
    for i in range(n):
        print(i**2)


if __name__ == '__main__':
    # a = int(input())
    # b = int(input())
    math(3, 5)
    div(3,5)
    squares(3)


