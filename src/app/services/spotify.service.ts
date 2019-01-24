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
      'Authorization': 'Bearer BQB7An9hZl8iuSTWfmXowJSzWRCF_KEn6zWoOw2ck7dKHc3Ef0XV7_lXYkcfNakz-LdF7GZFoGSbskomb14'
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

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map((data: any) => data.tracks));
  }
}
