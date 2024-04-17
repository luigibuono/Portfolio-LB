import { Component } from '@angular/core';

interface TechStack {
  name: string;
  iconPath: string;
}

interface Project {
  name: string;
  description: string;
  techStack: TechStack[];
  sourceCodeLink: string;
  deployedLink: string;
}

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent {

  projects: Project[] = [
    {
      name: 'LB Technologies',
      description:
        'Sito Azienda IT',
      techStack: [
        { name: 'html', iconPath: 'assets/images/skills/html.svg' },
        { name: 'tailwindCSS', iconPath: 'assets/images/skills/tailwind-svgrepo-com.svg' },
        { name: 'Javascript', iconPath: 'assets/images/skills/javascript.svg' },
      ],
      sourceCodeLink: 'https://github.com/luigibuono/LB-Technologies.git',
      deployedLink: 'https://lb-technologies.netlify.app/'
    },
    {
      name: 'Cyber Sentinel',
      description:
        'Notiziario sul mondo IT',
      techStack: [
        { name: 'Angular', iconPath: 'assets/images/skills/angular-svgrepo-com.svg' },
        { name: 'tailwindCSS', iconPath: 'assets/images/skills/tailwind-svgrepo-com.svg' },
      ],
      sourceCodeLink: 'https://github.com/luigibuono/Cyber-Sentinel',
      deployedLink: 'https://cyber-sentinel.netlify.app/'
    },
    {
      name: 'Portfolio LB',
      description:
        'Il mio personal portfolio',
      techStack: [
        { name: 'Angular', iconPath: 'assets/images/skills/angular-svgrepo-com.svg' },
        { name: 'tailwindCSS', iconPath: 'assets/images/skills/tailwind-svgrepo-com.svg' },
      ],
      sourceCodeLink: '',
      deployedLink: ''
    },
  
  ];
}
