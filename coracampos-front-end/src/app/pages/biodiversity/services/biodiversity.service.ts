import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BiodiversityCard } from "../interfaces/bioDiversity.interface";

@Injectable({
    providedIn: 'root'
})
export class BiodiversityService {

    url: string = "./assets/propertiesBio.json";

    constructor(private http: HttpClient) { }

    getBioDiversityProperties = (): Observable<BiodiversityCard[]> => {
        return this.http.get<BiodiversityCard[]>(`${this.url}`);
    }

    getBioDiversityPropertyById = (id: string | number): Observable<BiodiversityCard> => {
        return this.http.get<BiodiversityCard>(`${this.url}/${id}`);
    }
}