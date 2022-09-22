import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPerson } from '../interface/person.model';
import { Person } from '../interface/person';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  private personData$ = new BehaviorSubject<IPerson>(new Person());

  public setPersonData = (userData: IPerson) => {
    this.personData$.next(userData)
    localStorage.setItem('person', JSON.stringify(userData));
  };
  public getPersonData = (): Observable<IPerson> => {
    let dataLocal = localStorage.getItem('person');
    if(dataLocal)
      this.setPersonData(JSON.parse(dataLocal));
      
    return this.personData$.asObservable();
  };
}
