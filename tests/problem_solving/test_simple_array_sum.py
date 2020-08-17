import pytest
from problem_solving.simple_array_sum.simple_array_sum import simpleArraySum

def test_pos_1():
    actual = simpleArraySum([1,2,3,4,10,11])    # takes in n length arr, not sure how
    expected = 31
    assert actual == expected

def test_pos_2():
    actual = simpleArraySum([1,2,3,4,5])    # takes in n length arr, not sure how
    expected = 15
    assert actual == expected

def test_pos_3():
    actual = simpleArraySum([37,54,78,31,16,25,19])    # takes in n length arr, not sure how
    expected = 260
    assert actual == expected

def test_neg_1():
    actual = simpleArraySum([-1,-2,-3,-4,-5])    # takes in n length arr, not sure how
    expected = -15
    assert actual == expected
