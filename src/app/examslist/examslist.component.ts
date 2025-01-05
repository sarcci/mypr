import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-examslist',
  imports: [FormsModule, CommonModule],
  templateUrl: './examslist.component.html',
  styleUrl: './examslist.component.scss'
})
export class ExamslistComponent {
  isp: number =0; 
  ExArray : any[] = [];
  isResultLoaded = false;
  premdet:string="";
  vreme: string="";
  datum: string = "";
  prostorija: string="";
  stGod: string="";
  sem: number=0;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    this.isp = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Viewing Exams for Session ID:', this.isp);
  }
  
  ngOnInit(): void {
    this.getAllExams();
  }

  getAllExams() { 
    this.http.get<any>('http://localhost:8080/GetAllEx/' + this.isp)
      .subscribe(resultData => {
        this.isResultLoaded = true;
        console.log(resultData);
        this.ExArray = resultData;
      });
  }
  New() {
    this.router.navigate(['/addex', this.isp]);
  }

  Edit (data:any) {
    this.router.navigate(['/editEx', data.id, this.isp]);
  }
  Delete (data:any) {
    this.http.delete("http://localhost:8080/DeleteEx" + "/" + data.id)
       .subscribe(
          () => {
            alert("Exam Deleted");
            this.getAllExams();
          });
  }



}
