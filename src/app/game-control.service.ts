import { Injectable } from '@angular/core';
import { CardComponent } from './card/card.component';

@Injectable({
  providedIn: 'root',
})
export class GameControlService {
  currentlyShown: CardComponent[] = [];
  movesCount = 0;
  picturesLeft = 0;
  controlsDisabled = false;

  constructor() {}

  selectCard(card: CardComponent) {
    this.currentlyShown.push(card);
    this.movesCount++;
    if (this.currentlyShown.length === 2) {
      this.controlsDisabled = true;

      this.resolveSelection();
    }
  }
  resolveSelection() {
    this.compareCards() ? this.acceptSelection() : this.rejectSelection();
  }
  compareCards() {
    const [{ imageURL: firstCard }, { imageURL: secondCard }] =
      this.currentlyShown;
    return firstCard === secondCard;
  }
  acceptSelection() {
    this.picturesLeft--;
    this.currentlyShown.forEach((card) => card.markCompleted());
    this.resetSelection();
    if (this.picturesLeft === 0) console.log('You won!');
  }
  rejectSelection() {
    setTimeout(() => {
      this.currentlyShown.forEach((card) => card.hide());
      this.resetSelection();
    }, 1000);
  }
  resetSelection() {
    this.currentlyShown = [];
    this.controlsDisabled = false;
  }
}
