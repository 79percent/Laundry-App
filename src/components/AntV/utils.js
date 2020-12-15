/* eslint-disable import/prefer-default-export */
export const defaultJavaScriptString = `
var Shape = F2.Shape;
var G = F2.G;
var Util = F2.Util;
var Global = F2.Global;
var Vector2 = G.Vector2;

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

var data = [
  {
    x: '1',
    y: 85,
  },
];
var chart = new F2.Chart({
  id: 'mountNode',
  pixelRatio: window.devicePixelRatio,
});
chart.source(data, {
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
    lineWidth: 15,
    stroke: '#ccc',
  },
}); // draw a cricle
chart.guide().html({
  position: ['50%', '50%'],
  html:
    '<p id="number" style="font-size: 32px;margin: 0;color: #1890ff;">0%</p>',
}); // draw a text
chart
  .interval()
  .position('x*y')
  .size(15)
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
            $('#number').text(parseInt(frame * 85) + '%');
          });
      },
    },
  });
chart.render();
`;
