import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();

  private constructor(private _list: ListItem[] = []) {}

  //    creating getter for the list
  get list(): ListItem[] {
    return this._list;
  }
 //    creating getter for the load method

 load(): void {
    const storedList:string|null=localStorage.getItem("myList")
    if(typeof storedList !=="string") return

    const parsedList:{_id:string,_item:string,_checked:boolean}[]= JSON.parse(storedList)

   parsedList.forEach(itemObj=>{
    const newListItem=new ListItem(itemObj._id,itemObj._item,itemObj._checked)
    FullList.instance.addItem(newListItem)
   })
     
 }

  //    creating getter for the save

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }
    //    creating getter for the clearlist

  clearList(): void {
    this._list = [];
    this.save();
  }
    //    creating getter for the addItem
    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }
 //    creating getter for the remove item
    removeItem(id: string): void {
        this._list=this._list.filter(item=> item.id !==id)
        this.save()
    }

 
}
