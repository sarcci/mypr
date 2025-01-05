import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule]
})
export class LoginComponent {
 

  email: string ="";
  password: string ="";


  constructor(private router: Router,private http: HttpClient) {}
 


  Login() {
    console.log(this.email);
    console.log(this.password);
 
    let bodyData = {
      email: this.email,
      password: this.password,
    };
 
        this.http.post("http://localhost:8080/Login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
 
        if (resultData.message == "Email does not exist.")
        {
      
          alert("Email does not exist.");
    
 
        }
        else if(resultData.message == "Logged in succesfully.")
    
         {
          this.router.navigateByUrl('/home');
        }
        else
        {
          alert("Log in failed.");
        }

      });
    }

}