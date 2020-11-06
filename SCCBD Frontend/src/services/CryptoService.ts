import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routing } from './routes';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  routing: Routing;

  constructor(private http: HttpClient) {
    this.routing = new Routing();
  }

  getTexts() {
    return this.http.get(this.routing.urlCrypto);
  }

  postNewText(object: object) {
    return this.http.post(this.routing.urlCrypto, object);
  }

  postNewMessageToBob(cipherText: object) {
    return this.http.post(this.routing.urlBob + "/msg", cipherText);
  }

  postIvToTtp(object: object) {
    return this.http.post(this.routing.urlTtp + "/iv", object);
  }

} 