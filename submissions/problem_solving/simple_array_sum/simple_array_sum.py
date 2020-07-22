
#
# Complete the simpleArraySum function below.
#

def simpleArraySum(arr):    # takes in arr length, not sure how
    """takes in an array and adds all indices together"""
    counter = 0
    for i in arr:
        counter += i
    return counter

# if __name__ == '__main__':
#     fptr = open(os.environ['OUTPUT_PATH'], 'w')

#     ar_count = int(input())

#     ar = list(map(int, input().rstrip().split()))

#     result = simpleArraySum(ar)

#     fptr.write(str(result) + '\n')

#     fptr.close()
