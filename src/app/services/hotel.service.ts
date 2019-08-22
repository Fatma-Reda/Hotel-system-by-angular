import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HotelService {
  constructor(private httpClient: HttpClient) {}

  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();

  getHotels(): Observable<any> {
    return this.httpClient.get("https://api.myjson.com/bins/tl0bp");
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
    console.log(this.currentMessage);
  }
}
