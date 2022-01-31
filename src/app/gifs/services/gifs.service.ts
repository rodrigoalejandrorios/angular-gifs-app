import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/giphy.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {
    if (localStorage.getItem('title-results')) {
      this._records = JSON.parse(localStorage.getItem('title-results')!);
    }

    this.http
      .get<SearchGifsResponse>(`${this._URL}/${this._TRENDING_ENDPOINT}`, {
        params: {
          api_key: this._API_KEY,
          limit: this._LIMIT,
        },
      })
      .subscribe((response) => {
        this.results = response.data;
      });
  }

  //PRIVATES PROPERTIES
  private _API_KEY: string = 'iCGHV243A8nHO3xKNQFiNLUiLpJc9nhj';
  private _URL: string = 'https://api.giphy.com/v1/gifs';
  private _SEARCH_ENDPOINT: string = 'search';
  private _TRENDING_ENDPOINT: string = 'trending';
  private _LIMIT: number = 10;
  private _records: string[] = [];

  //PUBLICS PROPERTIES

  public results: Gif[] = [];

  public get records() {
    return [...this._records];
  }

  public searchGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._records.includes(query)) {
      this._records.unshift(query);
      this._records = this._records.splice(0, 10);
      localStorage.setItem('title-results', JSON.stringify(this._records));
    }

    this.http
      .get<SearchGifsResponse>(`${this._URL}/${this._SEARCH_ENDPOINT}`, {
        params: {
          api_key: this._API_KEY,
          q: query,
          limit: this._LIMIT,
        },
      })
      .subscribe((response) => {
        this.results = response.data;
      });
  }
}
