import { Component, OnInit, ContentChildren, QueryList, TemplateRef, Input } from '@angular/core';
import { ColumnSelectorDirective } from '../column-selector.directive';

@Component({
  selector: 'app-gen-table',
  templateUrl: './gen-table.component.html',
  styleUrls: ['./gen-table.component.scss']
})
export class GenTableComponent implements OnInit {

  @ContentChildren(ColumnSelectorDirective, { read: TemplateRef })
  columnSelector: QueryList<ColumnSelectorDirective>;

  @Input()
  data: any[];

  @Input()
  headers: string[]

  constructor() { }

  cols = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
  ];

  ngOnInit() {
  }

}
