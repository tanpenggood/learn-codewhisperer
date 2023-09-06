# Create a function for binary search recursive method
def binary_search_recursive(array, target, low, high):
    if low > high:
        return False
    else:
        mid = (low + high) // 2
        if array[mid] == target:
            return True
        elif array[mid] > target:
            return binary_search_recursive(array, target, low, mid - 1)
        else:
            return binary_search_recursive(array, target, mid + 1, high)
            