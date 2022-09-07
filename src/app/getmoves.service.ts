import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetmovesService {

  readonly APItaiRPSURL = "https://localhost:7000/api";

  constructor(private http:HttpClient) { }

  getMovesList():Observable<any[]> {
    return this.http.get<any>(this.APItaiRPSURL +"/Moves");
  }

}
