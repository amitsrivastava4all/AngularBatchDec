const itemOperations = {
    itemList:[],
    add(itemObject){
        this.itemList.push(itemObject);
    },
    searchById(id){
       return this.itemList.filter(itemObject=>itemObject.id==id)[0];    
    },
    countMark(){
        return this.itemList.filter(itemObject=>itemObject.markForDelete).length;
    },
    deleteItem(){
        return this.itemList = this.itemList.filter(itemObject=>!itemObject.markForDelete);
    },
    toggleMarking(id){
        this.searchById(id).toggle();
        //  var itemObject = this.searchById(id); 
         // itemObject.toggle();
          //itemObject.markForDelete = !itemObject.markForDelete; 
    }
}