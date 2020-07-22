# Complete the compareTriplets function below.
def compareTriplets(a, b):
    """takes in two arrays with 3 indices and compares them,
    returning a list of points for each index larger than the other array"""
    point_list = []
    aPoints=0
    bPoints=0

    if a[0] > b[0]:
        aPoints+=1
    if a[0] < b[0]:
        bPoints+=1

    if a[1] > b[1]:
        aPoints+=1
    if a[1] < b[1]:
        bPoints+=1

    if a[2] > b[2]:
        aPoints+=1
    if a[2] < b[2]:
        bPoints+=1

    point_list.append(aPoints)
    point_list.append(bPoints)
    return point_list

# if __name__ == '__main__':
#     fptr = open(os.environ['OUTPUT_PATH'], 'w')

#     a = list(map(int, input().rstrip().split()))

#     b = list(map(int, input().rstrip().split()))

#     result = compareTriplets(a, b)

#     fptr.write(' '.join(map(str, result)))
#     fptr.write('\n')

#     fptr.close()
