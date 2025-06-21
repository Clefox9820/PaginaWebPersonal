import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from "../projects/projects.component";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { CertificatesComponent } from "../certificates/certificates.component";
import { ContactComponent } from "../contact/contact.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectsComponent, AboutComponent, SkillsComponent, CertificatesComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
