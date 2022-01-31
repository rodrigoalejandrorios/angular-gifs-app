import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private gifService: GifsService) {}

  get records() {
    return this.gifService.records;
  }

  recordSearch(r: string) {
    console.log(r);
    this.gifService.searchGifs(r);
  }
}
