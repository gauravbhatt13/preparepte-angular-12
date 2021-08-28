import { Directive, ElementRef, Renderer2 } from '@angular/core';

// Directive decorator
@Directive({ selector: '[appDragDrop]' })
// Directive class
export class DragDropDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
        // Use renderer to render the element with styles
        const element: any = this.el.nativeElement;
        element.setAttribute('draggable', 'true');
        element.addEventListener('dragover', function (event) {
            event.preventDefault();
        });
        element.addEventListener('drop', function (event) {
            event.preventDefault();
            const elementId = event.dataTransfer.getData('elementId');
            document.getElementById(elementId).textContent = event.target.textContent;
            event.target.textContent = event.dataTransfer.getData('text');
        });
        element.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData('text', event.target.textContent);
            event.dataTransfer.setData('elementId', event.target.id);
        });
    }
}
