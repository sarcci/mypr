import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newex',
  templateUrl: './newex.component.html',
  styleUrls: ['./newex.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class NewexComponent implements OnInit {
 
  isp: number=0;
  predmet:string="";
  vreme: string="";
  datum: string = "";
  prostorija: string="";
  stGod: string="";
  sem: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.isp = Number(this.route.snapshot.paramMap.get('isp'));
  }
 
  New() {
    let bodyData = {
      isp: { id: this.isp },
      predmet : this.predmet,
      vreme : this.vreme,
      datum : this.datum,
      prostorija:this.prostorija,
      stGod : this.stGod,
      sem:this.sem
    };
    this.http.post("http://localhost:8080/SaveEx", bodyData).subscribe((resultData: any) => {
    console.log(resultData);
    alert("Successfully added an exam session.");
    this.router.navigateByUrl('/isp');
    });
  }
}
