import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newisp',
  templateUrl: './newisp.component.html',
  styleUrls: ['./newisp.component.scss'],
  imports: [FormsModule]
})
export class NewispComponent implements OnInit {
 
  id: number =0;
  mesec: string ="";
  studiska: string ="";

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
  
  }
 
  New() {
    let bodyData = {
      mesec: this.mesec,
      studiska: this.studiska,
    };
    this.http.post("http://localhost:8080/SaveIsp", bodyData).subscribe((resultData: any) => {
    console.log(resultData);
    alert("Successfully added an exam session.");
    this.router.navigateByUrl('/isp');
    });
  }
}
