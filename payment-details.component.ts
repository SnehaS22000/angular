import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService,private router:Router) { }
  clicked_modify=false;
  clicked_id:number;
  ngOnInit(): void {

    this.service.refreshList();
  }
  ondelete(id:Number)
  {
    this.service.deleterecord(id)
    .subscribe(
      res=>{
        this.service.refreshList();
      },
      err=>{
        console.log(err);
      }

    )
  }

  // toogleonclick(id:number)
  // {
  //  this.clicked_id=id;
  //   this.clicked_modify=true;
  // }
  // onupdate(form:NgForm)
  // {

  //   console.log(form.value.cardOwnerName);
  //   this.service.editrecord(form.value)
  //   .subscribe(
  //     res=>{
  //       this.service.refreshList();
  //     },
  //     err=>{
  //       console.log(err);
  //     }

  //   )
  //   this.clicked_modify=false;
  // }

  canceledit()
  {
    this.clicked_modify=false;
  }

  onselect(id:number)
  {
   this.router.navigate(['/employeedata',id]);
  }
}
