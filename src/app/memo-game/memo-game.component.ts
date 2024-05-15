import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PictureListService } from '../picture-list.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-memo-game',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './memo-game.component.html',
  styleUrl: './memo-game.component.scss',
})
export class MemoGameComponent {
  hasStarted = false;
  pictureURLs: string[] = [];

  constructor(private pictureList: PictureListService) {}

  startGame(numberOfPictures: number) {
    this.pictureURLs = this.pictureList.generate(numberOfPictures);
  }
}
