import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  phone: number;
  email: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Nguyễn Văn A', phone: 123456789, email: 'example@email.com' },
  { position: 2, name: 'Nguyễn Văn B', phone: 123456789, email: 'example@email.com' },
  { position: 3, name: 'Nguyễn Văn C', phone: 123456789, email: 'example@email.com' },
  { position: 4, name: 'Nguyễn Văn D', phone: 123456789, email: 'example@email.com' },
  { position: 5, name: 'Nguyễn Văn E', phone: 123456789, email: 'example@email.com' },
  { position: 6, name: 'Nguyễn Văn F', phone: 123456789, email: 'example@email.com' },
  { position: 7, name: 'Nguyễn Văn A', phone: 123456789, email: 'example@email.com' },
  { position: 8, name: 'Nguyễn Văn G', phone: 123456789, email: 'example@email.com' },
  { position: 9, name: 'Nguyễn Văn H', phone: 123456789, email: 'example@email.com' },
  { position: 10, name: 'Nguyễn Văn K', phone: 123456789, email: 'example@email.com' },
  { position: 11, name: 'Nguyễn Văn Z', phone: 123456789, email: 'example@email.com' },
  { position: 12, name: 'Nguyễn Văn X', phone: 123456789, email: 'example@email.com' },
  { position: 13, name: 'Nguyễn Văn C', phone: 123456789, email: 'example@email.com' },
  { position: 14, name: 'Nguyễn Văn V', phone: 123456789, email: 'example@email.com' },
  { position: 15, name: 'Nguyễn Văn N', phone: 123456789, email: 'example@email.com' },
  { position: 16, name: 'Nguyễn Văn M', phone: 123456789, email: 'example@email.com' },
  { position: 17, name: 'Nguyễn Văn O', phone: 123456789, email: 'example@email.com' },
  { position: 18, name: 'Nguyễn Văn P', phone: 123456789, email: 'example@email.com' },
  { position: 19, name: 'Nguyễn Văn Q', phone: 123456789, email: 'example@email.com' },
  { position: 20, name: 'Nguyễn Văn R', phone: 123456789, email: 'example@email.com' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['position', 'name', 'phone', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
