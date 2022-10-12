import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
FormData:PaymentDetail=new PaymentDetail();

list:PaymentDetail[];
readonly url='http://localhost:5000/'
constructor(private http:HttpClient) { }

  postPaymentDetail(FormData:PaymentDetail)
  {
return this.http.post(this.url+'api/PaymentDetail',FormData);
  }

  refreshList(){
return this.http.get(this.url+'api/PaymentDetail')
.toPromise().then(res=>this.list=res as PaymentDetail[])
  }

  deleterecord(id_:Number)
  {
     return this.http.delete(this.url+'api/PaymentDetail/'+id_)
  }

  editrecord(editData:PaymentDetail)
  {
    return this.http.put(this.url+'api/PaymentDetail/'+editData.pmId,editData)
  }
}
