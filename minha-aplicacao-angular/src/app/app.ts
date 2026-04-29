import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exemplo } from './exemplo/exemplo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Exemplo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('controle-de-estoque');
}
