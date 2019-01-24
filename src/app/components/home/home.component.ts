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
  error: any;

  constructor(private _spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;

    this._spotifyService.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;

      }, (errorServicio) => {
        console.log(errorServicio);
        console.log(errorServicio.error.error.message);

        this.loading = false;
        this.error = errorServicio;
      });
  }

  ngOnInit() {
  }

}
