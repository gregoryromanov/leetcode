class ListNode
  attr_accessor :val, :next

  def initialize(val = 0, _next = nil)
    @val = val
    @next = _next
  end
end

def generate_list(values)
  head = current = nil

  values.each do |n|
    if head.nil?
      head = current = ListNode.new n
    else
      new_node = ListNode.new n
      current.next = new_node
      current = new_node
    end
  end

  head
end

def show_list_values(list)
  until list.nil?
    pp list.val
    list = list.next
  end
end

def add_two_numbers(l1, l2)
  head = nil
  current = nil
  to_be_added = 0

  until l1.nil? && l2.nil? && to_be_added.zero?
    l1_val = l2_val = 0

    l1_val = l1.val unless l1&.val.nil?
    l2_val = l2.val unless l2&.val.nil?

    new_val = l1_val + l2_val + to_be_added
    to_be_added = 0

    if new_val >= 10
      to_be_added, new_val = new_val.to_s.split('').map &:to_i
    end

    if head.nil?
      head = current = ListNode.new new_val
    else
      new_node = ListNode.new new_val
      current.next = new_node
      current = new_node
    end

    l1 = l1.next unless l1.nil?
    l2 = l2.next unless l2.nil?
  end

  head
end

l1 = generate_list [9,9,9,9,9,9,9]
l2 = generate_list [9,9,9,9]

new_list = add_two_numbers(l1, l2)

show_list_values new_list
