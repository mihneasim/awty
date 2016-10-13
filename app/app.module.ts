import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//import { AngularFireModule } from 'angularfire2';

import { AppComponent }  from './app.component';
import { EventAddComponent } from './event/add.component';
import { EventService } from './event/event.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyBp1i0ieRBiWMTq7Xbvh4UfWgLC3brocX4',
  authDomain: 'awty-2d9cd.firebaseapp.com',
  databaseURL: 'https://awty-2d9cd.firebaseio.com',
  storageBucket: 'awty-2d9cd.appspot.com'
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    //AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    EventAddComponent
  ],
  providers: [
    EventService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
