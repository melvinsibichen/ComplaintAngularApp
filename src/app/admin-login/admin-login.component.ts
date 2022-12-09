import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username = ""
  password = ""
  
  readValues = ()=>{
    if(this.username=="admin"&&this.password=="12345"){
      this.route.navigate(["/dashboard"])      
    }
    else
    {
      alert("Invalid username or password");
    }

  }
}
