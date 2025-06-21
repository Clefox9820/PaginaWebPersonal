import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubRepo } from '../../../core/models/github-project.model';

@Component({
  selector: 'app-repo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent {
  @Input() repo!: GithubRepo;
}
