import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-my-skill-set',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skill-set.component.html',
  styleUrls: ['./my-skill-set.component.scss'],
})
export class MySkillSetComponent {
  skillIconsList = [
    { url: 'assets/img/angular.svg', name: 'Angular' },
    { url: 'assets/img/typescript.svg', name: 'TypeScript' },
    { url: 'assets/img/javascript.svg', name: 'JavaScript' },
    { url: 'assets/img/html.svg', name: 'HTML' },
    { url: 'assets/img/css.svg', name: 'CSS' },
    { url: 'assets/img/api.svg', name: 'Rest-Api' },
    { url: 'assets/img/firebase.svg', name: 'Firebase' },
    { url: 'assets/img/git.svg', name: 'GIT' },
    { url: 'assets/img/scrum.svg', name: 'Scrum' },
    { url: 'assets/img/materialdesign.svg', name: 'Material design' },
  ];

  activeName: string | null = null;

  constructor(private navigationService: NavigationService) {}

  goToNextSection() {
    this.navigationService.navigate('my_work');
  }

  triggerSkillEffect(name: string) {
    this.activeName = name;
    setTimeout(() => {
      if (this.activeName === name) {
        this.activeName = null;
      }
    }, 2000);
  }
}
