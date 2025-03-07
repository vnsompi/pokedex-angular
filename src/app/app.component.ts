import { Component, signal } from '@angular/core';
import { computed } from '@angular/core';
import{POKEMON_LIST} from './pokemon-list.fake';



@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 

export class AppComponent {
  pokemon_list = signal(POKEMON_LIST);
  title = 'Angular!';
   // utilisation des signal 
  name = signal("pikachou");
  life = signal(21); // ici on a 21 vie
    

// je vais creer une fonction qui va retourner la taille du pokemon
//  ici on doit utiliser computed pour calculer la taille cor le deriver 
// appeler lesetat dervies 

  size = computed(() => {
    if(this.life() < 15){
      return "petit";
  }
  else if(this.life() > 25){;
    return "grand";
  } 
  else{
    return "moyen";
  }
  });
  // ajout d'un autre signale
  imageSource = signal(
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
    
  );

incrementLife(){
  this.life.update((life)=> life + 1); // ici on incremente une vie
  // vu que nous avons utiliser le signal la syntaxe change aussi
}
  decrementLife(){
    this.life.update((life)=> life - 1);// }ici on decremente une vie
    
}

// je met un fonction qui va devoir afficher la taille de pokemon



}


