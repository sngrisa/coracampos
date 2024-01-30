import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Property } from "../interfaces/property.interface";

@Injectable({
    providedIn: 'root'
})
export class PropertyService {

    url: string = "./assets/properties.json";

    constructor(private http: HttpClient) { }

    getProperties = (): Observable<Property[]> => {
        return this.http.get<Property[]>(`${this.url}`);
    }

    /* getPropetyById = (id: number): Observable<any> => {
        return this.http.get(this.url)
            .pipe(map((response: any) => {
                return response.filter((item: Property) => (item._id === id));
            }));
    } */

}

