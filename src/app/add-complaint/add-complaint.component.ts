import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent {
  complaint=""
  constructor(private api:ApiService, private route:Router){}
  readValues = ()=>{
    let data:any = {
      "complaint":this.complaint,
      "userID":localStorage.getItem("userInfo")
    }
    this.api.addComplaint(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("Complaint Added Successfully")
          this.route.navigate(["/viewUserComplaint"])
          
        }else{
          alert("Error in adding complaint")
        }
      }
    )
  }
}