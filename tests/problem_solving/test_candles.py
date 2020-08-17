import pytest
from problem_solving.candles.candles import birthday_cake_candles


def test_1():
    actual = birthday_cake_candles([3, 2, 5, 3]) # 5
    expected = 1
    assert actual == expected

def test_2():
    actual = birthday_cake_candles([3, 2, 1, 3]) # 3 3
    expected = 2
    assert actual == expected

def test_3():
    actual = birthday_cake_candles([4, 2, 4, 4]) # 4 4 4
    expected = 3
    assert actual == expected

def test_zeros():
    actual = birthday_cake_candles([0, 0, 0, 0]) # 0 0 0 0
    expected = 4
    assert actual == expected

def test_negatives():
    actual = birthday_cake_candles([-2, -1, -2, -5]) # -1
    expected = 1
    assert actual == expected


