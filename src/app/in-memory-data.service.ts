import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: '田中' },
      { id: 2, name: '加藤' },
      { id: 3, name: '伊藤' },
      { id: 4, name: '佐野' },
      { id: 5, name: '太田' },
      { id: 6, name: '山本' },
      { id: 7, name: '中村' },
      { id: 8, name: '小林' },
      { id: 9, name: '加藤' },
      { id: 10, name: '中村' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
