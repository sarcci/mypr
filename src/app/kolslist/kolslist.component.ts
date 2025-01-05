import { Component, OnInit } from '@angular/core';
import { KolService } from '../kol.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { parseString } from 'xml2js'; 

@Component({
  selector: 'app-kolslist',
  templateUrl: './kolslist.component.html',
  styleUrls: ['./kolslist.component.scss'],
  imports: [CommonModule]
})
export class KolslistComponent implements OnInit {
  KolArray: any[] = [];
  errorMessage: string = '';
  red: number=0;
  sem: string ="";
  studiska: string="";
  id: number = 0;

  constructor(private kolService: KolService, private router: Router) {}
  ngOnInit(): void {
    this.kolService.getKolData().subscribe(response => {
      parseString(response, (err, result) => {
        if (err) {
          console.error('Error parsing XML:', err);
          return;
        }
        const kolElements = result['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]['ns2:getAllKolResponse'][0]['ns2:Kol'];
        
        if (kolElements && kolElements.length > 0) {
          this.KolArray = kolElements.map((kol: any) => {
            return {
              id: kol['ns2:id'][0],
              studiska: kol['ns2:studiska'][0],
              sem: kol['ns2:sem'][0],
              red: kol['ns2:red'][0]
            };
          });
        } else {
          this.KolArray = []; 
        }
      });
    });
  }
  

  New(): void {
    this.router.navigate(['/newkol']); 
  }

  Details(KolItem: any): void {
    this.router.navigate(['/listKolokviumi', KolItem.id]); 
  }

  Edit(KolItem: any): void {
    console.log('KolItem ID:', KolItem.id);
    this.router.navigate(['/editkol', KolItem.id]); 
  }

  Delete(KolItem: any): void {
    this.kolService.deleteKol(KolItem.id).subscribe(
      response => {
        alert("Exam Session Deleted");
        this.router.navigate(['/kolokviumski']);
      },
      error => {
        console.error('Error', error);
        alert("Error");
      }
    );
  }  
}