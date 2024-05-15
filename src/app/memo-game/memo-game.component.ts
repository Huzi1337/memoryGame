import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PictureListService } from '../picture-list.service';
import { NgFor } from '@angular/common';
import { GameControlService } from '../game-control.service';

@Component({
  selector: 'app-memo-game',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './memo-game.component.html',
  styleUrl: './memo-game.component.scss',
})
export class MemoGameComponent {
  hasStarted = false;
  numberOfPictures = 5;
  pictureURLs: string[] = [];

  constructor(
    private pictureList: PictureListService,
    public gameControl: GameControlService
  ) {}

  startGame() {
    this.hasStarted = true;
    this.gameControl.picturesLeft = this.numberOfPictures;
    this.pictureURLs = this.pictureList.generate(this.numberOfPictures);
  }

  addShown() {}
}
