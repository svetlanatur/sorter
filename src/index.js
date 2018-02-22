class Sorter {
  constructor() {
    this.arr=[];
    this.comparator=this.defaultComparator;
  }

  add(element) {
   this.arr.push(element);
  }

  at(index) {
   return this.arr[index];
  }

  get length() {
   return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var s=[];
   for (var i=0; i<indices.length; i++){
     s.push(this.arr[indices[i]]);
    
   }
   s.sort(this.comparator);
   indices.sort();
    for (var j=0; j<s.length; j++) {
      this.arr[indices[j]]=s[j];
    }
    
  }

  setComparator(compareFunction) {
    this.comparator=compareFunction;
  }
  defaultComparator(d,b) {
    return d - b;
  }
}

module.exports = Sorter;