lines = open("input.txt").readline().split(',')
poses = [int(x) for x in lines]
dists = {}

total = 999999999999
for i in poses:
		subtotal = sum([abs(x - i) for x in poses])
		if subtotal < total:
			total = subtotal
print(total)
