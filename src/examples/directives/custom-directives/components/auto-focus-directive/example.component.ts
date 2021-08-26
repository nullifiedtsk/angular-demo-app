import { Component, NgZone, OnDestroy } from '@angular/core';

const NAMES = [
  'Bob',
  'Alice',
  'Anna',
  'Mark',
  'Dmitry',
  'Vasiliy',
  'Antony',
  'Alexa',
  'Anastacia',
  'Viktoria',
  'Jeanne',
  'Olesia',
  'Rebecca',
  'Olivia',
];
const MESSAGES = ['Hi!', 'Hello', 'q guys', 'Holla', 'Bonjour!'];

interface Message {
  id: number;
  date: Date;
  author: string;
  message: string;
}

function getRandomItem<T>(arr: T[]): T {
  return arr[(arr.length * Math.random()) | 0];
}

@Component({
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class AutoFocusDirectiveDemoComponent implements OnDestroy {
  private _id = 0;

  messages: Message[] = [];
  interval: any;
  useTrackBy = false;

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  addNewMessage() {
    this.messages = this.messages.concat(this.createMockMessage());
  }

  trackByFn(index: number, item: Message) {
    return item.id; // or use index;
  }

  private createMockMessage() {
    return {
      id: this.getNextId(),
      author: getRandomItem(NAMES),
      message: getRandomItem(MESSAGES),
      date: new Date(),
    };
  }

  constructor(private zone: NgZone) {
    this.messages = new Array(50).fill(0).map(() => this.createMockMessage());
    // We are calling `add message function` within the interval.
    // setInterval is executing the code outside of angular context, so we need to manually run the code in angular context.
    setInterval(() => this.zone.run(() => this.addNewMessage()), 1000);
  }

  private getNextId() {
    return ++this._id;
  }
}
