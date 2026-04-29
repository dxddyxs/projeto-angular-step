import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exemplo } from './exemplo/exemplo';
import { Aula2 } from './aula2/aula2';
import { Aula3 } from './aula3/aula3';

@Component({
  selector: 'app-root',
  imports: [Aula3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('controle-de-estoque');
}
