import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent {
  constructor(private api:ApiService){
    api.getAllComplaint().subscribe(
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