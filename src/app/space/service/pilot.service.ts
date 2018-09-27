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

  savePilot(pilotAttrs: PilotAttrs): Observable<Pilot> {
    if (pilotAttrs.id) {
      return this.http.put<PilotAttrs>(`/api/pilots/${pilotAttrs.id}`, pilotAttrs).pipe(
        map((data) => new Pilot(data))
      );
    } else {
      return this.http.post<PilotAttrs>('/api/pilots', pilotAttrs).pipe(
        map((data) => new Pilot(data))
      );
    }
  }
}
