import { AfterViewInit, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[lazySrcLoad]',
})
export class LazySrcLoadDirective implements AfterViewInit, OnInit {
  private intersectionObserver: IntersectionObserver;

  constructor(private elementHost: ElementRef<HTMLImageElement>, private renderer: Renderer2) {}

  ngOnInit() {}
  ngAfterViewInit() {
    const { nativeElement } = this.elementHost;

    if ('loading' in HTMLImageElement.prototype) {
      this.renderer.setAttribute(nativeElement, 'loading', 'lazy');
      this.checked(nativeElement);
    } else if (typeof IntersectionObserver === 'function') {
      this.setIntersectionObserver(nativeElement);
    } else {
      this.checked(nativeElement);
    }
  }

  checked(element: HTMLImageElement) {
    this.renderer.addClass(element, 'checked');
  }

  setIntersectionObserver(element: HTMLImageElement) {
    const src = element.src;
    this.renderer.setAttribute(element, 'data-src', src);
    this.renderer.removeAttribute(element, 'src');

    this.intersectionObserver = new IntersectionObserver(
      (entries: (IntersectionObserverEntry & { target: HTMLImageElement })[], observe) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.setAttribute(entry.target, 'src', src);
            this.checked(entry.target);
            this.intersectionObserver.unobserve(entry.target);
            this.intersectionObserver.disconnect(); //nas duvidas
          }
        }
      },
      {
        rootMargin: '100px',
      }
    );
    this.intersectionObserver.observe(element);

    console.log(this.intersectionObserver);
  }
}
