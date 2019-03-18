import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit.customer',
  templateUrl: './edit.customer.component.html',
  styleUrls: ['./edit.customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private customerService:CustomerService, private router: Router) { }
  id1: number;
  private sub: any;
  customer:any;
  ngOnInit() {
  	 this.sub = this.route.params.subscribe(params => {
       this.id1 = +params['id1']; // (+) converts string 'id' to a number
       console.log("id is "+this.id1);
       this.customer = this.customerService.getCustomerById(this.id1);

       // In a real app: dispatch action to load the details here.
    });
  }

  onUpdateCustomer(customer) {
    this.customerService.onUpdateCustomer(customer);
    customer = {id1:'', name:'', email:'', date:'', address:'', phone:''};
    this.router.navigate(['/list-customer']);
   }


}
