import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

const animation = { duration: 1000000, easing: (t: number) => t }

@Component({
  selector: 'app-carrousel-about',
  templateUrl: './carrousel-about.component.html',
  styleUrls: [
    "../../../../../node_modules/keen-slider/keen-slider.min.css",
    "./carrousel-about.component.scss",
  ],
})
export class CarrouselAboutComponent implements AfterViewInit, OnDestroy {
  

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>;

  slider!: KeenSliderInstance;

  ngAfterViewInit(): void {
    this.slider = new KeenSlider(
      this.sliderRef.nativeElement,
      {
        loop: true,
        drag: false
      },
      [
        (slider) => {
          let timeout!: any;
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 5000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ]
    )
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

}
