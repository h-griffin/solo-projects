def print_linked_list(head):
    if head is not None:
        print(head.data)
        printLinkedList(head.next)
