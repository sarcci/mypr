import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { KolexamService } from '../kolexam.service'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editkolexam',
  imports: [FormsModule, CommonModule],
  templateUrl: './editkolexam.component.html',
  styleUrl: './editkolexam.component.scss'
})
export class EditkolexamComponent {
  id:number = 0;
  kol: number=0;
  predmet:string="";
  vreme: string="";
  datum: string = "";
  prostorija: string="";
  stGod: string="";
  sem: number = 0;

  constructor(private kolexamservice: KolexamService, private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.kol = Number(this.route.snapshot.paramMap.get('kol'));
  }

  Save() : void {
    const newKolexam = {
      sem: this.sem,
      predmet: this.predmet,
      vreme: this.vreme,
      datum: this.datum,
      prostorija: this.prostorija,
      stGod: this.stGod,
      kol:this.kol
    };
    this.kolexamservice.editKolexam(this.id, newKolexam).subscribe(response => {
      alert("Mid Term Edited");
      this.router.navigate(['/listKolokviumi', this.kol]); 
    });
  }

}