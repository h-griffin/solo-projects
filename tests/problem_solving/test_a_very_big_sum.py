import pytest
from submissions.problem_solving.a_very_big_sum.a_very_big_sum import aVeryBigSum

def test_pos():
    actual = aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
    expected = 5000000015
    assert actual == expected

def test_neg():
    actual = aVeryBigSum([-1000000001, -1000000002, -1000000003, -1000000004, -1000000005])
    expected = -5000000015
    assert actual == expected
