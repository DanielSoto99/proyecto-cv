import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  constructor(private http: HttpClientModule) {}

  login() {}

  register() {}
}
