import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add.customer',
  templateUrl: './add.customer.component.html',
  styleUrls: ['./add.customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {

  customer={id1:0, name:"", email:"", date:"", item:"", address:"", phone:""};

  constructor(private customerService:CustomerService, private router: Router) { }
 
  onAddCustomer(customer) {
   this.customerService.onAddCustomer(customer);
   customer = this.customerService.getCustomers();
  this.router.navigate(['/list-customer']);
}

  ngOnInit() {}

}
