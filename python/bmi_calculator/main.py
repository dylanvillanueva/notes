height = input("enter your height in m: ")
weight = input("enter your weight in kg: ")

bmi = float(weight) / (float(height) ** 2)
bmi_rounded = round(bmi)

print(bmi_rounded)