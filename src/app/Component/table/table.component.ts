import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MatIconModule } from '@angular/material/icon'; 
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorModule } from 'primeng/paginator'; 
// import { FileSaverModule } from 'ngx-filesaver';


interface Ticket {
  id: number;
  user: {
    name: string;
    phone: string;
  };
  ticketNumber: string;
  ticketValue: string;
  cinemas: string;
  peopleCount: number;
  purchaseCount: string;
  ticketLink: string;
  ticketName: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, MatIconModule, DropdownModule, TooltipModule, MatPaginatorModule, PaginatorModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  totalTickets = 100;
  filteredTickets: Ticket[] = [];
  tickets: Ticket[] = [
    {
      id: 1,
      user: { name: 'محمد محمود', phone: '0123456789' },
      ticketNumber: 'C-101',
      ticketValue: '$50',
      cinemas: 'سينما مصر، مول العرب، ريع الخطاب، سرايا النخيل',
      peopleCount: 1,
      purchaseCount: 'مرة واحدة',
      ticketLink: 'path-to-pdf-file',
      ticketName: 'تذكرة رقم 45'
    },
    {
      id: 2,
      user: { name: 'أحمد علي', phone: '0123456789' },
      ticketNumber: 'C-101',
      ticketValue: '$60',
      cinemas: 'سينما مصر، مول العرب، ريع الخطاب، سرايا النخيل',
      peopleCount: 1,
      purchaseCount: 'مرة واحدة',
      ticketLink: 'path-to-pdf-file',
      ticketName: 'تذكرة رقم 45'
    },
    {
      id: 3,
      user: { name: 'أحمد محمود', phone: '0123456789' },
      ticketNumber: 'C-101',
      ticketValue: '$70',
      cinemas: 'سينما مصر، مول العرب، ريع الخطاب، سرايا النخيل',
      peopleCount: 1,
      purchaseCount: 'مرة واحدة',
      ticketLink: 'path-to-pdf-file',
      ticketName: 'تذكرة رقم 45'
    },
    {
      id: 4,
      user: { name: 'أحمد سليمان', phone: '0123456789' },
      ticketNumber: 'C-101',
      ticketValue: '$40',
      cinemas: 'سينما مصر، مول العرب، ريع الخطاب، سرايا النخيل',
      peopleCount: 1,
      purchaseCount: 'مرة واحدة',
      ticketLink: 'path-to-pdf-file',
      ticketName: 'تذكرة رقم 45'
    }
  ];


  constructor() {
    this.filteredTickets = [...this.tickets];
  }

  filterTickets(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredTickets = this.tickets.filter(ticket =>
      ticket.ticketValue.toLowerCase().includes(query)
    );
  }

  sortTickets(order: string) {
    this.filteredTickets.sort((a, b) => {
      const valueA = parseFloat(a.ticketValue.replace('$', ''));
      const valueB = parseFloat(b.ticketValue.replace('$', ''));
      
      if (order === 'asc') {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    });
  }
}
