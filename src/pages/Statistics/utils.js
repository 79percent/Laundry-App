import { toString } from '../../utils';

export const defaultData = [];
for (let i = 1; i <= 31; i++) {
  defaultData.push({
    day: i,
    value: Math.round(Math.random() * 100),
  });
}

export const defaultCircleData1 = [
  {
    x: '1',
    y: 0,
  },
];
export const defaultCircleData2 = [
  {
    x: '1',
    y: 0,
  },
];

export const totalMoney = 5000;

export const lineChartParams = `
    var chart = new F2.Chart({
      id: 'mountNode',
      pixelRatio: window.devicePixelRatio,
    });
    var defs = {
      day: {
        min: 15,
        max: 25,
      },
      value: {
        tickCount: 5,
      },
    };
    chart.axis('day', {
      label: function label(text, index, total) {
        var cfg = {
          textAlign: 'center',
        };
        if (index === 0) {
          cfg.textAlign = 'start';
        }
        if (index > 0 && index === total - 1) {
          cfg.textAlign = 'end';
        }
        return cfg;
      },
    });
    chart.source(${toString(defaultData)}, defs);
    chart.tooltip({
      showCrosshairs: true,
    });
    chart
      .line()
      .position('day*value')
      .shape('smooth')
      .color('l(0) 0:#F2C587 0.5:#ED7973 1:#8659AF');
    chart
      .area()
      .position('day*value')
      .shape('smooth')
      .color('l(0) 0:#F2C587 0.5:#ED7973 1:#8659AF');
    chart.interaction('pan');
    chart.legend({
      custom: 'true',
      items: [
        {
          name: '月订单支付',
        },
      ],
      nameStyle: {
        fill: '#000', // 文本的颜色
        fontSize: 20, // 文本大小
      },
      align: 'left',
      itemWidth: null,
    });
    chart.render();
  `;

export const circleChartParams1 = `
    var Shape = F2.Shape;
    var G = F2.G;
    var Util = F2.Util;
    var Global = F2.Global;
    var Vector2 = G.Vector2;
    Global.colors = ['#52A0FF'];
    Shape.registerShape('interval', 'tick', {
      draw: function draw(cfg, container) {
        var points = this.parsePoints(cfg.points);
        var style = Util.mix(
          {
            stroke: cfg.color,
          },
          Global.shape.interval,
          cfg.style
        );
        if (cfg.isInCircle) {
          var newPoints = points.slice(0);
          if (this._coord.transposed) {
            newPoints = [points[0], points[3], points[2], points[1]];
          }

          var _cfg$center = cfg.center,
            x = _cfg$center.x,
            y = _cfg$center.y;

          var v = [1, 0];
          var v0 = [newPoints[0].x - x, newPoints[0].y - y];
          var v1 = [newPoints[1].x - x, newPoints[1].y - y];
          var v2 = [newPoints[2].x - x, newPoints[2].y - y];

          var startAngle = Vector2.angleTo(v, v1);
          var endAngle = Vector2.angleTo(v, v2);
          var r0 = Vector2.length(v0);
          var r = Vector2.length(v1);

          if (startAngle >= 1.5 * Math.PI) {
            startAngle = startAngle - 2 * Math.PI;
          }

          if (endAngle >= 1.5 * Math.PI) {
            endAngle = endAngle - 2 * Math.PI;
          }

          var lineWidth = r - r0;
          var newRadius = r - lineWidth / 2;

          return container.addShape('Arc', {
            className: 'interval',
            attrs: Util.mix(
              {
                x: x,
                y: y,
                startAngle: startAngle,
                endAngle: endAngle,
                r: newRadius,
                lineWidth: lineWidth,
                lineCap: 'round',
              },
              style
            ),
          });
        }
      },
    });
    var chart = new F2.Chart({
      id: 'mountNode',
      pixelRatio: window.devicePixelRatio,
    });
    chart.source(${toString(defaultCircleData1)}, {
      y: {
        max: 100,
        min: 0,
      },
    });
    chart.axis(false); // hide all axis
    chart.tooltip(false); // hide tooltip
    chart.coord('polar', {
      transposed: true,
      innerRadius: 0.8,
      radius: 0.85,
    }); // set polar coordinate

    chart.guide().arc({
      start: [0, 0],
      end: [1, 99.98],
      top: false,
      style: {
        lineWidth: 10,
        stroke: '#ccc',
      },
    }); // draw a cricle
    chart.guide().html({
      position: ['50%', '50%'],
      html:
        '<p id="number" style="font-size: 24px;margin: 0;margin-left: -20px;color: #52A0FF;">￥0.00</p>',
    }); // draw a text
    chart
      .interval()
      .position('x*y')
      .size(10)
      .shape('tick')
      .animate({
        appear: {
          duration: 1200,
          easing: 'cubicIn',
          animation: function animation(shape, animateCfg) {
            var startAngle = shape.attr('startAngle');
            var endAngle = shape.attr('endAngle');
            shape.attr('endAngle', startAngle);
            shape
              .animate()
              .to(
                Util.mix(
                  {
                    attrs: {
                      endAngle: endAngle,
                    },
                  },
                  animateCfg
                )
              )
              .onUpdate(function (frame) {
                $('#number').text('￥' + parseFloat(frame * ${totalMoney}).toFixed(2));
              });
          },
        },
      });
    chart.render();
  `;
export const circleChartParams2 = `
    var Shape = F2.Shape;
    var G = F2.G;
    var Util = F2.Util;
    var Global = F2.Global;
    var Vector2 = G.Vector2;
    Global.colors = ['#4EC67A'];
    Shape.registerShape('interval', 'tick', {
      draw: function draw(cfg, container) {
        var points = this.parsePoints(cfg.points);
        var style = Util.mix(
          {
            stroke: cfg.color,
          },
          Global.shape.interval,
          cfg.style
        );
        if (cfg.isInCircle) {
          var newPoints = points.slice(0);
          if (this._coord.transposed) {
            newPoints = [points[0], points[3], points[2], points[1]];
          }

          var _cfg$center = cfg.center,
            x = _cfg$center.x,
            y = _cfg$center.y;

          var v = [1, 0];
          var v0 = [newPoints[0].x - x, newPoints[0].y - y];
          var v1 = [newPoints[1].x - x, newPoints[1].y - y];
          var v2 = [newPoints[2].x - x, newPoints[2].y - y];

          var startAngle = Vector2.angleTo(v, v1);
          var endAngle = Vector2.angleTo(v, v2);
          var r0 = Vector2.length(v0);
          var r = Vector2.length(v1);

          if (startAngle >= 1.5 * Math.PI) {
            startAngle = startAngle - 2 * Math.PI;
          }

          if (endAngle >= 1.5 * Math.PI) {
            endAngle = endAngle - 2 * Math.PI;
          }

          var lineWidth = r - r0;
          var newRadius = r - lineWidth / 2;

          return container.addShape('Arc', {
            className: 'interval',
            attrs: Util.mix(
              {
                x: x,
                y: y,
                startAngle: startAngle,
                endAngle: endAngle,
                r: newRadius,
                lineWidth: lineWidth,
                lineCap: 'round',
              },
              style
            ),
          });
        }
      },
    });
    var chart = new F2.Chart({
      id: 'mountNode',
      pixelRatio: window.devicePixelRatio,
    });
    chart.source(${toString(defaultCircleData2)}, {
      y: {
        max: 100,
        min: 0,
      },
    });
    chart.axis(false); // hide all axis
    chart.tooltip(false); // hide tooltip
    chart.coord('polar', {
      transposed: true,
      innerRadius: 0.8,
      radius: 0.85,
    }); // set polar coordinate

    chart.guide().arc({
      start: [0, 0],
      end: [1, 99.98],
      top: false,
      style: {
        lineWidth: 10,
        stroke: '#ccc',
      },
    }); // draw a cricle
    chart.guide().html({
      position: ['50%', '50%'],
      html:
      '<p id="number" style="font-size: 24px;margin: 0;margin-left: -20px;color: #4EC67A;">￥0.00</p>',
    }); // draw a text
    chart
      .interval()
      .position('x*y')
      .size(10)
      .shape('tick')
      .animate({
        appear: {
          duration: 1200,
          easing: 'cubicIn',
          animation: function animation(shape, animateCfg) {
            var startAngle = shape.attr('startAngle');
            var endAngle = shape.attr('endAngle');
            shape.attr('endAngle', startAngle);
            shape
              .animate()
              .to(
                Util.mix(
                  {
                    attrs: {
                      endAngle: endAngle,
                    },
                  },
                  animateCfg
                )
              )
              .onUpdate(function (frame) {
                $('#number').text('￥' + parseFloat(frame * ${totalMoney}).toFixed(2));
              });
          },
        },
      });
    chart.render();
  `;

export const getUpdateParams = y => `
    $('#number').text('￥' + parseFloat(${(y / 100) * totalMoney}).toFixed(2));
    `;

export const footerDataArr = [
  {
    key: 'a',
    children: [
      {
        key: 'a1',
        label: '交易金额',
        value: '￥150.00'
      },
      {
        key: 'a2',
        label: '交易笔数',
        value: '12笔'
      },
    ]
  },
  {
    key: 'b',
    children: [
      {
        key: 'b1',
        label: '交易金额',
        value: '￥231.00'
      },
      {
        key: 'b2',
        label: '交易笔数',
        value: '12笔'
      },
    ]
  },
]