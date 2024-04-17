import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavlinksComponent } from './navlinks/navlinks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  private readonly sidenavTriggerWidth: number = 1020;
  private scrollEventHandlers: { [key: string]: EventListener } = {};

  title = 'portfolio';
  viewportWidth!: number;
  viewportHeight!: number;
  isDrawerActive!: boolean;
  navContactLinkRef!: ElementRef<HTMLAnchorElement>;
  navResumeLinkRef!: ElementRef<HTMLAnchorElement>;
  sectionMinHeight: number = 0;

  @ViewChild('drawer', { read: MatDrawer })
  drawer?: MatDrawer;

  @ViewChild(NavlinksComponent)
  navlinksComponent!: NavlinksComponent

  @ViewChild('nav', { read: ElementRef })
  navRef!: ElementRef<HTMLElement>

  @ViewChild('sideNavContent', { read: ElementRef })
  sideNavContentRef!: ElementRef<HTMLElement>

  @ViewChildren('section', { read: ElementRef })
  sectionRefs!: QueryList<ElementRef<HTMLElement>>

  private toggleDrawerActivateState(): void {
    this.viewportWidth = window.innerWidth;
    this.viewportHeight = window.innerHeight;
    this.isDrawerActive = this.viewportWidth <= this.sidenavTriggerWidth;
  }

  private resizeSectionElements() {
    let navHeight = this.navRef.nativeElement.offsetHeight;
    this.sectionRefs.forEach(sectionRef => {
      let style = window.getComputedStyle(this.sideNavContentRef.nativeElement);
      let marginY = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      this.sectionMinHeight = this.sideNavContentRef.nativeElement.offsetHeight + marginY - navHeight;
      sectionRef.nativeElement.style.minHeight = this.sectionMinHeight + 'px';
    })
  }

  private addNavLinkScrollEvent() {

    const navHeight = this.navRef.nativeElement.offsetHeight;
    const sideNavContent = this.sideNavContentRef.nativeElement;

    this.navlinksComponent.sectionLinkRefs.forEach(sectionLinkRef => {

      let sectionLink = sectionLinkRef.nativeElement;
      let href = sectionLink.getAttribute('href') as string;
      let section: HTMLElement | null = document.querySelector(href);

      // remove existing event listener, if any
      if (this.scrollEventHandlers[href]) {
        sectionLink.removeEventListener('click', this.scrollEventHandlers[href]);
        delete this.scrollEventHandlers[href];
      }

      if (!section) return;

      this.scrollEventHandlers[href] = (event: Event) => {
        event.preventDefault();

        let sectionPos = section!.getBoundingClientRect().top + sideNavContent.scrollTop;

        sideNavContent.scroll({
          top: sectionPos - navHeight,
          behavior: 'smooth'
        });
      };

      sectionLink.addEventListener('click', this.scrollEventHandlers[href]);
    });
  }

  ngOnInit(): void {
    this.toggleDrawerActivateState();
  }

  ngAfterViewInit(): void {
    this.resizeSectionElements();
    this.addNavLinkScrollEvent();
    this.navContactLinkRef = this.navlinksComponent.contactLinkRef;
    this.navResumeLinkRef = this.navlinksComponent.resumeLinkRef;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    this.toggleDrawerActivateState();
    this.resizeSectionElements();
    this.addNavLinkScrollEvent();
  }
}
