def last_element(lst):
    """Return last item in list (None if list is empty.
    
        >>> last_element([1, 2, 3])
        3
        
        >>> last_element([]) is None
        True
    """
    length = lst.length()
    if length == 0:
        return None
    
    return lst[length-1]


# if lst:
#         return lst[-1]
#     # we don't need to do anything else; functions
#     # return None by default