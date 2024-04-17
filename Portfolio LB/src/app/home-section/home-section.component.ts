import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements AfterViewInit, OnChanges {
  CV:string = 'assets/CV Luigi Buono.pdf';

  @Input()
  navContactLinkRef?: ElementRef<HTMLAnchorElement>;

  @Input()
  sectionMinHeight: number = 0;

  @ViewChild('contactButton', { read: ElementRef })
  contactButton!: ElementRef<HTMLButtonElement>;

  @ViewChild('homeContainer', { read: ElementRef })
  homeContainer!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
  }

  ngOnChanges(): void {
    if (this.sectionMinHeight)
      this.homeContainer.nativeElement.style.height = this.sectionMinHeight + 'px';
  }

  clickDownloadCV() {
    const link = document.createElement('a');
    link.href = this.CV; 
    link.download = 'CV_Luigi_Buono.pdf'; 
    link.target = '_blank'; 
    link.style.display = 'none'; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link);
  }
}
