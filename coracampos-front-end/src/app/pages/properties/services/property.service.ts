import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Property } from "../interfaces/property.interface";

@Injectable({
    providedIn: 'root'
})
export class PropertyService {

    url: string = "./property/data/properties.json";

    constructor(private http: HttpClient) { }

    getProperties = (): Observable<Property[]> => {
        return this.http.get<Property[]>(`${this.url}`);
    }

    getPropetyById = (id: string | number): Observable<Property> => {
        return this.http.get<Property>(`${this.url}/${id}`);
    }

}

