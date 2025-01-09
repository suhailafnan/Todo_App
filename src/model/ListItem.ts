export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {}

  // getter and setter for the id
  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this.id = id;
  }
  // getter and setter for the items
  get item(): string {
    return this._item;
  }

  set item(item: string) {
    this.item = item;
  }
    // getter and setter for the checked
    get checked(): boolean {
        return this._checked;
      }
    
      set checked(checked: boolean) {
        this.checked = checked;
      }
}
