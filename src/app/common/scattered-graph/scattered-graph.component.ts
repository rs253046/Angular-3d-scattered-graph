import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
declare const Plotly;

@Component({
  selector: 'scattered-graph',
  templateUrl: './scattered-graph.component.html',
  styleUrls: ['./scattered-graph.component.css']
})
export class ScatteredGraphComponent implements OnInit, AfterViewInit {
  @Input() identifier = 'scattered-graph';
  @Input() data = [{
    opacity: 0.4,
    type: 'scatter3d',
    x: [12, 34, 34],
    y: [32, 43, 12],
    z: [1, 1, 1],
  }];
  @Input() width = 230;
  @Input() height = 230;

  constructor() {

  }

  ngAfterViewInit() {
    const { identifier, data, getLayout } = this;
    this.drawGraph(identifier, data, this.getLayout());
    var elem = document.querySelector('.modebar');
    elem.parentNode.removeChild(elem);
  }

  drawGraph(...args) {
    Plotly.newPlot(...args);
  }

  getLayout() {
    return {
      scene: {
        autosize: false,
        width: 550,
        height: 500,
        margin: {
          l: 0,
          r: 0,
          b: 50,
          t: 50,
          pad: 4
        },
        xaxis: this.getXAxis(),
        yaxis: this.getYAxis(),
        zaxis: this.getZAxis()
      }
    };
  }

  getXAxis() {
    return {
      title: 'X AXIS TITLE',
      ticktext: ['H20', 'C02', 'O2'],
      tickvals: [-30, -45, -65, -10]
    }
  }

  getYAxis() {
    return {
      title: 'Y AXIS TITLE',
      nticks: 5,
      tickfont:
        {
          color: 'green',
          family: 'Old Standard TT, serif',
          size: 14
        },
      ticksuffix: '$'
    }
  }

  getZAxis() {
    return {
      title: 'Z AXIS TITLE',
      ticks: 'outside',
      tick0: 0,
      tickwidth: 4
    }
  }

  prepareData() {
    return this.data;
  }

  ngOnInit() {

  }
}
