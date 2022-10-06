import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  
  // @HostListener('click')
  // toggleOpen(_eventData: Event) {
  //   this.isOpen = !this.isOpen;
  //   // if (this.elementRef.nativeElement.classList.contains('open')) {
  //   //   this.renderer.removeClass(this.elementRef.nativeElement, 'open');
  //   // } else {
  //   //   this.renderer.addClass(this.elementRef.nativeElement, 'open'); 
  //   // }
  // }
}
