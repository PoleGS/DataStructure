
function Node(element) {
    this.element = element;
    this.next = null;
    //指向前一个节点元素的指针prev
    this.prev = null;
}

class DoublyLinkedList {
   constructor() {
       this.length = 0;
       this.head = null;
       this.tail = null; //尾部迭代指针
   };

   append = (element) => {
     let node = new Node(element);
     if (!this.head) {
         this.head = node;
         this.tail = node;
     } else {
         let current = this.tail;
         node.prev = current;
         current.next = node;
         node.next = null;
         this.tail = node;
     }
     this.length++;
   };

    insert = (element, position) => {
        if (position >= 0 && position <= this.length) {
            let node = new Node();
            let current = this.head, previous, index = 0;
            if (position === 0) { //链表头插入
                if (!this.head) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }
            } else if (position === this.length) { //尾部插入
                current = this.tail;
                current.next = node;
                node.prev = current;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.length++;
            return true;
        } else {
            return false;
        }
    };

    removeAt = (position) => {
      if (position > -1 && position < this.length) {
          let current = this.head, previous, index = 0;
          if (position === 0) {
              this.head = current.next;
              if (this.length === 1) {
                  this.tail = null;
              } else {
                  this.head.prev = null;
              }
          } else if (position === this.length - 1) {
              current = this.tail;
              this.tail = current.prev;
              this.tail.next = null;
          } else {
              while (index++ < position) {
                  previous = current;
                  current = current.next;
              }
              previous.next = current.next;
              current.next.prev = previous;
          }
          this.length--;
          return current.element;
      } else {
          return null;
      }
    };

    indexOf = (element) => {
        let current = this.head, index = 0;
        while (current) {
            if (element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
}