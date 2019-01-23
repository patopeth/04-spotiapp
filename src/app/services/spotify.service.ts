import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAfrd4ohWyztgdEMR13jTVF6lHWF80Bj7O-ft1DIK0LUu5HKDbsk22xlW_CTL8zPtyXrRucclcRtiuhqgo'
    });

    return this._http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=15')
      .pipe(map((data: any) => data.albums.items));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtistById(id: string) {
    return this.getQuery(`artists/${id}`);
  }
}
