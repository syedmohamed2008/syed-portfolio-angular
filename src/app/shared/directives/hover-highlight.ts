import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlight {

  private readonly element = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  @HostListener('mouseenter')
  onMouseEnter(): void {

    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      'translateY(-4px)'
    );

    this.renderer.setStyle(
      this.element.nativeElement,
      'box-shadow',
      '0 8px 24px rgba(0, 0, 0, 0.12)'
    );
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {

    this.renderer.removeStyle(
      this.element.nativeElement,
      'transform'
    );

    this.renderer.removeStyle(
      this.element.nativeElement,
      'box-shadow'
    );
  }
}