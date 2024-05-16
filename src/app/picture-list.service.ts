import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PictureListService {
  url = 'https://picsum.photos/600?random=';

  constructor() {}

  generate(length: number, startIndex = 0) {
    let imageURLs = Array.from(
      { length },
      (_, index) => this.url + startIndex + index
    );
    return this.shuffle(this.doubleArray(imageURLs));
  }

  doubleArray(array: any[]) {
    return [...array, ...array];
  }

  shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
