import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITileType } from '../../models/board-tile';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-game-board-tile',
  templateUrl: './game-board-tile.component.html',
  styleUrls: ['./game-board-tile.component.scss']
})
export class GameBoardTileComponent implements OnInit {
  @Input() isMarked: boolean;
  @Input() type: ITileType;
  @Input() bolded: boolean;
  tileType = ITileType;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'cross',
      sanitizer.bypassSecurityTrustResourceUrl('assets/cross.svg')
    );
    iconRegistry.addSvgIcon(
      'circle',
      sanitizer.bypassSecurityTrustResourceUrl('assets/circle.svg')
    );
  }

  ngOnInit() {
  }
}
