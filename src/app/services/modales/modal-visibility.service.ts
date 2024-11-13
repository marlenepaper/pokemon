import { Injectable } from '@angular/core';
import{BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalVisibilityService {

  isModalVisible:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  modalVisibilityState$:Observable<boolean>=this.isModalVisible.asObservable();

    constructor() { }

    setModalVisibility(visible: boolean){
          this.isModalVisible.next(visible);
        }
}
