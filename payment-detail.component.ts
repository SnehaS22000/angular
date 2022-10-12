import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css'],

})
export class PaymentDetailComponent implements OnInit {

  constructor(public services:PaymentDetailService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm)
{
  this.services.postPaymentDetail(form.value).subscribe(
    res => {

      this.toastr.success('Submitted successfully', 'Payment Detail Register');

    },
    err => {

      console.log(err);
    }
  )
}
}

