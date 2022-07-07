import { Countries } from "./country.interface";

export interface User {
    id:       number;
    username: string;
    password: string;
    email:    string;
    offers:   boolean;
    coutry:   Countries;
    city:     string;
}