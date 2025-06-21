import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubRepo } from '../models/github-project.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly API = 'https://api.github.com/users/Clefox9820/repos';

  constructor(private http: HttpClient) {}

  getPublicRepos(): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>(this.API);
  }
}
