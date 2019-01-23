import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  loading: boolean;
  artists: any[] = [];

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }



  buscar(termino: string) {
    this.loading = true;

    this._spotifyService.getArtists(termino)
      .subscribe((data: any) => {
        console.log(data);
        this.artists = data;

        this.loading = false;
      });
  }
}
