import { Component, OnInit ,Input ,Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'finished',
  templateUrl: './testbinding.component.html',
  styleUrls: ['./testbinding.component.css']
})
export class TestbindingComponent implements OnInit {

  @Input() isFav;
  @Output() change = new EventEmitter();
  constructor() { }

  onclick(){
    this.change.emit(this.isFav+"hello");
  }

  ngOnInit() {
  }

}
