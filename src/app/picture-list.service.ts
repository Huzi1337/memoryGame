import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PictureListService {
  url = 'https://picsum.photos/200?random=';

  constructor() {}

  generate(length: number) {
    return Array.from({ length }, (_, index) => this.url + index);
  }
}
