import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

import { GetmovesService } from './getmoves.service';
import { GamelogService } from './gamelog.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialExampleModule} from './material.module';
import { TitlescreenComponent } from './titlescreen/titlescreen.component';
import { ReplayComponent } from './replay/replay.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    TitlescreenComponent,
    ReplayComponent,
  ],
    imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      MatNativeDateModule,
      MaterialExampleModule,
      RouterModule.forRoot([
        {path: '', component: TitlescreenComponent},
        {path: 'game', component: GameComponent},
        {path: 'end', component: ReplayComponent}
      ]),
  ],
  providers: [
    GetmovesService,
    GamelogService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],

  
})
export class AppModule { }

