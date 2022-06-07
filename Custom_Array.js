export class Custom_Array {
  //            Revising Algorithms and Data Structures

  //            Practising by building an array from scratch using JavaScript

  constructor(length) {
    //            Set the array to the length defined in constructor

    this.items = [];

    this.count = 0;

    this.items.length = length;
  }

  print() {
    //            Complexity of O(N) - relative to the input length of items

    for (let i = 0; i < this.count; i++) {
      console.log(this.items[i]);
    }
  }

  insert(item) {
    //            If array full, resize

    //            Add new items to the end of the array (push)

    if (this.items.length == this.count) {
      let new_array_items = [];

      new_array_items.length = this.count * 2;

      //            O(n)

      for (let i = 0; i < this.count; i++) {
        new_array_items[i] = this.items[i];
      }

      //            Swap array with the bigger new array

      this.items = new_array_items;
    }

    //            Count is incremented to add a new array item

    this.items[this.count++] = item;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) {
      //            I know there's no index out of bounds in javascript but

      //            demonstrating if was another language where index out of bounds

      console.log("Index is out of bounds");

      return -1;
    } else {
      for (let i = index; i < this.count; i++) {
        this.items[i] = this.items[i + 1];
      }

      this.count--;
    }
  }

  indexOf(item) {
    for (let i = 0; i < this.count; i++) {
      if (this.items[i] == item) {
        console.log("Found item " + item + " at index " + i);
      }
    }
  }
}
