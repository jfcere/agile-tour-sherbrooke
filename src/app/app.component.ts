import { AfterViewInit, Component, ElementRef, Renderer, ViewChild, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

interface IConference {
  title: string,
  presenter: string,
  company: string,
  picture?: string,
  resume?: string,
}

interface IConferenceNew {
  title: string,
  time: string,
  room: string,
  presenters: IPresenter[],
  company: string,
  resume: string,
}

interface IPresenter {
  name: string,
  bio: string,
  picture: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('tableContainer') tableContainer: ElementRef

  timeAM1 = '10h45 à 12h00';
  timePM1 = '13h00 à 14h15';
  timePM2 = '14h30 à 15h45';

  room1 = 'Salle principale';
  room2 = 'Salle 2';
  room3 = 'Cafétéria';
  room4 = 'Salon VIP';

  conferenceAm1: IConferenceNew[] = [
    {
      time: this.timeAM1,
      room: this.room1,
      title: 'Faire Agile vs être Agile',
      presenters: [
        {
          name: 'Olivier Fortier',
          picture: 'assets/olivier-fortin.png',
          bio: `BIO-X Loren ipsum doloris something anyway nobody will see this technically so i can write pretty much anything i want as long as it takes enough place to be a representative fake text according to what should be provided when all will be available because it is not the case now and i dont want to do some back and forth a thousand time`,
        }
      ],
      company: 'FX Innovation',
      resume: `BIO-X Loren ipsum doloris something anyway nobody will see this technically so i can write pretty much anything i want as long as it takes enough place to be a representative fake text according to what should be provided when all will be available because it is not the case now and i dont want to do some back and forth a thousand time`,
    },
    {
      time: this.timeAM1,
      room: this.room2,
      title: '"Scaling Agile" dans un contexte manufacturier',
      presenters: [
        {
          name: 'Benoit Lapointe',
          picture: 'assets/benoit-lapointe.png',
          bio: `Benoit Lapointe est à l'emploi d'IBM Bromont depuis 2001. Depuis près de 10 ans, il a expérimenté plusieurs approches tel que le Rational Unified Process, le Lean Software Developpement (Kanban), l'eXtreme Programming, Scrum et Scaled Agile Framework.<br><br>Certifié Scrum Master (CSM) depuis 2009, il est actuellement Scrum Master d'une équipe de développement relié à l'intégration de l'industrie 4.0. Il est IBM Systems Agile Champion pour l'usine de Bromont ce qui fait de lui un acteur important à la mise en place de l'approche Agile/Scrum pour l'ensemble de l'usine. Dans le cadre de sa maîtrise en administration des  affaires (MBA), Benoit s'est intéressé à l'intégration des valeurs et principes agiles dans la gestion de projet non relié aux technologies de l'information. En plus d'accompagner une équipe de recherche et développement dans son parcours vers l'agilité, il est impliqué au niveau des différents bureaux de projets de l'usine de Bromont pour faire de l'accompagnement.<br><br>De plus, Benoit a été conférencier pour différents groupes tel que Agile Montréal, Agile Tour à Montréal et à Québec , ConFoo.ca et les Manufacturiers Exportateurs du Québec (MEQ).`
        }
      ],
      company: 'IBM',
      resume: `Depuis plusieurs années, le département des technologies de l'information chez IBM Bromont a expérimenté différentes approches agiles. Par contre, dans une optique de maximiser la création de valeur pour l'organisation,  il devient essentiel d'influencer les autres départements de l'entreprise afin d'avoir une approche d'agilité plus globale.<br><br>Cette conférence se veut un retour d'expérience sur l'intégration des valeurs agiles dans la gestion d'un et des projets chez IBM Bromont. Elle portera essentiellement sur l'évolution des différents bureaux de projets de l'usine, ainsi que l'intégration entre la gestion de projet traditionnelle et agile.`,
    },
    {
      time: this.timeAM1,
      room: this.room3,
      title: 'Top 5 des meilleures façons d\'améliorer votre code',
      presenters: [
        {
          name: 'Éric De Carufel',
          picture: 'assets/eric-de-carufel.png',
          bio: ``,
        },
      ],
      company: 'Pyxis',
      resume: `BIO-X Loren ipsum doloris something anyway nobody will see this technically so i can write pretty much anything i want as long as it takes enough place to be a representative fake text according to what should be provided when all will be available because it is not the case now and i dont want to do some back and forth a thousand time`,
    },
    {
      time: this.timeAM1,
      room: this.room4,
      title: 'Le Management 3.0: Des processus qui marchent',
      presenters: [
        {
          name: 'Nathalie Ferron',
          picture: 'assets/nathalie-ferron.png',
          bio: ``,
        },
        {
          name: 'Magali Doucet',
          picture: 'assets/magali-doucet.png',
          bio: ``,
        }
      ],
      company: 'Levio',
      resume: ``
    },
  ];

  conferencePm1: IConference[] = [
    {
      title: 'Gérer l\'inconnu avec peu de moyens par le développement itératif - L\'Agilité chez PMCtire.com',
      presenter: 'Benoit St-André & Frédéric Gauthier-Boutin',
      company: 'PMCtire',
      picture: 'assets/benoint-st-andre.png',
    },
    {
      title: 'CGI Sherbrooke: transformation agile en cours',
      presenter: 'Sedera Randria',
      company: 'CGI',
      picture: 'assets/sedera-randria.png',
    },
    {
      title: 'La valeur: édition du développeur',
      presenter: 'Luc St-Laurent',
      company: 'Pyxis',
      picture: 'assets/luc-st-laurent.png',
    },
    {
      title: 'En route vers l\'optimisation! Votre succès avec Kanban étape par étape',
      presenter: 'Valéry Germain & Nicolas Mercier',
      company: 'Facilité',
      picture: 'assets/nicolas-mercier.png',
    },
  ];

  conferencePm2: IConference[] = [
    {
      title: 'CI: Intégration continue, de la théorie à la pratique',
      presenter: 'Gabriel Blais-Bourget',
      company: 'Sherweb',
      picture: 'assets/gabriel-blais-bourget.png',
    },
    {
      title: 'Revoir le travail du gestionnaire du passé au présent',
      presenter: 'Daniel Prince',
      company: 'Revenu Québec',
      picture: 'assets/daniel-prince.png',
    },
    {
      title: 'Architecture express pour petits projets',
      presenter: 'Frédéric Paquet & Eric Lessard',
      company: 'Facilité',
      picture: 'assets/frederic-paquet.png',
    },
    {
      title: 'A déterminer',
      presenter: '',
      company: '',
    },
  ];

  constructor(
    overlay: Overlay,
    viewContainerRef: ViewContainerRef,
    private modal: Modal,
    private renderer: Renderer,
  ) {
    overlay.defaultViewContainer = viewContainerRef;
  }

  ngAfterViewInit() {
    // ugly fix for mobile as fixed column in table was not correctly positioned
    // due to loading time of other element such as fonts and images
    setTimeout(() => {
      this.renderer.setElementClass(this.tableContainer.nativeElement, 'table-container', true);
    }, 1000);
  }

  openModal(conference: IConferenceNew) {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .okBtn('Fermer')
      .okBtnClass('btn btn-modal-close uppercase')
      .body(`
        <div class="row">
          <div class="col-sm-12 col-md-4 col-lg-3 text-center">
            <img class="conference-picture" src="${conference.presenters[0].picture}">
          </div>
          <div class="col-sm-12 col-md-8 col-lg-9">
            <h1 class="conference-title text-primary">${this.concatPresenters(conference.presenters)}</h1>
            <h3 class="conference-subtitle text-accent uppercase">${conference.title}</h3>
            <h5 class="conference-location text-secondary uppercase bold">${conference.time} - ${conference.room}</h5>
            <h4 class="conference-bio text-primary bold">Biographie</h4>
            <p class="conference-text">${conference.presenters[0].bio}</p>
            <h4 class="conference-resume text-primary bold">Résumé de la conférence</h4>
            <p class="conference-text">${conference.resume}</p>
          </div>
        </div>`)
      .open();
  }

  concatPresenters(presenters: IPresenter[]): string {
    return presenters.map(x => x.name).join(' et ');
  }
}
