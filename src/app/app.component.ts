import { AfterViewInit, Component, ElementRef, Renderer, ViewChild } from '@angular/core';

interface IConference {
  title: string,
  presenter: string,
  company: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('tableContainer') tableContainer: ElementRef

  conferenceAm1: IConference[] = [
    {
      title: 'Faire Agile vs être Agile',
      presenter: 'Olivier Fortier',
      company: 'FX Innovation',
    },
    {
      title: '"Scaling Agile" dans un contexte manufacurier',
      presenter: 'Benoit Lapointe',
      company: 'IBM',
    },
    {
      title: 'Top 5 des meilleures façons d\'améliorer votre code',
      presenter: 'Éric De Carufel',
      company: 'Pyxis',
    },
    {
      title: 'Le Management 3.0: Des processus qui marche',
      presenter: 'Nathalie Ferron et Magali Doucet',
      company: 'Levio',
    },
  ];

  conferencePm1: IConference[] = [
    {
      title: 'Gérer l\'inconnu avec peu de moyens par le développement itératif - L\'Agilité chez PMCtire.com',
      presenter: 'Benoit St-André & Frédéric Gauthier-Boutin',
      company: 'PMCtire',
    },
    {
      title: 'CGI Sherbrooke: transformation agile en cours',
      presenter: 'Sedera Randria',
      company: 'CGI',
    },
    {
      title: 'La valeur: édition du développeur',
      presenter: 'Luc St-Laurent',
      company: 'Pyxis',
    },
    {
      title: 'En route vers l\'optimisation! Votre succès avec Kanban étape par étape',
      presenter: 'Valéry Germain & Nicolas Mercier',
      company: 'Facilité',
    },
  ];

  conferencePm2: IConference[] = [
    {
      title: 'CI: Intégration continue, de la théorie à la pratique',
      presenter: 'Gabriel Blais-Bourget',
      company: 'Sherweb',
    },
    {
      title: 'Revoir le travail du gestionnaire du passé au présent',
      presenter: 'Daniel Prince',
      company: 'Revenu Québec',
    },
    {
      title: 'Architecture express pour petits projets',
      presenter: 'Frédéric Paquet & Eric Lessard',
      company: 'Facilité',
    },
    {
      title: 'A déterminer',
      presenter: '',
      company: '',
    },
  ];

  constructor(private renderer: Renderer) { }

  ngAfterViewInit() {
    // ugly fix for mobile as fixed column in table was not correctly positioned
    // due to loading time of other element such as fonts and images
    setTimeout(() => {
      this.renderer.setElementClass(this.tableContainer.nativeElement, 'table-container', true);
    }, 1000);
  }
}
