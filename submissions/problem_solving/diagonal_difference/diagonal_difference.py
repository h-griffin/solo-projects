#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'diagonalDifference' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def diagonalDifference(arr):
    """takes in a matrix array and adds two diagonals together,
    returning the absolute value of the difference"""
    n = len(arr)
    principal = 0
    secondary = 0
    for i in range(n):
        for j in range(n):
            if (i == j):
                principal += arr[i][j]
            if ((i+j) == (n - 1)):
                secondary += arr[i][j]  # <<< IndexError: list index out of range

    equation = principal - secondary
    return abs(equation)

# if __name__ == '__main__':
#     diagonalDifference([[3],
#                         [11, 2, 4],
#                         [4, 5, 6],
#                         [10, 8, -12]])

# if __name__ == '__main__':
#     fptr = open(os.environ['OUTPUT_PATH'], 'w')

#     n = int(input().strip())

#     arr = []

#     for _ in range(n):
#         arr.append(list(map(int, input().rstrip().split())))

#     result = diagonalDifference(arr)

#     fptr.write(str(result) + '\n')

#     fptr.close()
