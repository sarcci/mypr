import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KolexamService {
private soapUrl = 'http://localhost:8080/ws'; 

  constructor(private http: HttpClient) {}

  getKolData(kol: number): Observable<any> {
    const soapBody = `
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <ns2:getIspitsByKolRequest xmlns:ns2="http://spring.io/guides/gs-producing-web-service">
            <ns2:kol>${kol}</ns2:kol>
          </ns2:getIspitsByKolRequest>
        </soap:Body>
      </soap:Envelope>
    `;
    console.log(soapBody);

    const headers = new HttpHeaders({
      'Content-Type': 'text/xml' 
    });

    return this.http.post(this.soapUrl, soapBody, { headers, responseType: 'text' });
  }

  deleteKolexam(id: number): Observable<any> {
    const soapBody1 = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://spring.io/guides/gs-producing-web-service">
      <soapenv:Header/>
      <soapenv:Body>
        <web:deleteIspitRequest>
          <web:id>${id}</web:id>
        </web:deleteIspitRequest>
      </soapenv:Body>
    </soapenv:Envelope>`;
    console.log(soapBody1);

    return this.http.post(this.soapUrl, soapBody1, {
      headers: { 'Content-Type': 'text/xml' },
      responseType: 'text'
    });
  }

  editKolexam(id: number, kolexam: any): Observable<any> {
    const soapBody2 = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://spring.io/guides/gs-producing-web-service">
      <soapenv:Header/>
      <soapenv:Body>
        <web:updateIspitRequest>
          <web:Ispit>
            <web:id>${id}</web:id>
            <web:sem>${kolexam.sem}</web:sem>
            <web:kol>${kolexam.kol}</web:kol>
            <web:vreme>${kolexam.vreme}</web:vreme>
            <web:datum>${kolexam.datum}</web:datum>
            <web:predmet>${kolexam.predmet}</web:predmet>
            <web:prostorija>${kolexam.prostorija}</web:prostorija>
            <web:stgod>${kolexam.stgod}</web:stgod>
          </web:Ispit>
        </web:updateIspitRequest>
      </soapenv:Body>
    </soapenv:Envelope>`;
    console.log(soapBody2);

    return this.http.post(this.soapUrl, soapBody2, {
      headers: { 'Content-Type': 'text/xml' },
      responseType: 'text'
    });
  }

  createKolexam(kolexam: any): Observable<any> {
    const soapBody3 = `
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <ns2:addIspitRequest xmlns:ns2="http://spring.io/guides/gs-producing-web-service">
            <ns2:Ispit>
              <ns2:sem>${kolexam.sem}</ns2:sem>
              <ns2:vreme>${kolexam.vreme}</ns2:vreme>
              <ns2:datum>${kolexam.datum}</ns2:datum>
              <ns2:predmet>${kolexam.predmet}</ns2:predmet>
              <ns2:prostorija>${kolexam.prostorija}</ns2:prostorija>
              <ns2:kol>${kolexam.kol}</ns2:kol>
              <ns2:stgod>${kolexam.stgod}</ns2:stgod>
            </ns2:Ispit>
          </ns2:addIspitRequest>
        </soap:Body>
      </soap:Envelope>
    `;
    console.log(soapBody3);

    return this.http.post(this.soapUrl, soapBody3, {
      headers: { 'Content-Type': 'text/xml' },
      responseType: 'text'
    });
  }
}
