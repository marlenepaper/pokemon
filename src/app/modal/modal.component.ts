import { Component } from '@angular/core';
import {ModalVisibilityService} from "../services/modales/modal-visibility.service"

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  constructor(
    private modalVisibilityService: ModalVisibilityService

  ){}


  setModalVisibility(){
     this.modalVisibilityService.isModalVisible.next(false);
  }



}
