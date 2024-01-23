import { Component } from '@angular/core';
import { VisionItem } from '../interface/aboutItem.interface';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent {

  description: string = "Ser referentes en consultoria rural y urbana para todo el norte del pais"; 

  visionItems: VisionItem[] =
    [
      {
        id: "1",
        name: "Diseñar Estrategias",
        desc: "Tenemos el compromiso de aportar al crecimiento desde el estudio y el profesionalismo.",
        icon: "bi bi-luggage"
      },
      {
        id: "2",
        name: "Capacitar",
        desc: "En cada lugar incentivar a la educación y el desarrollo.",
        icon: "bi bi-palette2"
      },
      {
        id: "3",
        name: "Integrar Recursos",
        desc: "Trabajamos codo a codo con cada sector para generar sociedades sólidas.",
        icon: "bi bi-bricks"
      },
      {
        id: "4",
        name: "Planeamiento",
        desc: "Creemos en el crecimiento ordenado y sustentable.",
        icon: "bi bi-tools"
      }
    ]

    capitalize = () =>{
      this.description = this.description.substring(0,1).toUpperCase() + this.description.substring(1, this.description.length-1);
    }

}
