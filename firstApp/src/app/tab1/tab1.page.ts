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

  chamarNome():void{
    alert('Essa função foi chamada!!!');
  }

}
