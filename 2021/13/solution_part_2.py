with open("./input.txt") as fin:
    dots = set()
    while True:
        line = fin.readline().strip()
        if line == "":
            break
        dots.add(tuple([int(i) for i in line.split(",")]))

    folds = []
    while True:
        line = fin.readline().strip()

        # IMPORTANT: make sure your input file ends with a newline
        #   or this will throw an error
        if line == "":
            break

        fold = line[len("fold along "):]
        if fold[0] == "y":
            folds.append((0, int(fold[2:])))
        else:
            folds.append((int(fold[2:]), 0))


def reflect(point, line):
    if line[0] != 0:
        return (2*line[0] - point[0], point[1])
    return (point[0], 2*line[1] - point[1])


# Do the first fold
for fold in folds:
    new_dots = set()

    for dot in dots:
        if fold[0] != 0:
            # Vertical fold
            if dot[0] > fold[0]:
                new_dots.add(reflect(dot, fold))
            else:
                new_dots.add(dot)

        else:
            # Horizontal fold
            if dot[1] > fold[1]:
                new_dots.add(reflect(dot, fold))
            else:
                new_dots.add(dot)

    dots = new_dots


# Print some stuff ig
for y in range(6):
    for x in range(50):
        if (x, y) in new_dots:
            print("##", end="")
        else:
            print("..", end="")
    print()


ans = len(new_dots)
print(ans)
