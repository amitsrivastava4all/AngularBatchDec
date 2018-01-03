class Item{
    constructor(id,name,desc, price, color,url,date){
         this.id = id;  // Instance Var = Local Var
         this.name = name;
         this.desc =desc;
         this.price = price;
         this.color =color;
         this.url = url;
         this.date= date;  
         this.markForDelete = false;
          
    }
    toggle(){
        this.markForDelete = !this.markForDelete;
    }
}