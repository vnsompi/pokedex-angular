import { Component, signal } from '@angular/core';
import { computed } from '@angular/core';
import{POKEMON_LIST} from './pokemon-list.fake';
import { Pokemon } from './pokemon.models';



@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 

export class AppComponent {
  pokemon_list = signal(POKEMON_LIST);
  
   // utilisation des signal 
// je vais creer une fonction qui va retourner la taille du pokemon
//  ici on doit utiliser computed pour calculer la taille cor le deriver 
// appeler lesetat dervies 

size(pokemon:Pokemon){
  if(pokemon.life < 15){
       return "petit";
  }
  if(pokemon.life > 25){
    return "grand";
  }
  return "moyen";
}


incrementLife(pokemon:Pokemon){
  pokemon.life += 1;
  // this.life.update((life)=> life + 1); // ici on incremente une vie
  // vu que nous avons utiliser le signal la syntaxe change aussi
}
  decrementLife(pokemon:Pokemon){
    pokemon.life -= 1;
    // this.life.update((life)=> life - 1);// }ici on decremente une vie
    
}

// je met un fonction qui va devoir afficher la taille de pokemon
// size = computed(() => {
  //   if(this.life() < 15){
  //     return "petit";
  // }
  // else if(this.life() > 25){;
  //   return "grand";
  // } 
  // else{
  //   return "moyen";
  // }
  // });
  // ajout d'un autre signale



}


