import { Injectable , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraphserviceService implements OnInit {

  constructor(private http: HttpClient){}

  ngOnInit(){}

  getGraph(name) {
    let url = `https://www.worldtradingdata.com/api/v1/stock?symbol=${name}&api_token=6SMZaPFn6J9wtIW95grWhqRcgUmBR9femWad0UCDW9sQoAhw84ffcK4nE2D2`
    return this.http.get(url)
  }

}
