function LinkedList() {
    //链表中每个元素 包含value和指针
    let Node = (element) => {
        this.element = element;
        this.next = null;
    };

    let head = null, length = 0; //初始化头结点,长度

    this.append = (element) => {
        let node = new Node(element);
        let current;             //声明当前存储append元素的节点
        if (head === null) {
            head = node;
        } else {
            current = head;      //从head迭代到需要append的节点
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };

    this.insert = (element, position) => {
        if (position >= 0 && position <= length) {
            let node = new Node(element), current = head;
            let previous, index = 0; // previous是插入位置的前一个元素, index限定循环
            if (position === 0) {
                node.next = current;
                head = node;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };

    this.removeAt = (position) => {
        if (position < length && position > -1) {
            let current = head, previous, index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < length) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };

    //获取当前元素在链表中的位置
    this.indexOf = (element) => {
        let current = head, index = 0;
        while (current) {
            if (element === current.element) {
                return index
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.remove = (element) => {
      const index = this.indexOf(element);
      return this.removeAt(index);
    };

    this.isEmpty = () => {
        return 0 === this.length;
    };

    this.size = () => {
      return length;
    };

    this.getHead = () => {
        return head;
    };
}