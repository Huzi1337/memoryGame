import { Injectable } from '@angular/core';
import { CardComponent } from './card/card.component';
import { PictureListService } from './picture-list.service';

@Injectable({
  providedIn: 'root',
})
export class GameControlService {
  currentlyShown: CardComponent[] = [];
  hasStarted = false;
  gameIsComplete = false;
  movesCount = 0;
  pictureURLs: string[] = [];
  totalPictures = 6;
  picturesLeft = 0;
  controlsDisabled = false;
  gamesPlayed = 0;

  constructor(private pictureList: PictureListService) {}

  startGame() {
    this.hasStarted = true;
    this.gameIsComplete = false;
    this.picturesLeft = this.totalPictures;
    this.movesCount = 0;
    this.pictureURLs = this.pictureList.generate(
      this.totalPictures,
      this.gamesPlayed
    );
  }

  selectCard(card: CardComponent) {
    this.currentlyShown.push(card);

    if (this.currentlyShown.length === 2) {
      this.controlsDisabled = true;
      this.movesCount++;
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
    if (this.picturesLeft === 0) {
      this.gameIsComplete = true;
      this.gamesPlayed++;
    }
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
