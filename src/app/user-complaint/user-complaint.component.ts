import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-complaint',
  templateUrl: './user-complaint.component.html',
  styleUrls: ['./user-complaint.component.css']
})
export class UserComplaintComponent {
  constructor(private api:ApiService){
    api.getUserComplaints({"id":localStorage.getItem("userInfo")}).subscribe(
      (response:any)=>{
        console.log(response)
        this.loading = false
        this.complaints = response
      }
    )
  }
  complaints:any = []
  loading:boolean = true
}
