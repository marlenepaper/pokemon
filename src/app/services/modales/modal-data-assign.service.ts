import { Injectable } from '@angular/core';
import{BehaviorSubject, Observable} from "rxjs";
import{PokemonCard}from"../interfaces/PokemonCard";

@Injectable({
  providedIn: 'root'
})
export class ModalDataAssignService {

  modalData:BehaviorSubject<PokemonCard | null>=new BehaviorSubject<PokemonCard |null>(null);
  modalDataState$: Observable<PokemonCard | null>=this.modalData.asObservable();

  constructor() { }

  assignDataToModal(data: PokemonCard | null){
      this.modalData.next(data);
  }
}
