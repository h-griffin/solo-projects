# def is_leap(year):
    # leap = False

    # # Write your logic here
    # if year//4==0:
    #     leap=True
    #     if year//4==0 and year//100==0:
    #         leap=False
    #     if year//4==0 and year//100==0 and year//400==0:
    #         leap=True
    # else:
    #     leap = False

    # return leap

def is_leap(year):
    return year % 4 == 0 and (year % 400 == 0 or year % 100 != 0)

if __name__ == "__main__":
    # year = int(input())
    year = 2000
    print(is_leap(year))
