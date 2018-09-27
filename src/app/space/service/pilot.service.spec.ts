import {PilotService} from './pilot.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {Pilot} from '../model/pilot';

class HttpClientMock extends HttpClient {
  constructor() {
    super(null);
  }
}

fdescribe('PilotService', () => {

  const httpClient = new HttpClientMock();
  const pilotService = new PilotService(httpClient);

  describe('getPilot', () => {
    beforeEach(() => {
      const pilotAttrs = {'id': 1, 'firstName': 'Adam', 'lastName': 'B', 'imageUrl': '/assets/kulfon.jpg'};
      spyOn(httpClient, 'get').and.returnValue(of(pilotAttrs));
    });

    it('calls a valid api endpoint', () => {
      pilotService.getPilot(1).subscribe();
      expect(httpClient.get).toHaveBeenCalledWith('/api/pilots/1');
    });

    it('returns an instance of Observable containing a pilot', () => {
      pilotService.getPilot(1).subscribe((pilot) => {
        expect(pilot instanceof Pilot).toBeTruthy();
      });
    });
  });

  describe('savePilot', () => {

    it('calls put for an existing pilot', () => {
      // given
      const pilotAttrs = {'id': 1, 'firstName': 'Adam', 'lastName': 'B', 'imageUrl': '/assets/kulfon.jpg'};
      spyOn(httpClient, 'put').and.returnValue(of({}));
      // when
      pilotService.savePilot(pilotAttrs).subscribe();
      // then
      expect(httpClient.put).toHaveBeenCalledWith('/api/pilots/1', pilotAttrs);
    });

    it('calls post for a non-existing pilot', () => {
      // given
      const pilotAttrs = {'firstName': 'Adam', 'lastName': 'B', 'imageUrl': '/assets/kulfon.jpg'};
      spyOn(httpClient, 'post').and.returnValue(of({}));
      // when
      pilotService.savePilot(pilotAttrs).subscribe();
      // then
      expect(httpClient.post).toHaveBeenCalledWith('/api/pilots', pilotAttrs);
    });
  });

});
