import { Component , OnInit , EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {

  public item : string;

  public stockNames : string [] = ["AAPL" , "MSFT" , "HSBA.L" , "ABB.NS" , "BATAINDIA.NS" , "COALINDIA.NS" , "DABUR.NS" , "HAVELLS.NS" , "HAVELLS.NS" , "JETAIRWAYS.NS" , "NBCC.NS" , "PROVOGE.NS " , "THOMASCOOK.NS" , "UNIONBANK.NS" , "WHIRLPOOL.NS"]

  @Output() itemName  = new EventEmitter();

  constructor() { }

  additem(param):void {
    if(param !== "") {
      this.itemName.emit(param);
    }
  }

  ngOnInit(){}

}
