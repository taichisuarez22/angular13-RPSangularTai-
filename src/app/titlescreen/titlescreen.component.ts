import { Component, OnInit } from '@angular/core';
import { GamelogService } from '../gamelog.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titlescreen',
  templateUrl: './titlescreen.component.html',
  styleUrls: ['./titlescreen.component.css']
})
export class TitlescreenComponent implements OnInit {

  public i1: string = "";
  public i2: string = "";

  public toggle: boolean = true;

  GameLogData$!:Observable<any[]>;


  public handleSubmit(): void{
    this.gamelogservice.saveNameData(this.i1, this.i2)
    this._router.navigateByUrl('/game')
  }

  public handleStart(): void{
    this.toggle = !this.toggle;
  }


  constructor(private gamelogservice: GamelogService, private _router: Router) { }

  ngOnInit(): void {
  }

}
