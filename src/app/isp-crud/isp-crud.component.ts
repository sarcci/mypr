import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ispcrud',
  templateUrl: './isp-crud.component.html',
  styleUrls: ['./isp-crud.component.scss'],
  imports: [CommonModule]
})
export class IspCrudComponent implements OnInit {

  IspArray : any[] = [];
  isResultLoaded = false;
  mesec: string ="";
  studiska: string="";
  id="";
  currentMonth: number = 0;
  text: string = "No current exam sessions";
  currentArray: any[] = [];
  currentId:number = 0;
  currentIspitna: any[] = [];


  constructor(private http: HttpClient, private router: Router ) 
  {
  }

  ngOnInit(): void {
    this.getAllIsp();
    this.getCurrentExamSession();
  }

  New() {
    this.router.navigate([`/addisp`]);
  }

  getAllIsp()
  { 
    this.http.get<any>('http://localhost:8080/getIsp')
    .subscribe(resultData=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.IspArray = resultData;
    });
    
  }
  getCurrentExamSession() {
    this.http.get<any>('http://localhost:8080/current')
      .subscribe(result => {
        console.log(result);
        const firstIspitna = result[0];
        this.currentArray = result;
        this.text = `Распоред на испитите во ${firstIspitna?.mesec}та испитна сесија ${firstIspitna?.studiska}`;
        this.currentId = firstIspitna?.id;
        this.currentIspitna = firstIspitna;
      });
  }

  Details(data:any) {
    this.router.navigate([`/exams`, data.id]);
  }

  DetailsCurrent() {
    this.router.navigate([`/exams`, this.currentId]);
  }

  Edit(data:any) {
    this.router.navigate(['/editisp', data.id]);
  }

  Delete(data: any) {
    this.http.delete("http://localhost:8080/DeleteIsp" + "/" + data.id)
       .subscribe(
          () => {
            alert("Exam Session Deleted");
            this.getAllIsp();
          });
  }
}