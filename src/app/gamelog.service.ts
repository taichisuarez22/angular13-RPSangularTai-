import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamelogService {

  readonly APItaiRPSURL = "https://localhost:7000/swagger/api";

  public data = {
      "id": 0,
      "player1": "string",
      "player2": "string",
      "Victory": "string",
      "Defeat": "string",
      "totalRounds": 0
    }
  

  constructor(private http:HttpClient) { }
//POST
  postGameData() {    
    console.log("post")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    }); 
    return this.http.post(this.APItaiRPSURL+"/GameLogs", JSON.stringify(this.data), {headers: headers})
  }

  saveNameData(n1: string, n2: string) {
    this.data["player1"] = n1;
    this.data["player2"] = n2;

    console.log(this.data)
  }
//GET
  getNameData() {
    return [this.data["player1"], this.data["player2"]]
  }

  saveGameData(w: string, l: string, tr: number) {
    this.data["Victory"] = w;
    this.data["Defeat"] = l;
    this.data["totalRounds"] = tr;
  }
}
