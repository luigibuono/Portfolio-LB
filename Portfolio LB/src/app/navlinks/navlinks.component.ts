import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-navlinks',
  templateUrl: './navlinks.component.html',
  styleUrls: ['./navlinks.component.scss']
})
export class NavlinksComponent implements AfterViewInit {

  googleDriveResumeLink: string = 'https://drive.google.com/file/d/1X_ouUp8hk7RCEaaROSTZMCnCEC4xomz3/view?usp=drive_link';
  googleDriveResumeFileId: string = '1X_ouUp8hk7RCEaaROSTZMCnCEC4xomz3';

  @Input()
  usedInSidenav: boolean = false;

  @ViewChildren('sectionLink', { read: ElementRef })
  sectionLinkRefs!: QueryList<ElementRef<HTMLAnchorElement>>;

  @ViewChild('resumeLink', { read: ElementRef })
  resumeLinkRef!: ElementRef<HTMLAnchorElement>;

  @ViewChild('resumedownloadLink', { read: ElementRef })
  resumedownloadLinkRef!: ElementRef<HTMLAnchorElement>;

  @ViewChild('newWindowResumeLink', { read: ElementRef })
  newWindowResumeLinkRef!: ElementRef<HTMLAnchorElement>;

  @ViewChild('contactLink', { read: ElementRef })
  contactLinkRef!: ElementRef<HTMLAnchorElement>;

  ngAfterViewInit() {
    this.resumeLinkRef.nativeElement.addEventListener('click', () => {
      this.newWindowResumeLinkRef.nativeElement.click();
      this.resumedownloadLinkRef.nativeElement.click();
    })
  }
}
