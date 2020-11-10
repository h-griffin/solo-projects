import pytest
from problem_solving.not_weird.not_weird import weird

def test_odd_3():
    actual = weird(3)
    expected = 'Weird'
    assert actual == expected


def test_even25_4():
    actual = weird(4)
    expected = 'Not Weird'
    assert actual == expected

def test_even620_10():
    actual = weird(10)
    expected = 'Weird'
    assert actual == expected

def test_even620_18():
    actual = weird(18)
    expected = 'Weird'
    assert actual == expected

def test_even20_22():
    actual = weird(22)
    expected = 'Not Weird'
    assert actual == expected

def test_29():
    actual = weird(29)
    expected = 'Weird'
    assert actual == expected

def test_20():
    actual = weird(20)
    expected = 'Weird'
    assert actual == expected
