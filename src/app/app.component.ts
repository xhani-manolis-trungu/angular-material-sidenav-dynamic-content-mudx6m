import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

  @ViewChild('panel', { static: true }) private sidePanel: MatSidenav;
  @ViewChild('content', { static: true, read: ViewContainerRef }) private vcf: ViewContainerRef;

  constructor(private breakpointObserver: BreakpointObserver, private sidenavService: SidenavService) {}

  ngOnInit() {
    this.sidenavService.setPanel(this.sidePanel);
    this.sidenavService.setContentVcf(this.vcf);
  }
}
