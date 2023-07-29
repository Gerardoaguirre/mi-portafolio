import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'SobreMi',
  templateUrl: './SobreMi.component.html',
  styleUrls: ['./SobreMi.component.scss']
})

export class SobreMicomponent implements OnInit {

    ngOnInit(): void {
        console.log("Iniciamos el componente Flexbox hijo")
        
    }
}