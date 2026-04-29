import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exemplo } from './exemplo/exemplo';
import { Aula2 } from './aula2/aula2';

@Component({
  selector: 'app-root',
  imports: [Aula2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('controle-de-estoque');
}
