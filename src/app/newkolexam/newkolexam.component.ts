import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { KolexamService } from '../kolexam.service'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-newkolexam',
  imports: [FormsModule, CommonModule],
  templateUrl: './newkolexam.component.html',
  styleUrl: './newkolexam.component.scss'
})
export class NewkolexamComponent {
  kol:number = 0;
  predmet:string="";
  vreme: string="";
  datum: string = "";
  prostorija: string="";
  stgod: string="";
  sem: number = 0;

  constructor(private kolexamservice: KolexamService, private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.kol = Number(this.route.snapshot.paramMap.get('id'));
  }

  New() : void {
    console.log('Form submitted');
    const newKolexam = {
      sem: this.sem,
      predmet: this.predmet,
      vreme: this.vreme,
      datum: this.datum,
      prostorija: this.prostorija,
      stgod: this.stgod,
      kol: this.kol
    };
    this.kolexamservice.createKolexam(newKolexam).subscribe(response => {
      alert("Mid Term Added");
      this.router.navigate(['/listKolokviumi', this.kol]); 
    });
  }

}
