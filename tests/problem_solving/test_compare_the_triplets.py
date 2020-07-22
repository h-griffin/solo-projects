import pytest
from submissions.problem_solving.compare_the_triplets.compare_the_triplets import compareTriplets

def test_draw():
    a = [5, 6, 7]
    b = [3, 6, 10]
    #    a  -  b

    actual = compareTriplets(a,b)
    expected = [1,1]  # [a,b]
    assert actual == expected

def test_neg():
    a = [-5, 6, 7]
    b = [3, -6, -10]
    #    b   a   a

    actual = compareTriplets(a,b)
    expected = [2, 1]
    assert actual == expected

def test_all_a():
    a = [4, 5, 6]
    b = [1, 2, 3]
    #   a   a   a

    actual = compareTriplets(a,b)
    expected = [3, 0]
    assert actual == expected

def test_all_b():
    a = [1, 2, 3]
    b = [4, 5, 6]
    #    b  b  b

    actual = compareTriplets(a,b)
    expected = [0, 3]
    assert actual == expected
