import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pilot} from '../model/pilot';
import {PilotAttrs} from '../model/pilot-attrs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private http: HttpClient) {
  }

  getPilots(): Observable<Pilot[]> {
    return this.http.get<PilotAttrs[]>('/api/pilots').pipe(
      map((data) => data.map((pilotAttrs) => new Pilot(pilotAttrs)))
    );
  }

  getPilot(id: number) {
    return this.http.get<PilotAttrs>(`/api/pilots/${id}`).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }
}
