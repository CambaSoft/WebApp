import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestService } from "./rest.service";
import { User } from "../models/User";
import { SocialUser } from "angularx-social-login";

@Injectable({
    providedIn: "root",
})
export class UserService {

    private resourceName = "/users";

    constructor(
        public _http: HttpClient,
        private _requestService: RestService = new RestService(_http)
    ) { }

    register(user: User): Observable<any> {
        return this._requestService.post(this.resourceName, user);
    }

    login(user: User): Observable<any> {
        return this._requestService.post(`${this.resourceName}/login`, user);
    }

    saveUser(user: User) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    getUser(): User {
        return JSON.parse(localStorage.getItem("user")!);
    }

    deleteUser() {
        localStorage.removeItem("user");
    }

    isAuthenticated(): boolean {
        return JSON.parse(localStorage.getItem("user")!) !== null;
    }

}