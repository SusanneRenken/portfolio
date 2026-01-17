import { Component, OnInit } from '@angular/core';
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
export class MySkillSetComponent implements OnInit {
  skillIconsList = [
    { url: 'assets/img/angular.svg', name: 'Angular' },
    { url: 'assets/img/rxjs.svg', name: 'RxJS' },
    { url: 'assets/img/typescript.svg', name: 'TypeScript' },
    { url: 'assets/img/javascript.svg', name: 'JavaScript' },
    { url: 'assets/img/html.svg', name: 'HTML' },
    { url: 'assets/img/css.svg', name: 'CSS' },
    { url: 'assets/img/python.svg', name: 'Python' },
    { url: 'assets/img/django.svg', name: 'Django' },
    { url: 'assets/img/drf.svg', name: 'DRF' },
    { url: 'assets/img/api.svg', name: 'Rest-Api' },
    { url: 'assets/img/postgresql.svg', name: 'PostgreSQL' },
    { url: 'assets/img/redis.svg', name: 'Redis' },
    { url: 'assets/img/docker.svg', name: 'Docker' },
    { url: 'assets/img/git.svg', name: 'GIT' },
    { url: 'assets/img/linux.svg', name: 'Linux' },
    // { url: 'assets/img/firebase.svg', name: 'Firebase' },
    // { url: 'assets/img/scrum.svg', name: 'Scrum' },
    // { url: 'assets/img/materialdesign.svg', name: 'Material design' },
    // { url: 'assets/img/sql.svg', name: 'SQL' },
  ];

  activeName: string | null = null;

  private readonly SKILL_HINT_KEY = 'hasSeenSkillHint';
  hasSeenSkillHint: boolean = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.hasSeenSkillHint = localStorage.getItem(this.SKILL_HINT_KEY) !== null;
  }

  goToNextSection() {
    this.navigationService.navigate('my_work');
  }

  triggerSkillEffect(name: string) {
    localStorage.setItem(this.SKILL_HINT_KEY, '1');
    this.hasSeenSkillHint = true;
    this.activeName = name;
    setTimeout(() => {
      if (this.activeName === name) {
        this.activeName = null;
      }
    }, 2000);
  }
}
