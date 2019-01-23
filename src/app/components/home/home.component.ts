import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  loading: boolean;
  nuevasCanciones: any[] = [];

  constructor(private _spotifyService: SpotifyService) {
    this.loading = true;
    this._spotifyService.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      });
  }

  ngOnInit() {
  }

}
