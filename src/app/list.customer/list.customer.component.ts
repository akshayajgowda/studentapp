import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list.customer',
  templateUrl: './list.customer.component.html',
  styleUrls: ['./list.customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {

customers = this.customerService.getCustomers();

  constructor(private customerService: CustomerService, private router:Router) { }

onDelete(customer) {
 this.customerService.onDelete(customer);
}

onEdit(customer) {
  this.router.navigate(['/edit-customer/'+customer.id1]);
}

deleteAll(){
  this.customers=[];
}
  ngOnInit() {}

}
