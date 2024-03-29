import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { APP_STATE } from 'src/app/state/app-state';
import { appSelector } from 'src/app/state/app.selector';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  name: string = 'Shared service';

  constructor(private _store: Store<APP_STATE>) {
    console.log(`${this.name} Initialize`);
  }

  getServiceName() {
    console.log(`${this.name} getServiceName() called`);
  }

  appInit() {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.info("SharedService: Inside appInit method.");
        resolve();
      }, 1000);
    });
  }
}
