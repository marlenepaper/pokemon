import { Component, OnInit } from '@angular/core';
import { PokemonCard } from "../services/interfaces/PokemonCard";
import {ModalVisibilityService} from "../services/modales/modal-visibility.service"

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export class InformationComponent implements OnInit{
    pokemonCards:PokemonCard[]=[
        {id:1, name:"nombre1",description:"descripcion1", image_url:"https://c02.purpledshub.com/uploads/sites/62/2022/05/caterpie-f175bac.jpg?webp=1&w=1200"},
        {id:2, name:"nombre2",description:"descripcion2", image_url:"https://c02.purpledshub.com/uploads/sites/62/2022/05/sandshrew-2ad4dd8.jpg?webp=1&w=1200"},
        {id:3, name:"nombre3",description:"descripcion3", image_url:"https://c02.purpledshub.com/uploads/sites/62/2022/05/zubat-d931c51.jpg?webp=1&w=1200"},
        {id:4, name:"nombre4",description:"descripcion4", image_url:"https://c02.purpledshub.com/uploads/sites/62/2022/05/poliwag-5bd1ed0.jpg?webp=1&w=1200"}
    ]

  isModalDefaultVisible:boolean=false;

  constructor(
      private modalVisibilityService: ModalVisibilityService

  ){}

ngOnInit() {
    this.modalVisibilityService.modalVisibilityState$.subscribe(visible => {
      this.isModalDefaultVisible = visible;
    });
  }

  setModalVisibility(){
    this.modalVisibilityService.isModalVisible.next(true);
  }


}
