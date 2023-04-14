import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getOrders } from '../graphql/order.qureies';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  constructor(private apollo: Apollo) { }

  loading: boolean = false;
  myorders: any = [];
  ngOnInit(): void {
    this.loading = true;
    this.apollo.watchQuery({
      query: getOrders
    }).valueChanges.subscribe((result: any) => {
      //console.log(result);
      this.loading = false;
      this.myorders = result.data.getMyOrder
    }, (error: any) => {
      //console.log(error)
      this.loading = false;
    }
    )
  }

}
