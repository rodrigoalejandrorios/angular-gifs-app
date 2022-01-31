import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  constructor(private gifService: GifsService) {}

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  buscar() {
    const query = this.txtSearch.nativeElement.value;
    if (query === '') {
      return;
    }
    this.gifService.searchGifs(query);

    this.txtSearch.nativeElement.value = '';
  }
}
