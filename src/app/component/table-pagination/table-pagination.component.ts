import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'table-pagination',
  styleUrls: ['table-pagination.component.scss'],
  templateUrl: 'table-pagination.component.html',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class TablePaginationComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'rut', 'email'];
  dataSource = new MatTableDataSource<UserElement>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() data: UserElement[] = [];

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<UserElement>(this.data);
    this.dataSource.paginator = this.paginator;
  }
}

export interface UserElement {
  name: string;
  rut: number;
  email: string;
}
