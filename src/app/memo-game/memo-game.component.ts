import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PictureListService } from '../picture-list.service';

@Component({
  selector: 'app-memo-game',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './memo-game.component.html',
  styleUrl: './memo-game.component.scss',
})
export class MemoGameComponent {
  constructor(private pictureList: PictureListService) {}
}
