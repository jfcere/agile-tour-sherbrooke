import { Presenter } from './presenter';

export abstract class Conference {
  title: string;
  time: string;
  room: string;
  presenters: Presenter[];
  company: string;
  resume: string;
}
