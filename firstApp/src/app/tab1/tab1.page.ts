import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nome: string = "Ariana Cursino";

  constructor() {}

  ngOnInit() {
    this.chamarNome()
    this.nome = "Ariana Rodrigues Cursino";
  }
// https://www.youtube.com/watch?v=aHgb3kTudqY&list=PLxNM4ef1BpxgBAqQsMHhwBH6EmwQOD7Rq&index=8 parei nesse vídeo
  chamarNome():void{
    alert('Essa função foi chamada!!!');
  }

}
