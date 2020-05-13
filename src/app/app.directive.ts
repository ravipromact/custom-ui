import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    //@Input('appHighlight') highlightColor: string;
    constructor(private el: ElementRef) {
       el.nativeElement.style.color = 'yellow';
    }
    
    @HostListener('click') onClick() {
        this.highlight('yellow');
      }
      
      @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
      }

private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
      }

      
}

