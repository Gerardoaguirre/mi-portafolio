import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'Presentancion',
  templateUrl: './Presentancion.component.html',
  styleUrls: ['./Presentancion.component.scss']
})

export class Presentancioncomponent implements OnInit {

    ngOnInit(): void {
        console.log("Iniciamos el componente Flexbox hijo")
        
    }
}