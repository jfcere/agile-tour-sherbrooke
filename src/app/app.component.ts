import { AfterViewInit, Component, ElementRef, Renderer, ViewChild, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import { ConferenceAm1, ConferencePm1, ConferencePm2 } from './consts/conference';
import { Conference, Presenter } from './models';

interface IConference {
  title: string,
  presenter: string,
  company: string,
  picture?: string,
  resume?: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('tableContainer') tableContainer: ElementRef

  conferenceAm1: Conference[];
  conferencePm1: Conference[];
  conferencePm2: Conference[];

  constructor(
    overlay: Overlay,
    viewContainerRef: ViewContainerRef,
    private modal: Modal,
    private renderer: Renderer,
  ) {
    overlay.defaultViewContainer = viewContainerRef;
    
    this.conferenceAm1 = ConferenceAm1;
    this.conferencePm1 = ConferencePm1;
    this.conferencePm2 = ConferencePm2;
  }

  ngAfterViewInit() {
    // ugly fix for mobile as fixed column in table was not correctly positioned
    // due to loading time of other element such as fonts and images
    setTimeout(() => {
      this.renderer.setElementClass(this.tableContainer.nativeElement, 'table-container', true);
    }, 1000);
  }

  openModal(conference: Conference) {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .okBtn('Fermer')
      .okBtnClass('btn btn-modal-close uppercase')
        // <div class="background"></div>
      .body(`
        <div class="conference-header text-center">
          <h1 class="conference-title text-accent uppercase">${conference.title}</h1>
          <h4 class="conference-location text-secondary uppercase bold">${conference.time} - ${conference.room}</h4>
          <div class="conference-picture-container text-center">` +
            conference.presenters.reduce((pictures, presenter) => {
              return pictures.concat(`<img class="conference-picture" src="${presenter.picture}">`);
            }, '') + `
          </div>
        </div>
        <div class="conference-content text-center">
          <h3 class="conference-presenter text-primary">${this.concatPresenters(conference.presenters)}</h3>
          <h4 class="conference-resume text-primary bold">Résumé de la conférence</h4>
          <p class="conference-text">${conference.resume}</p>` +
          conference.presenters.reduce((bio, presenter) => {
            return bio.concat(`
              <h4 class="conference-bio text-primary bold">
                Biographie - ${presenter.name}
              </h4>
              <p class="conference-text">${presenter.bio}</p>`);
          }, '') + `
        </div>`)
      .open();
  }

  concatPresenters(presenters: Presenter[]): string {
    return presenters.map(x => x.name).join(' et ');
  }
}
