import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardApiService {
    constructor(private http: HttpClient) {}
}
