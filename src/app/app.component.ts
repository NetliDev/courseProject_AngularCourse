import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyC6k_-BBjXiTIOmGOrif-tqVyWaB8QPTzU",
    authDomain: "ng-recipe-book-9e6ef.firebaseapp.com"
  });
}
  onNavigate(feature: string) {
    this.loadedFeature = feature;
    console.log(feature);
  }
}
