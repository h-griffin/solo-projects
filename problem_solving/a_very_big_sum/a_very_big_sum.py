#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the aVeryBigSum function below.
def aVeryBigSum(ar):
    """takes in n length arr and adds all together"""
    all_sums = 0
    for i in ar:
        all_sums += i
    return all_sums

# if __name__ == '__main__':
#     fptr = open(os.environ['OUTPUT_PATH'], 'w')

#     ar_count = int(input())

#     ar = list(map(int, input().rstrip().split()))

#     result = aVeryBigSum(ar)

#     fptr.write(str(result) + '\n')

#     fptr.close()
