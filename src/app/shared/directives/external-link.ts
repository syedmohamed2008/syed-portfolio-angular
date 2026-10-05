import {
    Directive,
    ElementRef,
    inject,
    Renderer2
} from '@angular/core';


@Directive({
    selector: 'a[appExternalLink]'
})
export class ExternalLink {

    private readonly element =
        inject(ElementRef<HTMLAnchorElement>);

    private readonly renderer =
        inject(Renderer2);


    constructor() {

        this.renderer.setAttribute(
            this.element.nativeElement,
            'target',
            '_blank'
        );

        this.renderer.setAttribute(
            this.element.nativeElement,
            'rel',
            'noopener noreferrer'
        );

    }

}