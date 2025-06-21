import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../core/services/github.service';
import { GithubRepo } from '../../core/models/github-project.model';
import { RepoCardComponent } from '../../shared/components/repo-card/repo-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RepoCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  repos: GithubRepo[] = [];

  constructor(private github: GithubService) {}

  ngOnInit(): void {
    this.github.getPublicRepos().subscribe({
      next: data => this.repos = data,
      error: err => console.error('Error fetching repos:', err)
    });
  }
}
