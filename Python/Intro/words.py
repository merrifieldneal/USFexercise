def print_upper_words(words):
    """ Prints each word in a list (or iterable)
    """
    for word in words:
        print(word.upper()+"\n")


def print_upper_e_words(words):
    """ Prints each word in a list (or iterable) that start with e or E
    """
    for word in words:
        if word[0] == ('e' or 'E'):
            print(word.upper()+"\n")


def print_upper_x_words(words, start_with):
    """ Prints each word in a list (or iterable) that start with the list or iterable entered after
    """
    for word in words:
        for i in start_with:
            if word[0] == i:
                print(word)
