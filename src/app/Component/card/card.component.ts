import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { Clipboard } from '@angular/cdk/clipboard';
import { TooltipModule } from 'primeng/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [QRCodeModule,MatIconModule ,TooltipModule,FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  linkToCopy: string = 'www.tazkty.com/473847';

  constructor(private clipboard: Clipboard) {}

  copyLink() {
    this.clipboard.copy(this.linkToCopy);
    alert('Link copied to clipboard: ' + this.linkToCopy);
  }
}
