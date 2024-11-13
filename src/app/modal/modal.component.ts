import { Component, OnInit } from '@angular/core';
import { PokemonCard } from "../services/interfaces/PokemonCard";
import {ModalVisibilityService} from "../services/modales/modal-visibility.service"
import {ModalDataAssignService} from "../services/modales/modal-data-assign.service"


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {

  pokemonCard:PokemonCard | null ={
    id:-1,
    name:"",
    description:"",
    image_url:""
    }

  constructor(
    private modalVisibilityService: ModalVisibilityService,
    private modalDataAssignService: ModalDataAssignService

  ){}


  setModalVisibility(){
     this.modalVisibilityService.isModalVisible.next(false);
  }

  ngOnInit(){
    this.modalDataAssignService.modalDataState$.subscribe(data=>{
      this.pokemonCard=data;
    });
  }



}
