V = ['a', 'b', 'c', 'd', 'e']
E = [(0, 2), (1,2), (2,3), (2,4)]

def create_matrix(V, E):
    matrix = []

    for x in range(len(V)):
        tempMatrix = [0] * len(V) 
        for y in E:
            if x == y[0]:
                tempMatrix[y[1]] = 1


        matrix.append(tempMatrix)

    return matrix


print(
    create_matrix(V, E)    
)