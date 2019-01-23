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

  constructor(private _spotifyService: SpotifyService,
    private _activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.loading = true;
    let id: string;
    this._activatedRouter.params.subscribe(params => {
      id = params['id'];
    });

    this.artista = this._spotifyService.getArtistById(id)
      .subscribe((artista) => {
        this.artista = artista;
        this.loading = false;
      });
  }

}
