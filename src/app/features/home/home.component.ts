import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from "../projects/projects.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
