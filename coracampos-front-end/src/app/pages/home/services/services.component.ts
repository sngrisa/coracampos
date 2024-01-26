import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  services: any[] =
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

}
