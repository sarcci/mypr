import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editisp',
  templateUrl: './editexam.component.html',
  styleUrls: ['./editexam.component.scss'],
  imports: [FormsModule]
})
export class EditexamComponent implements OnInit {
 
  isp:number=0;
  id: number =0;
  isResultLoaded = false;
  predmet:string="";
  vreme: string="";
  datum: string = "";
  prostorija: string="";
  stGod: string="";
  sem:number=0;


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.isp = Number(this.route.snapshot.paramMap.get('isp'));
  }
 
  Edit() {
    let bodyData = {
      isp: {id: this.isp },
      predmet : this.predmet,
      vreme : this.vreme,
      datum : this.datum,
      prostorija:this.prostorija,
      stGod : this.stGod,
      sem: this.sem
    };
    this.http.put("http://localhost:8080/EditEx" + "/" + this.id, bodyData).subscribe((resultData: any) => {
    console.log(bodyData);
    this.router.navigateByUrl('/isp');
    });
  }
}
