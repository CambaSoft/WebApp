import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "root",
})
export class RestService {

    private headers!: HttpHeaders;
    private url = environment.webServicesUrl;

    constructor(private _http: HttpClient) { }

    get(prefixUrl: string): Observable<any> {
        this.setHeaders();
        return this._http.get(this.url + prefixUrl, { headers: this.headers });
    }

    post(prefixUrl: string, params: any = null): Observable<any> {
        this.setHeaders();
        return this._http.post(
            this.url + prefixUrl,
            params,
            { headers: this.headers }
        );
    }

    put(prefixUrl: string, params: any = null): Observable<any> {
        this.setHeaders();
        return this._http.put(
            this.url + prefixUrl,
            params,
            { headers: this.headers }
        );
    }

    delete(prefixUrl: string, params: any = null): Observable<any> {
        this.setHeaders();
        return this._http.delete(
            this.url + prefixUrl,
            { headers: this.headers }
        );
    }

    setHeaders() {
        this.headers = new HttpHeaders()
            .set("Content-Type", "application/json")
            .set("X-Requested-With", "XMLHttpRequest")
            .set("id_token", JSON.parse(localStorage.getItem("user")!)?.idToken || "");
    }
}