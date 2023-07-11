import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'Portafolio',
  templateUrl: './Portafolio.component.html',
  styleUrls: ['./Portafolio.component.scss']
})

export class PortafolioComponent implements OnInit {
  constructor(private router:Router){

  }
    ngOnInit(): void {
        console.log("Iniciamos el componente Flexbox y reedirigimos");
    }
}