import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  loading: boolean;
  toptracks: any = {};

  constructor(private _spotifyService: SpotifyService,
    private _activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.loading = true;
    let id: string;
    this._activatedRouter.params.subscribe(params => {
      id = params['id'];
    });

    this.getArtista(id);
    this.getTopTracks(id);
  }

  getArtista(id: string) {
    this.artista = this._spotifyService.getArtistById(id)
      .subscribe(artista => {
        this.artista = artista;
        this.loading = false;
      });
  }
  getTopTracks(id: string) {
    this._spotifyService.getTopTracks(id)
      .subscribe(toptracks => {
        this.toptracks = toptracks;
        console.log(this.toptracks);
      });
  }

}
