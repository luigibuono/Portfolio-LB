import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnChanges {

  @Input()
  sectionMinHeight?: number;

  @ViewChild('contactContainer')
  contactContainerRef!: ElementRef<HTMLDivElement>;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.contactContainerRef && this.sectionMinHeight)
      this.contactContainerRef.nativeElement.style.height = this.sectionMinHeight + 'px';
  }
}
