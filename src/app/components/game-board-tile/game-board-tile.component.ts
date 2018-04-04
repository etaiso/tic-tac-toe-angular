import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITileType } from '../../models/board-tile';

@Component({
  selector: 'app-game-board-tile',
  templateUrl: './game-board-tile.component.html',
  styleUrls: ['./game-board-tile.component.scss']
})
export class GameBoardTileComponent implements OnInit {
  @Input() isMarked: boolean;
  @Input() type: ITileType;
  tileType = ITileType;

  constructor() { }

  ngOnInit() {
  }
}
