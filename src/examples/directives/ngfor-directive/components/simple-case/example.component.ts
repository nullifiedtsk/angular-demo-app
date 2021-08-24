import {Component} from "@angular/core";

@Component({
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  data: {id: number; name: string}[] = [
    {
      id: 1,
      name: 'Bob'
    },
    {
      id: 2,
      name: 'Alice'
    },
    {
      id: 3,
      name: 'Anna'
    }
  ];
}
