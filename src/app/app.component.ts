import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  scrollTo(fragment: string): void {
    this.router.navigate([], {
      fragment,
      queryParamsHandling: 'preserve',
      skipLocationChange: false,
    }).then(() => {
      const el = document.getElementById(fragment);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
