import { Injectable } from '@angular/core';
import {Hero, HEROES} from '../core/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './../service/message-srv/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
