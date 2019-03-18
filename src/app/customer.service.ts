import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers = [];

// customers = [{id1:1, name:"Akshay", email:"akshay@gmail", address:"USA", phone:"12345678"},
//              {id1:2, name:"Ravi", email:"ravi@gmail", address:"USA", phone:"87654321"},
//              {id1:3, name:"Sham", email:"sham@gmail", address:"USA", phone:"24351541"}];

constructor() {
  var defaultCustomers = [{id1:1, name:"Akshay", email:"akshay@gmail", date:"2001-01-01", item:"rice,curd,chocolate" , address:"USA", phone:"12345678"},
             {id1:2, name:"Ravi", email:"ravi@gmail", date:"2001-01-02", item:"rice,curd,chocolate" , address:"USA", phone:"87654321"},
             {id1:3, name:"Sham", email:"sham@gmail", date:"2001-01-03", item:"rice,curd,chocolate" , address:"USA", phone:"24351541"}];

  if(localStorage.getItem('customers') == null) {
    this.customers = defaultCustomers;
    this.setlocalStorage(this.customers);
  }else{
    this.getlocalStorage();
  }

 }

 setlocalStorage(list) {
  localStorage.setItem('customersdata',JSON.stringify(list));
 }
    
 getlocalStorage() {
  this.customers = JSON.parse(localStorage.getItem('customersdata'))
 }

getCustomers() {
 return this.customers;
}

onAddCustomer(customer) {
  customer.id1 = Math.round(Math.random()*100000);
   this.customers.push(customer);
   this.setlocalStorage(this.customers);
}

onDelete(customer) {
  for(var i=0;i<this.customers.length;i++) {
    if(customer.id1 == this.customers[i].id1) {
      this.customers.splice(i,1);
      this.setlocalStorage(this.customers);
    }
  }
  
}
getCustomerById(id1){
  for(var i = 0;i<this.customers.length;i++){
    if(id1 == this.customers[i].id1){
      return this.customers[i];
    }
  }
  return null;
}

onUpdateCustomer(customer) {
  for(var i=0;i<this.customers.length;i++) {
  if(customer.id1 == this.customers[i].id1) {
    this.customers[i] = customer;
    break;
  }
}   
this.setlocalStorage(this.customers);
}


}