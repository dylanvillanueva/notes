import random

names_string = input("Give me everybody's names, separated by a comma. ")

names = names_string.split(", ")
random_position = random.randint(0, len(names) - 1)
loser = names[random_position]

print(f"{loser} is going to buy the meal today!")