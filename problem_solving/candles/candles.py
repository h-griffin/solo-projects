import math

def birthday_cake_candles(ar):
    """takes in an array of candle heights and returns the number of candels that are the tallest candles"""
    tallest = float('-inf') # negative infinity
    blown_out = 0
    for candle in ar:
        if candle == tallest:
            blown_out += 1
        if candle > tallest :   # if taller than tallest
            blown_out = 0       # reset how many are blown out
            tallest = candle    # set new tallest candle height
            blown_out += 1      # add blown out candle
    return blown_out
