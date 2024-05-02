my_list = [4, 2, 9, 1, 7, 3]

smallest = my_list[0]

for num in my_list:
    if num < smallest:
        smallest = num

print("yvelaze patara ricxvi", smallest)

 
def remove_largest(lst, value):
    if not lst:
        return "List is empty"
    
    largest = lst[0]
    for num in lst:
        if num > largest:
            largest = num
    
    if largest == value:
        lst.remove(largest)
        return f"{value} removed from the list."
    else:
        return f"{value} not found in the list."

my_list = [3, 7, 2, 8, 5]
value_to_remove = 8
print(remove_largest(my_list, value_to_remove))
print(my_list)
