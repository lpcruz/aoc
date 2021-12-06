with open("./input.txt") as fin:
    raw_data = fin.read().strip().split(",")
    clocks = [int(i) for i in raw_data]

days = 80

for _ in range(days):
    n = len(clocks)
    for i in range(n):
        if clocks[i] == 0:
            clocks[i] = 6
            clocks.append(8)
        else:
            clocks[i] -= 1

ans = len(clocks)
print(ans)
