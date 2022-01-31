import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [],
})
export class ResultComponent {
  constructor(private gifService: GifsService) {}

  get results() {
    return this.gifService.results;
  }
}
