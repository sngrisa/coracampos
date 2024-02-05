import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {


  openSearchBox = () => {
    let search: HTMLElement | null = document.getElementById('search');
    let navToggleBox: any | null = search?.querySelector('.navbar-toggle-box');
    navToggleBox?.addEventListener('click', (e: any) => {
      e.preventDefault();
      search?.classList.add('box-collapse-open');
      search?.classList.remove('box-collapse-closed');
    })
  }

  closeSearchBox = () => {
    let search: HTMLElement | null = document.getElementById('search');
    let closeToggleBox: any | null = search?.querySelector('.close-box-collapse');
    closeToggleBox?.addEventListener('click', (e: any) => {
      e.preventDefault();
      search?.classList.remove('box-collapse-open');
      search?.classList.add('box-collapse-closed');
    })
  }





  /*  search?.addEventListener('click', (event: any) => {
     event?.preventDefault();
     search?.classList.remove('box-collapse-open');
     search?.classList.add('box-collapse-closed');
   }) */

}


/* on('click', '.navbar-toggle-box', function (e) {
  e.preventDefault()
  body.classList.add('box-collapse-open')
  body.classList.remove('box-collapse-closed')
})

on('click', '.close-box-collapse', function (e) {
  e.preventDefault()
  body.classList.remove('box-collapse-open')
  body.classList.add('box-collapse-closed')
}) */

/* let search: HTMLElement | null = document.querySelector('search');
document.addEventListener('click', (e: MouseEvent) => {
 const target = e.target as Element;
 if (target.matches('.navbar-toggle-box')) {
   e.preventDefault();
   if (search) {
     search.classList.add('box-collapse-open');
     search.classList.remove('box-collapse-closed');
   }
 } else if (target.matches('.close-box-collapse')) {
   e.preventDefault();
   if (search) {
     search.classList.remove('box-collapse-open');
     search.classList.add('box-collapse-closed');
   }
 }
}); */


