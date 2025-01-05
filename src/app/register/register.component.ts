import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [FormsModule]
})
export class RegisterComponent {
  name: string ="";
  email: string ="";
  password: string ="";


  constructor(private router: Router, private http: HttpClient )
  {

  }
  save()
  {
  
    let bodyData = {
      "name" : this.name,
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:8080/Register", bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.router.navigateByUrl('/');

    });
  }

  Go() {
    this.router.navigateByUrl('/')
  }

}