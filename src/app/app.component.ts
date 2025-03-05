import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent {
  title = 'Angular!';
  name = "pikachou";
  life = "21";

  
incrementLife(){
  this.life = this.life + 1; // ici on incremente une vie
}
  decrementLife(){
    this.life = this.life - 1; // }ici on decremente une vie
    
    
}



}
