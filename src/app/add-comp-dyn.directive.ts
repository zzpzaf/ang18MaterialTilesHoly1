import { ComponentRef, Directive, effect, input, ViewContainerRef } from '@angular/core';
import { DynLayOutComponents } from './app.component';

@Directive({
  selector: '[addCompDyn]',
  standalone: true,
})
export class AddCompDynDirective {
  
  compToken = input.required<string>();
  private componentRef!: ComponentRef<any>;

  constructor(public viewContainerRef: ViewContainerRef) {
    effect(() => {
      const layOutCompSelected = this.compToken();
      if (!layOutCompSelected) {
        return;
      }
      const dynComponent = DynLayOutComponents[layOutCompSelected];
      this.viewContainerRef.createComponent(dynComponent);
    });
  }
}

