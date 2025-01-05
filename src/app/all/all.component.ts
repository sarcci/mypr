import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all',
  standalone: false,
  
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss'
})
export class AllComponent {
  studiska:string ="";
  ExArray : any[] = [];
  isResultLoaded = false;
  formatted:string="";
  ExKolArray : any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.studiska = String(this.route.snapshot.paramMap.get('studiska'));
    this.formatted = this.studiska.replace("-", "/");
    this.getAllExams();
  }

  getAllExams() {
    this.http.get<any>('http://localhost:8080/allExams/' + this.studiska)
    .subscribe(response => {
        this.isResultLoaded = true;
        this.ExArray = response;
      });
      
  }
}