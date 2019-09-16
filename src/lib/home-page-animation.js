import createjs from 'createjs';

let canvas,
  stage,
  exportRoot,
  anim_container,
  dom_overlay_container,
  fnStartAnimation;

export const init = (cjs = createjs || {}, an = {}) => {
  let p; // shortcut to reference prototypes
  let lib = {};
  const ss = {};
  const img = {};
  lib.ssMetadata = [
    {
      name: 'TF_CloudAnimation_2_atlas_',
      frames: [
        [1025, 35, 12, 12],
        [1025, 0, 33, 33],
        [1072, 0, 5, 1093],
        [0, 649, 534, 309],
        [536, 649, 534, 309],
        [0, 0, 1023, 647]
      ]
    }
  ];
  // symbols:
  (lib.CachedTexturedBitmap_2 = function() {
    this.initialize(ss['TF_CloudAnimation_2_atlas_']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();
  (lib.CachedTexturedBitmap_3 = function() {
    this.initialize(ss['TF_CloudAnimation_2_atlas_']);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();
  (lib.CachedTexturedBitmap_4 = function() {
    this.initialize(ss['TF_CloudAnimation_2_atlas_']);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();
  (lib.Layer0 = function() {
    this.initialize(ss['TF_CloudAnimation_2_atlas_']);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();
  (lib.Layer0_0 = function() {
    this.initialize(ss['TF_CloudAnimation_2_atlas_']);
    this.gotoAndStop(4);
  }).prototype = p = new cjs.Sprite();
  (lib.Layer0_1 = function() {
    this.initialize(ss['TF_CloudAnimation_2_atlas_']);
    this.gotoAndStop(5);
  }).prototype = p = new cjs.Sprite();
  // helper functions:
  function mc_symbol_clone() {
    const clone = this._cloneProps(
      new this.constructor(this.mode, this.startPosition, this.loop)
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }
  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    const prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }
  (lib.ScematicLine = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Layer_1
    this.instance = new lib.CachedTexturedBitmap_4();
    this.instance.parent = this;
    this.instance.setTransform(-0.35, -0.35, 0.1491, 0.1491);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.3, -0.3, 0.7, 162.9);
  (lib.DotRing = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Layer_1
    this.instance = new lib.CachedTexturedBitmap_3();
    this.instance.parent = this;
    this.instance.setTransform(-0.1, -0.1, 0.1197, 0.1197);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.1, -0.1, 4, 4);
  (lib.Cloud3 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Layer_1
    this.instance = new lib.Layer0_1();
    this.instance.parent = this;
    this.instance.setTransform(0, 0, 0.1258, 0.1258);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Cloud3,
    new cjs.Rectangle(0, 0, 128.7, 81.4),
    null
  );
  (lib.Cloud2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Layer_1
    this.instance = new lib.Layer0_0();
    this.instance.parent = this;
    this.instance.setTransform(287.15, 166.1, 0.5378, 0.5378, 180);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Cloud2,
    new cjs.Rectangle(0, -0.1, 287.2, 166.2),
    null
  );
  (lib.Cloud1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Layer_1
    this.instance = new lib.Layer0();
    this.instance.parent = this;
    this.instance.setTransform(0, 0, 0.7185, 0.7185);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Cloud1,
    new cjs.Rectangle(0, 0, 383.7, 222),
    null
  );
  (lib.Dot = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Layer_2
    this.instance = new lib.DotRing('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(3.7, 3.9, 2.7838, 2.7838, 0, 0, 0, 1.8, 1.9);
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({ alpha: 0.5 }, 0)
        .wait(1)
    );
    // Dot
    this.instance_1 = new lib.CachedTexturedBitmap_2();
    this.instance_1.parent = this;
    this.instance_1.setTransform(1.8, 1.75, 0.3333, 0.3333);
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.5, -1.6, 11, 11);
  (lib.CloudFormation = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Grow2
    this.instance = new lib.Cloud1();
    this.instance.parent = this;
    this.instance.setTransform(
      141.55,
      56.25,
      0.651,
      0.651,
      13.2805,
      0,
      0,
      191.7,
      111
    );
    this.instance.alpha = 0;
    this.instance._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(19)
        .to({ _off: false }, 0)
        .to(
          {
            regY: 110.9,
            scaleX: 0.6998,
            scaleY: 0.6998,
            rotation: 13.2812,
            y: 56.3,
            alpha: 1
          },
          28
        )
        .to(
          {
            regY: 110.8,
            scaleX: 0.75,
            scaleY: 0.75,
            rotation: 13.28,
            x: 141.65,
            y: 56.25,
            alpha: 0
          },
          31
        )
        .to({ _off: true }, 1)
        .wait(1)
    );
    // Grow
    this.instance_1 = new lib.Cloud1();
    this.instance_1.parent = this;
    this.instance_1.setTransform(
      91.7,
      93.8,
      0.651,
      0.651,
      -20.1994,
      0,
      0,
      191.7,
      111
    );
    this.instance_1.alpha = 0;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to(
          {
            regY: 110.9,
            scaleX: 0.6998,
            scaleY: 0.6998,
            rotation: -20.1987,
            x: 91.75,
            y: 93.85,
            alpha: 1
          },
          28
        )
        .to(
          {
            regX: 191.8,
            regY: 110.8,
            scaleX: 0.75,
            scaleY: 0.75,
            rotation: -20.199,
            x: 91.8,
            y: 93.75,
            alpha: 0
          },
          31
        )
        .to({ _off: true }, 1)
        .wait(20)
    );
    // Shink2
    this.instance_2 = new lib.Cloud2();
    this.instance_2.parent = this;
    this.instance_2.setTransform(
      94.1,
      112.55,
      1.0757,
      1.0757,
      13.2797,
      0,
      0,
      143.5,
      83
    );
    this.instance_2.alpha = 0;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to(
          {
            scaleX: 0.9845,
            scaleY: 0.9845,
            rotation: 13.2796,
            x: 94.05,
            alpha: 1
          },
          32
        )
        .to(
          {
            regX: 143.8,
            scaleX: 0.891,
            scaleY: 0.891,
            rotation: 13.2802,
            x: 94.25,
            alpha: 0
          },
          28
        )
        .wait(20)
    );
    // Shink
    this.instance_3 = new lib.Cloud2();
    this.instance_3.parent = this;
    this.instance_3.setTransform(
      150.65,
      79.55,
      1.0758,
      1.0758,
      -20.1995,
      0,
      0,
      143.5,
      83
    );
    this.instance_3.alpha = 0;
    this.instance_3._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(19)
        .to({ _off: false }, 0)
        .to(
          {
            regX: 143.6,
            scaleX: 0.9846,
            scaleY: 0.9846,
            rotation: -20.1992,
            alpha: 1
          },
          32
        )
        .to(
          {
            regX: 143.8,
            scaleX: 0.8911,
            scaleY: 0.8911,
            rotation: -20.1991,
            x: 150.75,
            y: 79.4,
            alpha: 0
          },
          28
        )
        .wait(1)
    );
    // Front2
    this.instance_4 = new lib.Cloud2();
    this.instance_4.parent = this;
    this.instance_4.setTransform(149.1, 131.2, 1, 1, 0, 0, 0, 143.6, 83);
    this.instance_4.alpha = 0;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .to({ alpha: 1 }, 39)
        .to({ alpha: 0 }, 40)
        .wait(1)
    );
    // Front1
    this.instance_5 = new lib.Cloud1();
    this.instance_5.parent = this;
    this.instance_5.setTransform(104.85, 86.95, 1, 1, 0, 0, 0, 191.8, 111);
    this.instance_5.alpha = 0.5;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .to({ alpha: 0.0391 }, 39)
        .to({ alpha: 0.5 }, 40)
        .wait(1)
    );
    // Middle1
    this.instance_6 = new lib.Cloud3();
    this.instance_6.parent = this;
    this.instance_6.setTransform(
      103.35,
      57.8,
      2.0061,
      2.0061,
      0,
      0,
      0,
      64.3,
      40.8
    );
    this.instance_6.alpha = 0.0898;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .to({ alpha: 1 }, 39)
        .to({ alpha: 0.1016 }, 40)
        .wait(1)
    );
    // Middle2
    this.instance_7 = new lib.Cloud3();
    this.instance_7.parent = this;
    this.instance_7.setTransform(
      128.45,
      133.5,
      2.0061,
      2.0061,
      0,
      0,
      180,
      64.3,
      40.8
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .to({ alpha: 0.1719 }, 39)
        .to({ alpha: 1 }, 40)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-86.9, -57.7, 413.4, 292.8);
  (lib.CloudBuilder = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Dots5
    this.instance = new lib.Dot();
    this.instance.parent = this;
    this.instance.setTransform(-54.15, 83, 1, 1, 0, 0, 0, 3.9, 3.7);
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ regY: 3.8, x: 163, y: 176.45 }, 19, cjs.Ease.quadInOut)
        .to({ x: 113.75, y: 169.45 }, 15, cjs.Ease.quadInOut)
        .to({ regY: 3.7, x: 17, y: 159.35 }, 25, cjs.Ease.quadInOut)
        .to({ x: -54.15, y: 83 }, 20, cjs.Ease.quadInOut)
        .wait(1)
    );
    // Dots4
    this.instance_1 = new lib.Dot();
    this.instance_1.parent = this;
    this.instance_1.setTransform(21.95, 164.65, 1, 1, 0, 0, 0, 3.9, 3.7);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({ x: 54.3, y: 145.8 }, 19, cjs.Ease.quadInOut)
        .to({ x: 145.35, y: 82.6 }, 15, cjs.Ease.quadInOut)
        .to({ x: 87.7, y: 177.65 }, 25, cjs.Ease.quadInOut)
        .to({ x: 21.95, y: 164.65 }, 20, cjs.Ease.quadInOut)
        .wait(1)
    );
    // Dots3
    this.instance_2 = new lib.Dot();
    this.instance_2.parent = this;
    this.instance_2.setTransform(120.3, 95.8, 1, 1, 0, 0, 0, 3.9, 3.7);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to({ x: -13.1, y: 84.9 }, 19, cjs.Ease.quadInOut)
        .to({ x: -24.3, y: 90.9 }, 15, cjs.Ease.quadInOut)
        .to({ x: 185.25, y: 142.75 }, 25, cjs.Ease.quadInOut)
        .to({ x: 120.3, y: 95.8 }, 20, cjs.Ease.quadInOut)
        .wait(1)
    );
    // Dots2
    this.instance_3 = new lib.Dot();
    this.instance_3.parent = this;
    this.instance_3.setTransform(265.4, 78.3, 1, 1, 0, 0, 0, 3.9, 3.7);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .to({ x: 265, y: 127.4 }, 19, cjs.Ease.quadInOut)
        .to({ x: 256, y: 70.5 }, 15, cjs.Ease.quadInOut)
        .to({ y: 39.35 }, 25, cjs.Ease.quadInOut)
        .to({ x: 265.4, y: 78.3 }, 20, cjs.Ease.quadInOut)
        .wait(1)
    );
    // Dots1
    this.instance_4 = new lib.Dot();
    this.instance_4.parent = this;
    this.instance_4.setTransform(49.6, 16, 1, 1, 0, 0, 0, 3.9, 3.7);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .to({ x: 128.2, y: 18.05 }, 19, cjs.Ease.quadInOut)
        .to({ x: 50.45, y: 3.7 }, 15, cjs.Ease.quadInOut)
        .to({ x: 90.55 }, 25, cjs.Ease.quadInOut)
        .to({ x: 49.6, y: 16 }, 20, cjs.Ease.quadInOut)
        .wait(1)
    );
    // Line8
    this.instance_5 = new lib.ScematicLine('synched', 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(
      49.65,
      16.25,
      1,
      0.9339,
      10.483,
      0,
      0,
      0.2,
      0.3
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .to(
          {
            regX: 0.3,
            regY: 0.4,
            scaleY: 0.9027,
            rotation: 30.1987,
            x: 127.95,
            y: 19.75
          },
          19,
          cjs.Ease.quadInOut
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.0524,
            scaleY: 0.8949,
            rotation: 29.604,
            x: 91.2,
            y: 82.2
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.176,
            scaleY: 0.8764,
            rotation: 28.2008,
            x: 91.5,
            y: 81.35
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.3817,
            scaleY: 0.8457,
            rotation: 25.8646,
            x: 91.95,
            y: 79.75
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.6,
            regY: 0.4,
            scaleX: 1.6794,
            scaleY: 0.8012,
            rotation: 22.4839,
            x: 117.65,
            y: 17.7
          },
          0
        )
        .to(
          {
            regX: 0.7,
            scaleX: 1.5586,
            scaleY: 0.7512,
            rotation: 17.5141,
            x: 111.5,
            y: 16.45
          },
          1
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.4131,
            scaleY: 0.7043,
            rotation: 9.4489,
            x: 93.35,
            y: 70.65
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.4,
            regY: 0.5,
            scaleX: 1.2496,
            scaleY: 0.6517,
            rotation: 0.3824,
            x: 94.85,
            y: 12.95
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.1934,
            scaleY: 0.6414,
            rotation: -11.9431,
            x: 95.65,
            y: 61.6
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.6,
            regY: 0.6,
            scaleX: 1.1408,
            scaleY: 0.6317,
            rotation: -23.4653,
            x: 76.75,
            y: 9.05
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.0968,
            scaleY: 0.6598,
            rotation: -32.2407,
            x: 96.7,
            y: 52.75
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.4,
            regY: 0.6,
            scaleX: 1.0614,
            scaleY: 0.6823,
            rotation: -39.2996,
            x: 62.65,
            y: 6.35
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.0352,
            scaleY: 0.7124,
            rotation: -43.8694,
            x: 97.35,
            y: 47
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.0169,
            scaleY: 0.7335,
            rotation: -47.0734,
            x: 97.55,
            y: 45.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.0054,
            scaleY: 0.7466,
            rotation: -49.0717,
            x: 97.7,
            y: 43.9
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.4,
            regY: 0.4,
            scaleX: 1,
            scaleY: 0.7529,
            rotation: -50.0249,
            x: 51.65,
            y: 4.05
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9999,
            scaleY: 0.7531,
            rotation: -49.7297,
            x: 97.9,
            y: 43.6
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 0.7534,
            rotation: -49.1315,
            x: 97.95,
            y: 44.1
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.9996, scaleY: 0.7539, rotation: -48.2014, y: 44.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.9993, scaleY: 0.7546, rotation: -46.9092, y: 45.9 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.9989,
            scaleY: 0.7555,
            rotation: -45.2252,
            x: 97.85,
            y: 47.25
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9985,
            scaleY: 0.7566,
            rotation: -43.1236,
            x: 97.75,
            y: 48.85
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.4,
            regY: 0.5,
            scaleX: 0.9979,
            scaleY: 0.758,
            rotation: -40.5868,
            x: 58,
            y: 4.1
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9976,
            scaleY: 0.7634,
            rotation: -37.5726,
            x: 97.15,
            y: 53.05
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9973,
            scaleY: 0.7695,
            rotation: -34.1361,
            x: 96.65,
            y: 55.65
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.4,
            regY: 0.7,
            scaleX: 0.9968,
            scaleY: 0.7762,
            rotation: -30.3304,
            x: 64.7,
            y: 4.15
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9975,
            scaleY: 0.7988,
            rotation: -26.2791,
            x: 95.4,
            y: 61.9
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9981,
            scaleY: 0.8222,
            rotation: -22.0723,
            x: 94.45,
            y: 65.5
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.4,
            regY: 0.6,
            scaleX: 0.9988,
            scaleY: 0.8457,
            rotation: -17.8511,
            x: 72.7,
            y: 4.05
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.1234,
            scaleY: 0.8781,
            rotation: -14.613,
            x: 92.85,
            y: 72.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.2405,
            scaleY: 0.9085,
            rotation: -11.5687,
            x: 92.25,
            y: 75.7
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.3476,
            scaleY: 0.9363,
            rotation: -8.7868,
            x: 91.5,
            y: 78.5
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.5,
            regY: 0.7,
            scaleX: 1.4429,
            scaleY: 0.9611,
            rotation: -6.3086,
            x: 82.75,
            y: 3.95
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.3388,
            scaleY: 0.9881,
            rotation: -4.709,
            x: 90.45,
            y: 83.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.2502,
            scaleY: 1.011,
            rotation: -3.3477,
            x: 90.25,
            y: 85.05
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1765,
            scaleY: 1.0301,
            rotation: -2.2163,
            x: 90,
            y: 86.65
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.117,
            scaleY: 1.0455,
            rotation: -1.3018,
            x: 89.75,
            y: 87.85
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.0706,
            scaleY: 1.0575,
            rotation: -0.5889,
            x: 89.55,
            y: 88.8
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.0362,
            scaleY: 1.0664,
            rotation: -0.0619,
            x: 89.35,
            y: 89.55
          },
          0
        )
        .wait(1)
        .to(
          { scaleX: 1.013, scaleY: 1.0724, rotation: 0.2945, x: 89.25, y: 90 },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.5,
            regY: 0.6,
            scaleX: 1,
            scaleY: 1.0758,
            rotation: 0.4949,
            x: 90.45,
            y: 3.75
          },
          0
        )
        .to(
          {
            regX: 0.2,
            regY: 0.3,
            scaleY: 0.9339,
            rotation: 10.483,
            x: 49.65,
            y: 16.25
          },
          20,
          cjs.Ease.quadInOut
        )
        .wait(1)
    );
    // Line7
    this.instance_6 = new lib.ScematicLine('synched', 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(
      120.25,
      95.9,
      1,
      0.738,
      54.9509,
      0,
      0,
      -0.1,
      0.3
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9998,
            scaleY: 0.7321,
            rotation: 54.6016,
            x: 71.1,
            y: 130.15
          },
          0
        )
        .wait(1)
        .to(
          { scaleX: 0.9995, scaleY: 0.719, rotation: 53.8331, x: 70.3, y: 130 },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.999,
            scaleY: 0.6978,
            rotation: 52.593,
            x: 68.9,
            y: 129.75
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.1,
            regY: 0.2,
            scaleX: 0.9982,
            scaleY: 0.6677,
            rotation: 50.8288,
            x: 108.75,
            y: 95.1
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9979,
            scaleY: 0.6304,
            rotation: 47.484,
            x: 64.4,
            y: 128.9
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9976,
            scaleY: 0.5836,
            rotation: 43.2956,
            x: 61.35,
            y: 128.1
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.1,
            regY: 0.3,
            scaleX: 0.9973,
            scaleY: 0.5278,
            rotation: 38.3008,
            x: 83.85,
            y: 93
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9983,
            scaleY: 0.4774,
            rotation: 29.596,
            x: 53.45,
            y: 125.5
          },
          0
        )
        .wait(1)
        .to(
          {
            regY: 0.4,
            scaleX: 0.9995,
            scaleY: 0.4234,
            rotation: 20.2578,
            x: 60.5,
            y: 90.95
          },
          0
        )
        .wait(1)
        .to(
          {
            regY: 81.1,
            scaleX: 0.999,
            scaleY: 0.4103,
            rotation: 5.9401,
            x: 43.95,
            y: 122.9
          },
          0
        )
        .wait(1)
        .to(
          {
            regY: 0.9,
            scaleX: 0.9986,
            scaleY: 0.3978,
            rotation: -7.7307,
            x: 34.9,
            y: 89.05
          },
          0
        )
        .wait(1)
        .to(
          {
            regY: 81.1,
            scaleX: 0.9985,
            scaleY: 0.4262,
            rotation: -18.4908,
            x: 34.35,
            y: 120.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9984,
            scaleY: 0.4507,
            rotation: -27.7992,
            x: 30.55,
            y: 119.15
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.1,
            regY: 0.7,
            scaleY: 0.4711,
            rotation: -35.5319,
            x: 5.6,
            y: 86.5
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9989,
            scaleY: 0.5026,
            rotation: -39.8366,
            x: 24.8,
            y: 117.05
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9993,
            scaleY: 0.5267,
            rotation: -43.1238,
            x: 22.85,
            y: 116.55
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 0.544,
            rotation: -45.4841,
            x: 21.5,
            y: 116
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 0.5551,
            rotation: -47.0129,
            x: 20.65,
            y: 115.55
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.3,
            regY: 0.2,
            scaleX: 1,
            scaleY: 0.5609,
            rotation: -47.8005,
            x: -13.2,
            y: 84.95
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9998,
            scaleY: 0.5647,
            rotation: -48.613,
            x: 21.15,
            y: 115
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 0.5736,
            rotation: -50.5298,
            x: 22.4,
            y: 114.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9989,
            scaleY: 0.5885,
            rotation: -53.7212,
            x: 24.5,
            y: 113.45
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.4,
            regY: 0.2,
            scaleX: 0.998,
            scaleY: 0.61,
            rotation: -58.3395,
            x: -14.8,
            y: 86
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9982,
            scaleY: 0.6394,
            rotation: -62.8857,
            x: 30.5,
            y: 109.8
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9985,
            scaleY: 0.6752,
            rotation: -68.4466,
            x: 34.1,
            y: 106.9
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.4,
            regY: 0.2,
            scaleX: 0.9988,
            scaleY: 0.7155,
            rotation: -74.6979,
            x: -18.2,
            y: 88.1
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.999,
            scaleY: 0.7894,
            rotation: -79.0691,
            x: 43.15,
            y: 100.65
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9992,
            scaleY: 0.8584,
            rotation: -83.1553,
            x: 48,
            y: 97.55
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9994,
            scaleY: 0.9179,
            rotation: -86.6762,
            x: 52,
            y: 94.25
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.5,
            regY: 0.1,
            scaleX: 0.9995,
            scaleY: 0.9657,
            rotation: -89.5084,
            x: -23.1,
            y: 90.95
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9997,
            scaleY: 1.0019,
            rotation: -90.9103,
            x: 57.35,
            y: 89.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 1.0273,
            rotation: -91.8932,
            x: 58.85,
            y: 88.25
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 1.0431,
            rotation: -92.5063,
            x: 59.8,
            y: 87.45
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.4,
            regY: 0.2,
            scaleX: 1,
            scaleY: 1.0507,
            rotation: -92.7987,
            x: -24.8,
            y: 91.75
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleY: 1.0427,
            rotation: -92.7387,
            x: 60.5,
            y: 87.55
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 1.0264,
            rotation: -92.6171,
            x: 61.35,
            y: 88.3
          },
          0
        )
        .wait(1)
        .to({ scaleY: 1.0012, rotation: -92.428, x: 62.65, y: 89.5 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 0.9662,
            rotation: -92.1653,
            x: 64.4,
            y: 91.1
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 0.9206,
            rotation: -91.823,
            x: 66.65,
            y: 93.2
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9996,
            scaleY: 0.8636,
            rotation: -91.3957,
            x: 69.5,
            y: 95.7
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.4,
            regY: 0.3,
            scaleX: 0.9995,
            scaleY: 0.7948,
            rotation: -90.88,
            x: 8.65,
            y: 100
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9993,
            scaleY: 0.711,
            rotation: -89.6505,
            x: 76.6,
            y: 102.55
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.999,
            scaleY: 0.6153,
            rotation: -88.2488,
            x: 80.9,
            y: 106.65
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.6,
            regY: 0.5,
            scaleX: 0.9988,
            scaleY: 0.5095,
            rotation: -86.6965,
            x: 44.5,
            y: 108.95
          },
          0
        )
        .to(
          {
            regY: 0.6,
            scaleX: 0.9984,
            scaleY: 0.4038,
            rotation: -82.9354,
            x: 58.85,
            y: 112.5
          },
          1
        )
        .to(
          {
            regY: 0.7,
            scaleX: 0.998,
            scaleY: 0.2943,
            rotation: -76.2253,
            x: 73.6,
            y: 116.1
          },
          1
        )
        .to(
          {
            regX: -0.3,
            regY: 1.3,
            scaleX: 0.9996,
            scaleY: 0.185,
            rotation: -60.4767,
            x: 88.4,
            y: 119.5
          },
          1
        )
        .to(
          {
            regY: 1.4,
            scaleX: 0.9979,
            scaleY: 0.1157,
            rotation: -20.579,
            x: 103.35,
            y: 123.35
          },
          1
        )
        .to(
          {
            regX: -0.1,
            regY: 1.7,
            scaleX: 0.9971,
            scaleY: 0.1409,
            rotation: 31.5628,
            x: 117.7,
            y: 126.9
          },
          1
        )
        .to(
          {
            regX: -0.2,
            regY: 1.2,
            scaleX: 0.998,
            scaleY: 0.2259,
            rotation: 50.7659,
            x: 130.7,
            y: 129.9
          },
          1
        )
        .to(
          {
            regY: 1.1,
            scaleX: 0.9966,
            scaleY: 0.3121,
            rotation: 59.6099,
            x: 142.3,
            y: 132.75
          },
          1
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9975,
            scaleY: 0.3879,
            rotation: 62.972,
            x: 124.8,
            y: 149.5
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.1,
            regY: 1.3,
            scaleX: 0.9983,
            scaleY: 0.4523,
            rotation: 65.8334,
            x: 160.9,
            y: 137.4
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9988,
            scaleY: 0.5064,
            rotation: 67.2668,
            x: 130.75,
            y: 154.8
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9992,
            scaleY: 0.5501,
            rotation: 68.4255,
            x: 133,
            y: 156.75
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 0.5842,
            rotation: 69.3286,
            x: 134.65,
            y: 158.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 0.6094,
            rotation: 69.9962,
            x: 135.9,
            y: 159.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 0.6264,
            rotation: 70.4478,
            x: 136.8,
            y: 159.8
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.3,
            regY: 0.1,
            scaleX: 1,
            scaleY: 0.636,
            rotation: 70.7017,
            x: 185.15,
            y: 143.2
          },
          0
        )
        .to(
          {
            regX: -0.1,
            regY: 0.3,
            scaleY: 0.738,
            rotation: 54.9509,
            x: 120.25,
            y: 95.9
          },
          20,
          cjs.Ease.quadInOut
        )
        .wait(1)
    );
    // Line6
    this.instance_7 = new lib.ScematicLine('synched', 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(
      120.6,
      95.55,
      1,
      0.8958,
      -96.7776,
      0,
      0,
      -0.1,
      0.1
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleY: 0.9018,
            rotation: -96.6195,
            x: 192.15,
            y: 86.9
          },
          0
        )
        .wait(1)
        .to({ scaleY: 0.9149, rotation: -96.2716, x: 191.05, y: 87.1 }, 0)
        .wait(1)
        .to({ scaleY: 0.9362, rotation: -95.7103, x: 189.3, y: 87.35 }, 0)
        .wait(1)
        .to({ scaleY: 0.9665, rotation: -94.9117, x: 186.85, y: 87.8 }, 0)
        .wait(1)
        .to({ scaleY: 1.0064, rotation: -93.8561, x: 183.55, y: 88.5 }, 0)
        .wait(1)
        .to({ scaleY: 1.0565, rotation: -92.5341, x: 179.4, y: 89.55 }, 0)
        .wait(1)
        .to({ scaleY: 1.1162, rotation: -90.9577, x: 174.4, y: 91.05 }, 0)
        .wait(1)
        .to({ scaleY: 1.1839, rotation: -89.1705, x: 168.65, y: 93.05 }, 0)
        .wait(1)
        .to(
          {
            regX: -0.1,
            regY: 0.1,
            scaleX: 0.9999,
            scaleY: 1.2565,
            rotation: -87.2533,
            x: 60.7,
            y: 90.8
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1,
            scaleY: 1.3414,
            rotation: -86.1873,
            x: 155.85,
            y: 96.9
          },
          0
        )
        .wait(1)
        .to({ scaleY: 1.4224, rotation: -85.1695, x: 149.65, y: 98.35 }, 0)
        .wait(1)
        .to({ scaleY: 1.4958, rotation: -84.2476, x: 143.95, y: 99.9 }, 0)
        .wait(1)
        .to({ scaleY: 1.5593, rotation: -83.4501, x: 139.05, y: 101.35 }, 0)
        .wait(1)
        .to({ scaleY: 1.612, rotation: -82.7876, x: 134.85, y: 102.7 }, 0)
        .wait(1)
        .to({ scaleY: 1.6542, rotation: -82.2584, x: 131.6, y: 103.85 }, 0)
        .wait(1)
        .to({ scaleY: 1.6863, rotation: -81.8544, x: 129.05, y: 104.8 }, 0)
        .wait(1)
        .to({ scaleY: 1.7094, rotation: -81.5643, x: 127.2, y: 105.45 }, 0)
        .wait(1)
        .to({ scaleY: 1.7244, rotation: -81.3764, x: 125.95, y: 105.85 }, 0)
        .wait(1)
        .to(
          {
            regX: -0.2,
            regY: -0.1,
            scaleY: 1.7321,
            rotation: -81.2795,
            x: -13.35,
            y: 84.95
          },
          0
        )
        .to(
          { regX: -0.3, rotation: -94.2449, x: -24.95, y: 91.65 },
          15,
          cjs.Ease.quadInOut
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.0138,
            scaleY: 1.726,
            rotation: -94.3555,
            x: 115.8,
            y: 80.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.0419,
            scaleY: 1.7137,
            rotation: -94.5797,
            x: 116.95,
            y: 81
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.0856,
            scaleY: 1.6947,
            rotation: -94.9283,
            x: 118.6,
            y: 81.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1462,
            scaleY: 1.6681,
            rotation: -95.4126,
            x: 120.95,
            y: 81.3
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.2253,
            scaleY: 1.6336,
            rotation: -96.0437,
            x: 123.95,
            y: 81.6
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.3239,
            scaleY: 1.5905,
            rotation: -96.8314,
            x: 127.65,
            y: 82.05
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.5,
            regY: 0,
            scaleX: 1.4429,
            scaleY: 1.5384,
            rotation: -97.7822,
            x: 8.55,
            y: 100.1
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.384,
            scaleY: 1.4813,
            rotation: -99.2006,
            x: 137.6,
            y: 82.8
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.3168,
            scaleY: 1.4162,
            rotation: -100.8179,
            x: 143.8,
            y: 83.4
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.6,
            regY: 0.1,
            scaleX: 1.2424,
            scaleY: 1.3441,
            rotation: -102.6088,
            x: 44.6,
            y: 108.95
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.1632,
            scaleY: 1.2675,
            rotation: -105.451,
            x: 157.6,
            y: 84.3
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.081,
            scaleY: 1.1879,
            rotation: -108.4023,
            x: 164.75,
            y: 84.9
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.4,
            regY: 0.1,
            scaleX: 0.9984,
            scaleY: 1.108,
            rotation: -111.3638,
            x: 88.55,
            y: 119.45
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9983,
            scaleY: 1.0485,
            rotation: -116.2196,
            x: 179.7,
            y: 85.3
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9982,
            scaleY: 0.9926,
            rotation: -120.7849,
            x: 186.75,
            y: 85.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9981,
            scaleY: 0.9415,
            rotation: -124.9566,
            x: 193.2,
            y: 85.8
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.998,
            scaleY: 0.896,
            rotation: -128.6728,
            x: 198.95,
            y: 87
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9979,
            scaleY: 0.8564,
            rotation: -131.9075,
            x: 204,
            y: 88.5
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.5,
            regY: 0.1,
            scaleY: 0.8227,
            rotation: -134.6603,
            x: 161.15,
            y: 137.25
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9985,
            scaleY: 0.8087,
            rotation: -137.8448,
            x: 211.75,
            y: 90.05
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.999,
            scaleY: 0.7974,
            rotation: -140.4188,
            x: 214.65,
            y: 90.2
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9993,
            scaleY: 0.7886,
            rotation: -142.4252,
            x: 216.85,
            y: 90.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9996,
            scaleY: 0.7821,
            rotation: -143.9084,
            x: 218.5,
            y: 90.7
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 0.7777,
            rotation: -144.9116,
            x: 219.6,
            y: 90.9
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.3,
            regY: -0.1,
            scaleX: 0.9999,
            scaleY: 0.7752,
            rotation: -145.4757,
            x: 185.05,
            y: 143.05
          },
          0
        )
        .to(
          {
            regX: -0.4,
            regY: 0.1,
            scaleX: 0.9974,
            scaleY: 0.7681,
            rotation: -144.4007,
            x: 184.5,
            y: 141
          },
          2
        )
        .to(
          {
            regX: -0.6,
            scaleX: 0.9976,
            scaleY: 0.7606,
            rotation: -139.1278,
            x: 176.85,
            y: 137.85
          },
          3
        )
        .to(
          {
            regX: -0.7,
            scaleX: 0.9967,
            scaleY: 0.7425,
            rotation: -123.8409,
            x: 159.8,
            y: 123.7
          },
          4
        )
        .to(
          {
            regX: -0.5,
            regY: 0,
            scaleX: 0.9985,
            scaleY: 0.7699,
            rotation: -114.1353,
            x: 146.8,
            y: 114.7
          },
          2
        )
        .to(
          {
            regX: -0.6,
            regY: 0.1,
            scaleY: 0.8725,
            rotation: -100.133,
            x: 125.85,
            y: 100.55
          },
          5
        )
        .to(
          {
            regX: -0.1,
            scaleX: 1,
            scaleY: 0.8958,
            rotation: -96.7776,
            x: 120.6,
            y: 95.55
          },
          4
        )
        .wait(1)
    );
    // Line5
    this.instance_8 = new lib.ScematicLine('synched', 0);
    this.instance_8.parent = this;
    this.instance_8.setTransform(
      21.95,
      164.85,
      1,
      1.5898,
      -109.345,
      0,
      0,
      -0.2,
      -0.2
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleY: 1.5874,
            rotation: -109.2523,
            x: 143.95,
            y: 121.95
          },
          0
        )
        .wait(1)
        .to({ scaleY: 1.582, rotation: -109.0483, x: 144.25, y: 122.25 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 1.5734,
            rotation: -108.7191,
            x: 144.65,
            y: 122.65
          },
          0
        )
        .wait(1)
        .to({ scaleY: 1.5611, rotation: -108.2507, x: 145.25, y: 123.25 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 1.5449,
            rotation: -107.6316,
            x: 146.05,
            y: 124.05
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 1.5245,
            rotation: -106.8563,
            x: 146.95,
            y: 125
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9996,
            scaleY: 1.5003,
            rotation: -105.9318,
            x: 148.05,
            y: 126.05
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9994,
            scaleY: 1.4727,
            rotation: -104.8837,
            x: 149.2,
            y: 127.2
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.2,
            regY: -0.2,
            scaleX: 0.9993,
            scaleY: 1.4432,
            rotation: -103.7593,
            x: 36.45,
            y: 156.45
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9994,
            scaleY: 1.4178,
            rotation: -102.2135,
            x: 152.3,
            y: 130
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 1.3935,
            rotation: -100.7375,
            x: 154.05,
            y: 131.55
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9996,
            scaleY: 1.3716,
            rotation: -99.4007,
            x: 155.55,
            y: 132.85
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 1.3525,
            rotation: -98.2443,
            x: 156.75,
            y: 133.85
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 1.3367,
            rotation: -97.2836,
            x: 157.75,
            y: 134.7
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 1.3241,
            rotation: -96.5163,
            x: 158.5,
            y: 135.35
          },
          0
        )
        .wait(1)
        .to({ scaleY: 1.3145, rotation: -95.9304, x: 159.1, y: 135.85 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 1,
            scaleY: 1.3075,
            rotation: -95.5097,
            x: 159.45,
            y: 136.15
          },
          0
        )
        .wait(1)
        .to({ scaleY: 1.3031, rotation: -95.2372, x: 159.75, y: 136.4 }, 0)
        .wait(1)
        .to(
          {
            regX: -0.4,
            regY: -0.2,
            scaleY: 1.3007,
            rotation: -95.0968,
            x: 54.6,
            y: 146.2
          },
          0
        )
        .to(
          {
            regY: -0.1,
            scaleY: 0.682,
            rotation: -96.0453,
            x: 145.35,
            y: 82.65
          },
          15,
          cjs.Ease.quadInOut
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9999,
            scaleY: 0.6846,
            rotation: -96.3117,
            x: 200.25,
            y: 76.6
          },
          0
        )
        .wait(1)
        .to({ scaleY: 0.6899, rotation: -96.8514, x: 200, y: 77 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 0.6981,
            rotation: -97.6905,
            x: 199.7,
            y: 77.6
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9996,
            scaleY: 0.7096,
            rotation: -98.8564,
            x: 199.2,
            y: 78.4
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 0.7245,
            rotation: -100.3757,
            x: 198.55,
            y: 79.4
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9992,
            scaleY: 0.7431,
            rotation: -102.2719,
            x: 197.6,
            y: 80.6
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9989,
            scaleY: 0.7656,
            rotation: -104.5607,
            x: 196.4,
            y: 81.9
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.6,
            regY: 0.1,
            scaleX: 0.9986,
            scaleY: 0.7919,
            rotation: -107.2444,
            x: 133.6,
            y: 102.8
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleY: 0.8278,
            rotation: -109.3729,
            x: 193.3,
            y: 85.45
          },
          0
        )
        .wait(1)
        .to({ scaleY: 0.8675, rotation: -111.73, x: 191.6, y: 87.65 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.9987,
            scaleY: 0.9101,
            rotation: -114.2603,
            x: 189.6,
            y: 89.85
          },
          0
        )
        .wait(1)
        .to({ scaleY: 0.9544, rotation: -116.8877, x: 187.2, y: 91.95 }, 0)
        .wait(1)
        .to(
          {
            regX: -0.6,
            regY: -0.1,
            scaleY: 0.9988,
            rotation: -119.5241,
            x: 114.4,
            y: 134.2
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9989,
            scaleY: 1.0531,
            rotation: -121.0166,
            x: 183.2,
            y: 96.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9991,
            scaleY: 1.104,
            rotation: -122.4199,
            x: 181.7,
            y: 98.9
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9992,
            scaleY: 1.1506,
            rotation: -123.7021,
            x: 180.2,
            y: 100.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9994,
            scaleY: 1.1921,
            rotation: -124.8444,
            x: 178.7,
            y: 102.75
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 1.2282,
            rotation: -125.8386,
            x: 177.35,
            y: 104.25
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9996,
            scaleY: 1.2589,
            rotation: -126.6848,
            x: 176.1,
            y: 105.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 1.2844,
            rotation: -127.388,
            x: 175.05,
            y: 106.4
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 1.3051,
            rotation: -127.9565,
            x: 174.15,
            y: 107.15
          },
          0
        )
        .wait(1)
        .to({ scaleY: 1.3212, rotation: -128.3995, x: 173.4, y: 107.75 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 1.3331,
            rotation: -128.7271,
            x: 172.9,
            y: 108.15
          },
          0
        )
        .wait(1)
        .to({ scaleY: 1.3411, rotation: -128.9486, x: 172.55, y: 108.45 }, 0)
        .wait(1)
        .to(
          {
            regX: -0.5,
            regY: -0.1,
            scaleY: 1.3456,
            rotation: -129.0732,
            x: 87.9,
            y: 177.9
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleY: 1.347,
            rotation: -128.9254,
            x: 172.2,
            y: 108.65
          },
          0
        )
        .wait(1)
        .to({ scaleY: 1.35, rotation: -128.6054, x: 171.75, y: 108.8 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 1.3549,
            rotation: -128.0924,
            x: 171.1,
            y: 109
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 1.3617,
            rotation: -127.3657,
            x: 170.05,
            y: 109.35
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9996,
            scaleY: 1.3707,
            rotation: -126.4071,
            x: 168.75,
            y: 109.75
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 1.3821,
            rotation: -125.2058,
            x: 167.15,
            y: 110.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9994,
            scaleY: 1.3956,
            rotation: -123.7657,
            x: 165.15,
            y: 111.25
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9992,
            scaleY: 1.4112,
            rotation: -122.115,
            x: 162.8,
            y: 112.3
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.999,
            scaleY: 1.4282,
            rotation: -120.3118,
            x: 160.2,
            y: 113.6
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9988,
            scaleY: 1.4458,
            rotation: -118.4419,
            x: 157.45,
            y: 115.05
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.7,
            regY: -0.1,
            scaleX: 0.9986,
            scaleY: 1.4631,
            rotation: -116.6033,
            x: 48.7,
            y: 170.35
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9989,
            scaleY: 1.4897,
            rotation: -115.0784,
            x: 152.4,
            y: 117.3
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9991,
            scaleY: 1.5135,
            rotation: -113.7157,
            x: 150.3,
            y: 118.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9994,
            scaleY: 1.534,
            rotation: -112.5447,
            x: 148.5,
            y: 118.9
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9996,
            scaleY: 1.5509,
            rotation: -111.5738,
            x: 147,
            y: 119.6
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 1.5645,
            rotation: -110.7973,
            x: 145.8,
            y: 120.2
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 1.5749,
            rotation: -110.2023,
            x: 144.85,
            y: 120.7
          },
          0
        )
        .wait(1)
        .to({ scaleY: 1.5823, rotation: -109.7727, x: 144.2, y: 121.1 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 1,
            scaleY: 1.5873,
            rotation: -109.4921,
            x: 143.75,
            y: 121.3
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.2,
            regY: -0.2,
            scaleY: 1.5898,
            rotation: -109.3452,
            x: 21.95,
            y: 164.85
          },
          0
        )
        .wait(1)
    );
    // Line4
    this.instance_9 = new lib.ScematicLine('synched', 0);
    this.instance_9.parent = this;
    this.instance_9.setTransform(
      21.9,
      164.75,
      1,
      0.6878,
      -43.444,
      0,
      0,
      -0.4,
      161.8
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9998,
            scaleY: 0.6785,
            rotation: -43.1758,
            x: -15.05,
            y: 124.4
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 0.6581,
            rotation: -42.5858,
            x: -13,
            y: 124.9
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.999,
            scaleY: 0.6252,
            rotation: -41.6337,
            x: -9.7,
            y: 125.85
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.5,
            regY: 161.8,
            scaleX: 0.9982,
            scaleY: 0.5784,
            rotation: -40.2793,
            x: 24.65,
            y: 163.15
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9977,
            scaleY: 0.5171,
            rotation: -37.6277,
            x: 1.25,
            y: 128.85
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.4,
            regY: 162,
            scaleX: 0.9971,
            scaleY: 0.4404,
            rotation: -34.3073,
            x: 28.45,
            y: 161.1
          },
          0
        )
        .to(
          {
            regX: -0.5,
            regY: 162.5,
            scaleX: 1.3951,
            scaleY: 0.3523,
            rotation: 0,
            skewX: -25.271,
            skewY: 154.7256,
            x: 30.75,
            y: 159.9
          },
          1
        )
        .to(
          {
            regX: -1.6,
            regY: 167.6,
            scaleX: 1.2036,
            scaleY: 0.2656,
            skewX: -14.4641,
            skewY: 78.7609,
            x: 33.45,
            y: 158.15
          },
          1
        )
        .to(
          {
            regX: -0.1,
            regY: 161.9,
            scaleX: 0.9988,
            scaleY: 0.1946,
            rotation: 13.0805,
            skewX: 0,
            skewY: 0,
            x: 36.45,
            y: 156.4
          },
          1
        )
        .to(
          {
            regY: 162.2,
            scaleX: 0.9963,
            scaleY: 0.1996,
            rotation: 52.3198,
            x: 39.55,
            y: 154.6
          },
          1
        )
        .to(
          {
            regY: 161.8,
            scaleX: 0.9973,
            scaleY: 0.2744,
            rotation: 77.6529,
            x: 42.55,
            y: 152.75
          },
          1
        )
        .to(
          {
            regX: 0.1,
            regY: 161.7,
            scaleX: 0.9979,
            scaleY: 0.3615,
            rotation: 90.4087,
            x: 45.4,
            y: 151.3
          },
          1
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9986,
            scaleY: 0.451,
            rotation: 95.757,
            x: 83.85,
            y: 153.35
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.1,
            regY: 161.8,
            scaleX: 0.9992,
            scaleY: 0.5253,
            rotation: 100.2,
            x: 49.65,
            y: 148.5
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9995,
            scaleY: 0.5823,
            rotation: 102.2521,
            x: 97.15,
            y: 157.6
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 0.6259,
            rotation: 103.8192,
            x: 101.5,
            y: 158.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 0.6571,
            rotation: 104.9443,
            x: 104.55,
            y: 160
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 0.6774,
            rotation: 105.6731,
            x: 106.5,
            y: 160.75
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.2,
            regY: 163,
            scaleX: 1,
            scaleY: 0.6878,
            rotation: 106.0486,
            x: 54.25,
            y: 145.8
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9998,
            scaleY: 0.6805,
            rotation: 106.6296,
            x: 108.65,
            y: 160.85
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 0.6633,
            rotation: 108.0003,
            x: 109.3,
            y: 160.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9989,
            scaleY: 0.6346,
            rotation: 110.2825,
            x: 110.3,
            y: 158.7
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.2,
            regY: 162.8,
            scaleX: 0.9981,
            scaleY: 0.5931,
            rotation: 113.5851,
            x: 67.1,
            y: 137
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9982,
            scaleY: 0.5531,
            rotation: 120.7063,
            x: 113.5,
            y: 154.7
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9983,
            scaleY: 0.5043,
            rotation: 129.4168,
            x: 115.6,
            y: 151.5
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.1,
            regY: 162.8,
            scaleX: 0.9984,
            scaleY: 0.4494,
            rotation: 139.2088,
            x: 93.85,
            y: 118.35
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9983,
            scaleY: 0.4389,
            rotation: 154.5595,
            x: 120.7,
            y: 142.95
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.1,
            regY: 162.5,
            scaleX: 0.9982,
            scaleY: 0.429,
            rotation: 168.9099,
            x: 115.85,
            y: 103.4
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9988,
            scaleY: 0.461,
            rotation: 179.776,
            x: 125.15,
            y: 134.5
          },
          0
        )
        .wait(1)
        .to(
          {
            regY: 162.7,
            scaleX: 0.9993,
            scaleY: 0.4867,
            rotation: 188.5167,
            x: 132.3,
            y: 91.85
          },
          0
        )
        .wait(1)
        .to(
          {
            regY: 81.1,
            scaleX: 0.9996,
            scaleY: 0.5207,
            rotation: 193.4319,
            x: 127.95,
            y: 129.25
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 0.5445,
            rotation: 196.878,
            x: 128.8,
            y: 127.7
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 0.5594,
            rotation: 199.0273,
            x: 129.25,
            y: 126.6
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.1,
            regY: 163,
            scaleX: 1,
            scaleY: 0.5665,
            rotation: 200.0526,
            x: 145.3,
            y: 82.65
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9999,
            scaleY: 0.5641,
            rotation: 200.2791,
            x: 129.1,
            y: 126.5
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 0.5592,
            rotation: 200.738,
            x: 128.3,
            y: 127
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 0.5516,
            rotation: 201.4516,
            x: 127.1,
            y: 127.7
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9992,
            scaleY: 0.5411,
            rotation: 202.4431,
            x: 125.45,
            y: 128.7
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9988,
            scaleY: 0.5274,
            rotation: 203.7351,
            x: 123.35,
            y: 130
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.1,
            regY: 162.8,
            scaleX: 0.9983,
            scaleY: 0.5103,
            rotation: 205.3475,
            x: 138.7,
            y: 93.9
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9978,
            scaleY: 0.4924,
            rotation: 208.1314,
            x: 117.2,
            y: 133.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9973,
            scaleY: 0.4714,
            rotation: 211.3957,
            x: 113.2,
            y: 135.6
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.1,
            regY: 162.8,
            scaleX: 0.9968,
            scaleY: 0.4475,
            rotation: 215.1173,
            x: 130.1,
            y: 108.25
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9972,
            scaleY: 0.4313,
            rotation: 221.0092,
            x: 103.2,
            y: 140.75
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9977,
            scaleY: 0.4139,
            rotation: 227.3339,
            x: 97.55,
            y: 143.5
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9982,
            scaleY: 0.3959,
            rotation: 233.9012,
            x: 92.2,
            y: 146.3
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.1,
            regY: 163.1,
            scaleX: 0.9987,
            scaleY: 0.3778,
            rotation: 240.4911,
            x: 114.3,
            y: 134.05
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9986,
            scaleY: 0.3789,
            rotation: 247.8889,
            x: 81.35,
            y: 152.5
          },
          0
        )
        .wait(1)
        .to({ scaleY: 0.3801, rotation: 254.8441, x: 76.25, y: 155.4 }, 0)
        .wait(1)
        .to(
          {
            regX: -0.1,
            regY: 163.1,
            scaleX: 0.9985,
            scaleY: 0.3811,
            rotation: 261.1996,
            x: 102.8,
            y: 153.25
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9989,
            scaleY: 0.3913,
            rotation: 266.7671,
            x: 67.6,
            y: 160.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9992,
            scaleY: 0.4002,
            rotation: 271.6129,
            x: 64.05,
            y: 161.95
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.1,
            regY: 163.6,
            scaleX: 0.9994,
            scaleY: 0.4077,
            rotation: 275.7371,
            x: 94.5,
            y: 166.85
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9996,
            scaleY: 0.4171,
            rotation: 278.325,
            x: 58.4,
            y: 164.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 0.4246,
            rotation: 280.4168,
            x: 56.4,
            y: 166.2
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 0.4305,
            rotation: 282.0473,
            x: 54.85,
            y: 167.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 0.4349,
            rotation: 283.2527,
            x: 53.75,
            y: 167.8
          },
          0
        )
        .wait(1)
        .to({ scaleY: 0.4378, rotation: 284.068, x: 53, y: 168.25 }, 0)
        .wait(1)
        .to(
          {
            regX: 0.1,
            regY: 163,
            scaleY: 0.4395,
            rotation: 284.5265,
            x: 87.7,
            y: 177.65
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleY: 0.441,
            rotation: 284.7936,
            x: 52.25,
            y: 168.45
          },
          0
        )
        .wait(1)
        .to({ scaleY: 0.4443, rotation: 285.3724, x: 51.1, y: 167.8 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 0.4495,
            rotation: 286.3,
            x: 49.2,
            y: 166.8
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 0.457,
            rotation: 287.6139,
            x: 46.55,
            y: 165.35
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9996,
            scaleY: 0.4668,
            rotation: 289.3472,
            x: 43.15,
            y: 163.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 0.4792,
            rotation: 291.5196,
            x: 39,
            y: 160.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9993,
            scaleY: 0.4939,
            rotation: 294.1235,
            x: 34.1,
            y: 157.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9991,
            scaleY: 0.5109,
            rotation: 297.1084,
            x: 28.65,
            y: 154.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9989,
            scaleY: 0.5294,
            rotation: 300.369,
            x: 22.8,
            y: 150.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9986,
            scaleY: 0.5485,
            rotation: 303.7501,
            x: 17,
            y: 146.25
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.1,
            regY: 162.8,
            scaleX: 0.9984,
            scaleY: 0.5674,
            rotation: 307.0748,
            x: 48.6,
            y: 170.1
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9987,
            scaleY: 0.5927,
            rotation: 309.0667,
            x: 5.45,
            y: 138.3
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.999,
            scaleY: 0.6153,
            rotation: 310.8468,
            x: 0.05,
            y: 134.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9993,
            scaleY: 0.6347,
            rotation: 312.3765,
            x: -4.55,
            y: 132
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 0.6508,
            rotation: 313.6448,
            x: -8.3,
            y: 129.55
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 0.6637,
            rotation: 314.6591,
            x: -11.2,
            y: 127.55
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 0.6736,
            rotation: 315.4365,
            x: -13.45,
            y: 126
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 0.6807,
            rotation: 315.9976,
            x: -15.05,
            y: 124.85
          },
          0
        )
        .wait(1)
        .to(
          { scaleX: 1, scaleY: 0.6854, rotation: 316.3641, x: -16.1, y: 124.2 },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.4,
            regY: 161.8,
            scaleY: 0.6878,
            rotation: 316.556,
            x: 21.9,
            y: 164.75
          },
          0
        )
        .wait(1)
    );
    // Line3
    this.instance_10 = new lib.ScematicLine('synched', 0);
    this.instance_10.parent = this;
    this.instance_10.setTransform(
      49.65,
      15.95,
      1,
      0.6573,
      -41.7063,
      0,
      0,
      0.1,
      0.1
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.027,
            scaleY: 0.6447,
            rotation: 0,
            skewX: -40.5399,
            skewY: -42.5142,
            x: 84.55,
            y: 55.75
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.0674,
            scaleY: 0.626,
            skewX: -38.8023,
            skewY: -43.7168,
            x: 83.9,
            y: 55.65
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1214,
            scaleY: 0.601,
            skewX: -36.4747,
            skewY: -45.3278,
            x: 83.1,
            y: 55.45
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.1,
            regY: 0.4,
            scaleX: 1.1895,
            scaleY: 0.5694,
            skewX: -33.5376,
            skewY: -47.3607,
            x: 56.9,
            y: 16.5
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.2724,
            scaleY: 0.5374,
            skewX: -27.2129,
            skewY: -47.1165,
            x: 80.7,
            y: 55.35
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.1,
            regY: 0.7,
            scaleX: 1.3703,
            scaleY: 0.4996,
            skewX: -19.736,
            skewY: -46.8279,
            x: 65.8,
            y: 17.05
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.4859,
            scaleY: 0.4917,
            skewX: -8.6823,
            skewY: -44.0784,
            x: 77.15,
            y: 56.35
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.6179,
            scaleY: 0.4827,
            skewX: 3.9355,
            skewY: -40.9399,
            x: 74.85,
            y: 56.2
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.2,
            regY: 0.2,
            scaleX: 1.7668,
            scaleY: 0.4725,
            skewX: 18.1652,
            skewY: -37.4005,
            x: 84.85,
            y: 17.55
          },
          0
        )
        .to(
          {
            regX: 0.4,
            regY: 0.8,
            scaleX: 1.7138,
            scaleY: 0.5166,
            skewX: 30.5444,
            skewY: -21.3197,
            x: 90.4,
            y: 17.75
          },
          1
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.6582,
            scaleY: 0.5811,
            skewX: 36.6769,
            skewY: -11.1592,
            x: 67.8,
            y: 55.3
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.5971,
            scaleY: 0.6519,
            skewX: 43.4205,
            skewY: 0.0138,
            x: 66.25,
            y: 55.8
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.5303,
            scaleY: 0.7293,
            skewX: 50.7911,
            skewY: 12.2255,
            x: 64.05,
            y: 54.65
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.5,
            regY: 0.4,
            scaleX: 1.4577,
            scaleY: 0.8135,
            skewX: 58.8035,
            skewY: 25.5007,
            x: 117.8,
            y: 17.8
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.3775,
            scaleY: 0.8521,
            skewX: 60.5368,
            skewY: 32.9937,
            x: 60.4,
            y: 51.75
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.6,
            regY: 0.4,
            scaleX: 1.2911,
            scaleY: 0.8938,
            skewX: 62.4038,
            skewY: 41.0644,
            x: 124.1,
            y: 18.8
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.2003,
            scaleY: 0.9156,
            skewX: 63.064,
            skewY: 48.3792,
            x: 58.9,
            y: 51.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1033,
            scaleY: 0.939,
            skewX: 63.7694,
            skewY: 56.1963,
            x: 58.2,
            y: 51.15
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.2,
            regY: 0.1,
            scaleX: 1,
            scaleY: 0.9638,
            rotation: 64.5206,
            skewX: 0,
            skewY: 0,
            x: 127.95,
            y: 17.9
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9999,
            scaleY: 0.9607,
            rotation: 64.279,
            x: 56.85,
            y: 51.25
          },
          0
        )
        .wait(1)
        .to({ scaleY: 0.9533, rotation: 63.7089, x: 55.7, y: 51.35 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 0.9409,
            rotation: 62.7598,
            x: 53.75,
            y: 51.45
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.9996, scaleY: 0.9231, rotation: 61.3864, x: 50.95 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.9994,
            scaleY: 0.8995,
            rotation: 59.5686,
            x: 47.2,
            y: 51.4
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9991,
            scaleY: 0.8706,
            rotation: 57.3451,
            x: 42.65,
            y: 51.1
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9988,
            scaleY: 0.8381,
            rotation: 54.8456,
            x: 37.55,
            y: 50.55
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9986,
            scaleY: 0.8048,
            rotation: 52.2837,
            x: 32.2,
            y: 49.7
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.4,
            regY: 0.1,
            scaleX: 0.9983,
            scaleY: 0.7737,
            rotation: 49.8887,
            x: 75.35,
            y: 8.5
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9988,
            scaleY: 0.7545,
            rotation: 46.9899,
            x: 22.65,
            y: 48.45
          },
          0
        )
        .wait(1)
        .to(
          { scaleX: 0.9992, scaleY: 0.739, rotation: 44.6581, x: 19, y: 48.25 },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 0.7274,
            rotation: 42.8976,
            x: 16.3,
            y: 47.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 0.7192,
            rotation: 41.6633,
            x: 14.4,
            y: 47.7
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 0.7141,
            rotation: 40.8935,
            x: 13.2,
            y: 47.55
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.2,
            regY: 0.1,
            scaleY: 0.7117,
            rotation: 40.5263,
            x: 50.35,
            y: 3.85
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9998,
            scaleY: 0.7088,
            rotation: 39.8508,
            x: 13.7,
            y: 47.8
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 0.7046,
            rotation: 38.8748,
            x: 15.15,
            y: 48.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 0.6988,
            rotation: 37.5392,
            x: 17.1,
            y: 48.6
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9992,
            scaleY: 0.6912,
            rotation: 35.7713,
            x: 19.75,
            y: 49.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9988,
            scaleY: 0.6814,
            rotation: 33.4832,
            x: 23.05,
            y: 49.8
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.4,
            regY: 0.1,
            scaleX: 0.9984,
            scaleY: 0.6689,
            rotation: 30.576,
            x: 55.15,
            y: 3.9
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9985,
            scaleY: 0.6744,
            rotation: 26.6112,
            x: 32,
            y: 52.55
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9987,
            scaleY: 0.6812,
            rotation: 21.8066,
            x: 38.1,
            y: 54.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9989,
            scaleY: 0.689,
            rotation: 16.2157,
            x: 45.4,
            y: 57.3
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9992,
            scaleY: 0.6976,
            rotation: 10.0576,
            x: 53.7,
            y: 59.35
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9994,
            scaleY: 0.7065,
            rotation: 3.682,
            x: 62.65,
            y: 60.9
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9996,
            scaleY: 0.7152,
            rotation: -2.56,
            x: 71.65,
            y: 61.65
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.5,
            regY: 0.2,
            scaleX: 0.9998,
            scaleY: 0.7235,
            rotation: -8.4294,
            x: 72.05,
            y: 3.75
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9996,
            scaleY: 0.7684,
            rotation: -12.7535,
            x: 88.05,
            y: 64.5
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9993,
            scaleY: 0.8129,
            rotation: -17.0332,
            x: 96.3,
            y: 66.8
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9991,
            scaleY: 0.8542,
            rotation: -21.0026,
            x: 104.4,
            y: 68.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9988,
            scaleY: 0.8904,
            rotation: -24.4858,
            x: 111.7,
            y: 69.6
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9987,
            scaleY: 0.9209,
            rotation: -27.4197,
            x: 118.05,
            y: 70.25
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.5,
            regY: 0.5,
            scaleX: 0.9985,
            scaleY: 0.9458,
            rotation: -29.8201,
            x: 85.75,
            y: 4
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9989,
            scaleY: 0.9737,
            rotation: -31.229,
            x: 127.3,
            y: 71.35
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9993,
            scaleY: 0.9956,
            rotation: -32.3317,
            x: 130.55,
            y: 71.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 1.0122,
            rotation: -33.1722,
            x: 133.05,
            y: 72.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 1.0244,
            rotation: -33.7887,
            x: 134.9,
            y: 72.8
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 1.0328,
            rotation: -34.2136,
            x: 136.2,
            y: 73
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.2,
            regY: 0.1,
            scaleX: 0.9999,
            scaleY: 1.038,
            rotation: -34.4734,
            x: 90,
            y: 3.95
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleY: 1.0353,
            rotation: -34.5051,
            x: 137.05,
            y: 73.2
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 1.0296,
            rotation: -34.5739,
            x: 136.3,
            y: 72.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 1.0205,
            rotation: -34.6842,
            x: 135.05,
            y: 72.5
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9996,
            scaleY: 1.0076,
            rotation: -34.8404,
            x: 133.3,
            y: 71.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9994,
            scaleY: 0.9906,
            rotation: -35.0464,
            x: 131,
            y: 71.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9992,
            scaleY: 0.9693,
            rotation: -35.3046,
            x: 128.1,
            y: 70.25
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9989,
            scaleY: 0.9437,
            rotation: -35.6141,
            x: 124.5,
            y: 69.1
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9986,
            scaleY: 0.9144,
            rotation: -35.9689,
            x: 120.45,
            y: 67.8
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.3,
            regY: 0.1,
            scaleX: 0.9983,
            scaleY: 0.8823,
            rotation: -36.3564,
            x: 73.85,
            y: 8.7
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9986,
            scaleY: 0.8469,
            rotation: -37.1978,
            x: 111.25,
            y: 64.65
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9988,
            scaleY: 0.8121,
            rotation: -38.025,
            x: 106.55,
            y: 63
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9991,
            scaleY: 0.7796,
            rotation: -38.7984,
            x: 102.1,
            y: 61.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9993,
            scaleY: 0.7505,
            rotation: -39.4896,
            x: 98.05,
            y: 60.05
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9995,
            scaleY: 0.7255,
            rotation: -40.0835,
            x: 94.55,
            y: 58.9
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9996,
            scaleY: 0.7048,
            rotation: -40.576,
            x: 91.65,
            y: 57.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 0.6883,
            rotation: -40.9698,
            x: 89.25,
            y: 57.25
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9998,
            scaleY: 0.6756,
            rotation: -41.2716,
            x: 87.45,
            y: 56.7
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 0.6664,
            rotation: -41.4895,
            x: 86.1,
            y: 56.3
          },
          0
        )
        .wait(1)
        .to({ scaleY: 0.6604, rotation: -41.6318, x: 85.3, y: 56.05 }, 0)
        .wait(1)
        .to(
          {
            regX: 0.1,
            regY: 0.1,
            scaleX: 1,
            scaleY: 0.6573,
            rotation: -41.7063,
            x: 49.65,
            y: 15.95
          },
          0
        )
        .wait(1)
    );
    // Line2
    this.instance_11 = new lib.ScematicLine('synched', 0);
    this.instance_11.parent = this;
    this.instance_11.setTransform(
      49.65,
      16,
      1,
      0.7615,
      56.9913,
      0,
      0,
      0.1,
      -0.1
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.9982,
            scaleY: 0.7592,
            rotation: 0,
            skewX: 56.4362,
            skewY: 54.7911,
            x: -1.2,
            y: 50
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9943,
            scaleY: 0.7542,
            skewX: 55.215,
            skewY: 49.9519,
            x: 1.15,
            y: 50.85
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9879,
            scaleY: 0.746,
            skewX: 53.2443,
            skewY: 42.1427,
            x: 5.05,
            y: 52.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9788,
            scaleY: 0.7344,
            skewX: 50.4408,
            skewY: 31.0336,
            x: 10.55,
            y: 53.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9668,
            scaleY: 0.7191,
            skewX: 46.7347,
            skewY: 16.3478,
            x: 17.95,
            y: 56
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.1,
            regY: 0,
            scaleX: 0.9518,
            scaleY: 0.6999,
            skewX: 42.0937,
            skewY: -2.0424,
            x: 65.45,
            y: 16.1
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 0.934,
            scaleY: 0.7038,
            skewX: 35.758,
            skewY: -24.8353,
            x: 37.85,
            y: 62.5
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9139,
            scaleY: 0.7083,
            skewX: 28.5754,
            skewY: -50.6749,
            x: 50.4,
            y: 66.8
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 1,
            regY: -0.7,
            scaleX: 0.8923,
            scaleY: 0.7131,
            skewX: 20.8702,
            skewY: -78.3949,
            x: 85.15,
            y: 16.35
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.0091,
            scaleY: 0.7577,
            skewX: 14.5229,
            skewY: -99.1694,
            x: 77.4,
            y: 77.55
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1206,
            scaleY: 0.8004,
            skewX: 8.4623,
            skewY: -119.0053,
            x: 91.05,
            y: 82.5
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.2216,
            scaleY: 0.839,
            skewX: 2.9731,
            skewY: -136.9712,
            x: 104.1,
            y: 86.35
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.309,
            scaleY: 0.8724,
            skewX: -1.7756,
            skewY: -152.5133,
            x: 115.95,
            y: 89.1
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.9,
            regY: -0.6,
            scaleX: 1.3816,
            scaleY: 0.9002,
            skewX: -5.7204,
            skewY: -165.4244,
            x: 117.45,
            y: 17.4
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.3166,
            scaleY: 0.9362,
            skewX: -7.9851,
            skewY: -174.8115,
            x: 133.05,
            y: 93.4
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.2669,
            scaleY: 0.9638,
            skewX: -9.7145,
            skewY: -181.9796,
            x: 138.6,
            y: 95.25
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.2312,
            scaleY: 0.9836,
            skewX: -10.9563,
            skewY: -187.1266,
            x: 142.65,
            y: 96.5
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.2081,
            scaleY: 0.9964,
            skewX: -11.7606,
            skewY: -190.4602,
            x: 145.3,
            y: 97.3
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.3,
            regY: 0.3,
            scaleX: 1.1962,
            scaleY: 1.003,
            skewX: -12.175,
            skewY: -192.1779,
            x: 128.35,
            y: 17.9
          },
          0
        )
        .to(
          {
            regY: 0.4,
            scaleY: 1.0949,
            skewX: -20.7058,
            skewY: -200.7093,
            x: 50.15,
            y: 4.1
          },
          15,
          cjs.Ease.quadInOut
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleY: 1.094,
            skewX: -20.4753,
            skewY: -200.4788,
            x: 81.6,
            y: 86.65
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleY: 1.092,
            skewX: -20.0084,
            skewY: -200.0119,
            x: 81.25,
            y: 86.75
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleY: 1.089,
            skewX: -19.2824,
            skewY: -199.2858,
            x: 80.75,
            y: 86.9
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleY: 1.0848,
            skewX: -18.2737,
            skewY: -198.2769,
            x: 80.05,
            y: 87.1
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleY: 1.0793,
            skewX: -16.9592,
            skewY: -196.9623,
            x: 79.15,
            y: 87.25
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1961,
            scaleY: 1.0724,
            skewX: -15.3188,
            skewY: -195.3216,
            x: 78.05,
            y: 87.5
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleY: 1.0641,
            skewX: -13.3386,
            skewY: -193.3411,
            x: 76.7,
            y: 87.55
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleY: 1.0545,
            skewX: -11.0167,
            skewY: -191.019,
            x: 75.2,
            y: 87.6
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.196,
            scaleY: 1.0434,
            skewX: -8.3695,
            skewY: -188.3714,
            x: 73.45,
            y: 87.35
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleY: 1.0311,
            skewX: -5.438,
            skewY: -185.4394,
            x: 71.65,
            y: 86.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleY: 1.018,
            skewX: -2.2911,
            skewY: -182.2922,
            x: 69.8,
            y: 86.25
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1959,
            scaleY: 1.0043,
            skewX: 0.9765,
            skewY: -179.0241,
            x: 67.95,
            y: 85.25
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.2,
            regY: 0.4,
            scaleX: 1.1958,
            scaleY: 0.9906,
            skewX: 4.2553,
            skewY: -175.7448,
            x: 71.9,
            y: 4.3
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.1959,
            scaleY: 0.9992,
            skewX: 7.5951,
            skewY: -172.4056,
            x: 64.4,
            y: 84.2
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleY: 1.0073,
            skewX: 10.7351,
            skewY: -169.2662,
            x: 62.65,
            y: 84.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.196,
            scaleY: 1.0147,
            skewX: 13.6043,
            skewY: -166.3975,
            x: 61,
            y: 83.95
          },
          0
        )
        .wait(1)
        .to(
          { scaleY: 1.0213, skewX: 16.1604, skewY: -163.842, x: 59.5, y: 83.5 },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1961,
            scaleY: 1.0271,
            skewX: 18.3851,
            skewY: -161.6177,
            x: 58.25,
            y: 83
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleY: 1.032,
            skewX: 20.2785,
            skewY: -159.7246,
            x: 57.15,
            y: 82.45
          },
          0
        )
        .wait(1)
        .to(
          { scaleY: 1.036, skewX: 21.8521, skewY: -158.1513, x: 56.3, y: 82 },
          0
        )
        .wait(1)
        .to(
          {
            scaleY: 1.0393,
            skewX: 23.124,
            skewY: -156.8796,
            x: 55.55,
            y: 81.5
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1962,
            scaleY: 1.0419,
            skewX: 24.1154,
            skewY: -155.8884,
            x: 55,
            y: 81.1
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleY: 1.0438,
            skewX: 24.8483,
            skewY: -155.1556,
            x: 54.6,
            y: 80.8
          },
          0
        )
        .wait(1)
        .to(
          { scaleY: 1.0451, skewX: 25.3441, skewY: -154.66, x: 54.25, y: 80.6 },
          0
        )
        .wait(1)
        .to(
          {
            regY: 0.2,
            scaleY: 1.0458,
            skewX: 25.6229,
            skewY: -154.3813,
            x: 90.4,
            y: 4.25
          },
          0
        )
        .wait(1)
        .to(
          {
            regY: 81.1,
            scaleX: 1.1961,
            scaleY: 1.0436,
            skewX: 25.8098,
            skewY: -154.1943,
            x: 53.35,
            y: 80.3
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleY: 1.0387,
            skewX: 26.2148,
            skewY: -153.7891,
            x: 52.35,
            y: 79.9
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.196,
            scaleY: 1.031,
            skewX: 26.864,
            skewY: -153.1398,
            x: 50.75,
            y: 79.2
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1959,
            scaleY: 1.0201,
            skewX: 27.7835,
            skewY: -152.2201,
            x: 48.6,
            y: 78.2
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1958,
            scaleY: 1.0057,
            skewX: 28.9964,
            skewY: -151.0068,
            x: 45.7,
            y: 76.9
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1955,
            scaleY: 0.9876,
            skewX: 30.5166,
            skewY: -149.4862,
            x: 42.3,
            y: 75.2
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1953,
            scaleY: 0.9659,
            skewX: 32.3389,
            skewY: -147.6635,
            x: 38.2,
            y: 73.25
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.195,
            scaleY: 0.9411,
            skewX: 34.4277,
            skewY: -145.5741,
            x: 33.75,
            y: 70.9
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1947,
            scaleY: 0.914,
            skewX: 36.7095,
            skewY: -143.2918,
            x: 29.1,
            y: 68.4
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1944,
            scaleY: 0.8858,
            skewX: 39.0756,
            skewY: -140.925,
            x: 24.45,
            y: 65.8
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.1,
            regY: 0.2,
            scaleX: 1.1941,
            scaleY: 0.8582,
            skewX: 41.4022,
            skewY: -138.5977,
            x: 66.1,
            y: 11.25
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 1.1946,
            scaleY: 0.8378,
            skewX: 44.6507,
            skewY: -135.3501,
            x: 14.85,
            y: 60.3
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1949,
            scaleY: 0.8195,
            skewX: 47.5539,
            skewY: -132.4476,
            x: 10.45,
            y: 57.65
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1953,
            scaleY: 0.8039,
            skewX: 50.0486,
            skewY: -129.9536,
            x: 6.85,
            y: 55.4
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1955,
            scaleY: 0.7909,
            skewX: 52.1171,
            skewY: -127.8857,
            x: 4,
            y: 53.55
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1957,
            scaleY: 0.7805,
            skewX: 53.7713,
            skewY: -126.2319,
            x: 1.8,
            y: 52.05
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1959,
            scaleY: 0.7725,
            skewX: 55.0391,
            skewY: -124.9645,
            x: 0.15,
            y: 50.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.196,
            scaleY: 0.7668,
            skewX: 55.9543,
            skewY: -124.0495,
            x: -1.05,
            y: 50.1
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 1.1961,
            scaleY: 0.763,
            skewX: 56.5519,
            skewY: -123.4521,
            x: -1.8,
            y: 49.6
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: -0.1,
            regY: 0.1,
            scaleX: 1.1962,
            scaleY: 0.7611,
            skewX: 56.8649,
            skewY: -123.1391,
            x: 49.5,
            y: 15.8
          },
          0
        )
        .wait(1)
    );
    // Line1
    this.instance_12 = new lib.ScematicLine('synched', 0);
    this.instance_12.parent = this;
    this.instance_12.setTransform(
      49.7,
      16.05,
      2.236,
      1.3844,
      0,
      -73.7749,
      -137.2087,
      0,
      0.1
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(1)
        .to(
          {
            regY: 81.1,
            scaleY: 1.3819,
            skewX: -73.6323,
            skewY: -137.0655,
            x: 157.65,
            y: 47.6
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2358,
            scaleY: 1.3764,
            skewX: -73.3185,
            skewY: -136.7506,
            x: 158.35,
            y: 48.05
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2356,
            scaleY: 1.3676,
            skewX: -72.8121,
            skewY: -136.2422,
            x: 159.4,
            y: 48.8
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2353,
            scaleY: 1.355,
            skewX: -72.0918,
            skewY: -135.5191,
            x: 160.95,
            y: 49.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2349,
            scaleY: 1.3383,
            skewX: -71.1395,
            skewY: -134.5632,
            x: 163,
            y: 51.35
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2344,
            scaleY: 1.3174,
            skewX: -69.947,
            skewY: -133.3662,
            x: 165.55,
            y: 53
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2338,
            scaleY: 1.2925,
            skewX: -68.5249,
            skewY: -131.9387,
            x: 168.55,
            y: 54.85
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2331,
            scaleY: 1.2643,
            skewX: -66.9128,
            skewY: -130.3204,
            x: 171.9,
            y: 56.85
          },
          0
        )
        .wait(1)
        .to(
          {
            regY: 0,
            scaleX: 2.2324,
            scaleY: 1.234,
            skewX: -65.1833,
            skewY: -128.5843,
            x: 84.7,
            y: 16.8
          },
          0
        )
        .wait(1)
        .to(
          {
            regY: 81.1,
            scaleX: 2.2331,
            scaleY: 1.2072,
            skewX: -62.7071,
            skewY: -126.1138,
            x: 179.4,
            y: 61.8
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2337,
            scaleY: 1.1816,
            skewX: -60.3428,
            skewY: -123.755,
            x: 183,
            y: 64.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2343,
            scaleY: 1.1584,
            skewX: -58.2013,
            skewY: -121.6185,
            x: 186.25,
            y: 66.65
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2347,
            scaleY: 1.1383,
            skewX: -56.3488,
            skewY: -119.7703,
            x: 189,
            y: 68.4
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2351,
            scaleY: 1.1217,
            skewX: -54.8098,
            skewY: -118.2349,
            x: 191.3,
            y: 69.75
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2355,
            scaleY: 1.1083,
            skewX: -53.5808,
            skewY: -117.0087,
            x: 193.15,
            y: 70.8
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2357,
            scaleY: 1.0982,
            skewX: -52.6422,
            skewY: -116.0723,
            x: 194.5,
            y: 71.55
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2359,
            scaleY: 1.0909,
            skewX: -51.9683,
            skewY: -115.3999,
            x: 195.5,
            y: 72
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.236,
            scaleY: 1.0862,
            skewX: -51.5318,
            skewY: -114.9645,
            x: 196.1,
            y: 72.35
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.1,
            regY: 0.2,
            scaleY: 1.0837,
            skewX: -51.3069,
            skewY: -114.7401,
            x: 127.9,
            y: 17.7
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleY: 1.0858,
            skewX: -51.565,
            skewY: -114.9973,
            x: 196,
            y: 72.35
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2358,
            scaleY: 1.0908,
            skewX: -52.1738,
            skewY: -115.6042,
            x: 194.85,
            y: 71.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2354,
            scaleY: 1.0991,
            skewX: -53.1875,
            skewY: -116.6146,
            x: 193,
            y: 70.05
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2349,
            scaleY: 1.111,
            skewX: -54.6545,
            skewY: -118.0767,
            x: 190.35,
            y: 67.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2343,
            scaleY: 1.1269,
            skewX: -56.5959,
            skewY: -120.0118,
            x: 186.8,
            y: 64.95
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2335,
            scaleY: 1.1462,
            skewX: -58.9707,
            skewY: -122.3788,
            x: 182.4,
            y: 61.2
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.1,
            regY: 0.2,
            scaleX: 2.2326,
            scaleY: 1.168,
            skewX: -61.6404,
            skewY: -125.0398,
            x: 94,
            y: 11.6
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0,
            regY: 81.1,
            scaleX: 2.2333,
            scaleY: 1.2049,
            skewX: -63.9345,
            skewY: -127.3413,
            x: 171.9,
            y: 52.85
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.234,
            scaleY: 1.2393,
            skewX: -66.0791,
            skewY: -129.4928,
            x: 166.9,
            y: 49
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2346,
            scaleY: 1.269,
            skewX: -67.927,
            skewY: -131.3467,
            x: 162.55,
            y: 45.45
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2351,
            scaleY: 1.2928,
            skewX: -69.4135,
            skewY: -132.8379,
            x: 159,
            y: 42.5
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2355,
            scaleY: 1.3109,
            skewX: -70.5357,
            skewY: -133.9637,
            x: 156.35,
            y: 40.15
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2357,
            scaleY: 1.3235,
            skewX: -71.3225,
            skewY: -134.7531,
            x: 154.45,
            y: 38.5
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.2359,
            scaleY: 1.3314,
            skewX: -71.8132,
            skewY: -135.2454,
            x: 153.25,
            y: 37.5
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 0.1,
            regY: 0.2,
            scaleX: 2.236,
            scaleY: 1.3351,
            skewX: -72.0473,
            skewY: -135.4802,
            x: 49.85,
            y: 3.65
          },
          0
        )
        .to(
          {
            regX: 0,
            regY: 0.1,
            scaleY: 1.0507,
            skewX: -77.7909,
            skewY: -141.2233,
            x: 89.95
          },
          25,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: -0.1,
            regY: 0.3,
            scaleY: 1.3861,
            skewX: -73.7997,
            skewY: -137.2318,
            x: 50,
            y: 15.8
          },
          20,
          cjs.Ease.quadInOut
        )
        .wait(1)
    );
    // Grow2
    this.instance_13 = new lib.Cloud1();
    this.instance_13.parent = this;
    this.instance_13.setTransform(
      141.55,
      56.25,
      0.651,
      0.651,
      13.2805,
      0,
      0,
      191.7,
      111
    );
    this.instance_13.alpha = 0;
    this.instance_13._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .wait(19)
        .to({ _off: false }, 0)
        .to(
          {
            regY: 110.9,
            scaleX: 0.6998,
            scaleY: 0.6998,
            rotation: 13.2812,
            y: 56.3,
            alpha: 1
          },
          28
        )
        .to(
          {
            regY: 110.8,
            scaleX: 0.75,
            scaleY: 0.75,
            rotation: 13.28,
            x: 141.65,
            y: 56.25,
            alpha: 0
          },
          31
        )
        .to({ _off: true }, 1)
        .wait(1)
    );
    // Grow
    this.instance_14 = new lib.Cloud1();
    this.instance_14.parent = this;
    this.instance_14.setTransform(
      91.7,
      93.8,
      0.651,
      0.651,
      -20.1994,
      0,
      0,
      191.7,
      111
    );
    this.instance_14.alpha = 0;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_14)
        .to(
          {
            regY: 110.9,
            scaleX: 0.6998,
            scaleY: 0.6998,
            rotation: -20.1987,
            x: 91.75,
            y: 93.85,
            alpha: 1
          },
          28
        )
        .to(
          {
            regX: 191.8,
            regY: 110.8,
            scaleX: 0.75,
            scaleY: 0.75,
            rotation: -20.199,
            x: 91.8,
            y: 93.75,
            alpha: 0
          },
          31
        )
        .to({ _off: true }, 1)
        .wait(20)
    );
    // Shink2
    this.instance_15 = new lib.Cloud2();
    this.instance_15.parent = this;
    this.instance_15.setTransform(
      94.1,
      112.55,
      1.0757,
      1.0757,
      13.2797,
      0,
      0,
      143.5,
      83
    );
    this.instance_15.alpha = 0;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_15)
        .to(
          {
            scaleX: 0.9845,
            scaleY: 0.9845,
            rotation: 13.2796,
            x: 94.05,
            alpha: 1
          },
          32
        )
        .to(
          {
            regX: 143.8,
            scaleX: 0.891,
            scaleY: 0.891,
            rotation: 13.2802,
            x: 94.25,
            alpha: 0
          },
          28
        )
        .wait(20)
    );
    // Shink
    this.instance_16 = new lib.Cloud2();
    this.instance_16.parent = this;
    this.instance_16.setTransform(
      150.65,
      79.55,
      1.0758,
      1.0758,
      -20.1995,
      0,
      0,
      143.5,
      83
    );
    this.instance_16.alpha = 0;
    this.instance_16._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_16)
        .wait(19)
        .to({ _off: false }, 0)
        .to(
          {
            regX: 143.6,
            scaleX: 0.9846,
            scaleY: 0.9846,
            rotation: -20.1992,
            alpha: 1
          },
          32
        )
        .to(
          {
            regX: 143.8,
            scaleX: 0.8911,
            scaleY: 0.8911,
            rotation: -20.1991,
            x: 150.75,
            y: 79.4,
            alpha: 0
          },
          28
        )
        .wait(1)
    );
    // Front2
    this.instance_17 = new lib.Cloud2();
    this.instance_17.parent = this;
    this.instance_17.setTransform(149.1, 131.2, 1, 1, 0, 0, 0, 143.6, 83);
    this.instance_17.alpha = 0;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_17)
        .to({ alpha: 1 }, 39)
        .to({ alpha: 0 }, 40)
        .wait(1)
    );
    // Front1
    this.instance_18 = new lib.Cloud1();
    this.instance_18.parent = this;
    this.instance_18.setTransform(104.85, 86.95, 1, 1, 0, 0, 0, 191.8, 111);
    this.instance_18.alpha = 0.5;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_18)
        .to({ alpha: 0.0391 }, 39)
        .to({ alpha: 0.5 }, 40)
        .wait(1)
    );
    // Middle1
    this.instance_19 = new lib.Cloud3();
    this.instance_19.parent = this;
    this.instance_19.setTransform(
      103.35,
      57.8,
      2.0061,
      2.0061,
      0,
      0,
      0,
      64.3,
      40.8
    );
    this.instance_19.alpha = 0.0898;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_19)
        .to({ alpha: 1 }, 39)
        .to({ alpha: 0.1016 }, 40)
        .wait(1)
    );
    // Middle2
    this.instance_20 = new lib.Cloud3();
    this.instance_20.parent = this;
    this.instance_20.setTransform(
      128.45,
      133.5,
      2.0061,
      2.0061,
      0,
      0,
      180,
      64.3,
      40.8
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_20)
        .to({ alpha: 0.1719 }, 39)
        .to({ alpha: 1 }, 40)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-86.9, -57.7, 413.4, 292.8);
  // stage content:
  (lib.TF_CloudAnimation_2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // timeline functions:
    this.frame_167 = function() {
      let _this = this;
      /*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
      _this.stop();
    };
    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .wait(167)
        .call(this.frame_167)
        .wait(1)
    );
    // CloudBuilder
    this.instance = new lib.CloudBuilder();
    this.instance.parent = this;
    this.instance.setTransform(332.2, 106, 1, 1, 0, 0, 0, 129.9, 69.2);
    this.instance.alpha = 0;
    this.instance._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(34)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 119.8, regY: 88.7, x: 322.1, y: 125.1, alpha: 0.04 }, 0)
        .wait(1)
        .to({ y: 124.7, alpha: 0.08 }, 0)
        .wait(1)
        .to({ y: 124.3, alpha: 0.12 }, 0)
        .wait(1)
        .to({ y: 123.9, alpha: 0.16 }, 0)
        .wait(1)
        .to({ y: 123.5, alpha: 0.2 }, 0)
        .wait(1)
        .to({ y: 123.1, alpha: 0.24 }, 0)
        .wait(1)
        .to({ y: 122.7, alpha: 0.28 }, 0)
        .wait(1)
        .to({ y: 122.3, alpha: 0.32 }, 0)
        .wait(1)
        .to({ y: 121.9, alpha: 0.36 }, 0)
        .wait(1)
        .to({ y: 121.5, alpha: 0.4 }, 0)
        .wait(1)
        .to({ y: 121.1, alpha: 0.44 }, 0)
        .wait(1)
        .to({ y: 120.7, alpha: 0.48 }, 0)
        .wait(1)
        .to({ y: 120.3, alpha: 0.52 }, 0)
        .wait(1)
        .to({ y: 119.9, alpha: 0.56 }, 0)
        .wait(1)
        .to({ y: 119.5, alpha: 0.6 }, 0)
        .wait(1)
        .to({ y: 119.1, alpha: 0.64 }, 0)
        .wait(1)
        .to({ y: 118.7, alpha: 0.68 }, 0)
        .wait(1)
        .to({ y: 118.3, alpha: 0.72 }, 0)
        .wait(1)
        .to({ y: 117.9, alpha: 0.76 }, 0)
        .wait(1)
        .to({ y: 117.5, alpha: 0.8 }, 0)
        .wait(1)
        .to({ y: 117.1, alpha: 0.84 }, 0)
        .wait(1)
        .to({ y: 116.7, alpha: 0.88 }, 0)
        .wait(1)
        .to({ y: 116.3, alpha: 0.92 }, 0)
        .wait(1)
        .to({ y: 115.9, alpha: 0.96 }, 0)
        .wait(1)
        .to({ y: 115.5, alpha: 1 }, 0)
        .wait(109)
    );
    // CloudFormation1
    this.instance_1 = new lib.CloudFormation();
    this.instance_1.parent = this;
    this.instance_1.setTransform(
      446.75,
      513.35,
      0.7145,
      0.7145,
      0,
      0,
      0,
      105.1,
      105.8
    );
    this.instance_1.alpha = 0;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to({ regX: 119.8, regY: 88.7, x: 457.2, y: 500.25, alpha: 0.0435 }, 0)
        .wait(1)
        .to({ y: 499.4, alpha: 0.087 }, 0)
        .wait(1)
        .to({ y: 498.5, alpha: 0.1304 }, 0)
        .wait(1)
        .to({ y: 497.65, alpha: 0.1739 }, 0)
        .wait(1)
        .to({ y: 496.8, alpha: 0.2174 }, 0)
        .wait(1)
        .to({ y: 495.9, alpha: 0.2609 }, 0)
        .wait(1)
        .to({ y: 495.05, alpha: 0.3043 }, 0)
        .wait(1)
        .to({ y: 494.15, alpha: 0.3478 }, 0)
        .wait(1)
        .to({ y: 493.3, alpha: 0.3913 }, 0)
        .wait(1)
        .to({ y: 492.45, alpha: 0.4348 }, 0)
        .wait(1)
        .to({ y: 491.55, alpha: 0.4783 }, 0)
        .wait(1)
        .to({ y: 490.7, alpha: 0.5217 }, 0)
        .wait(1)
        .to({ y: 489.8, alpha: 0.5652 }, 0)
        .wait(1)
        .to({ y: 488.95, alpha: 0.6087 }, 0)
        .wait(1)
        .to({ y: 488.1, alpha: 0.6522 }, 0)
        .wait(1)
        .to({ y: 487.2, alpha: 0.6957 }, 0)
        .wait(1)
        .to({ y: 486.35, alpha: 0.7391 }, 0)
        .wait(1)
        .to({ y: 485.45, alpha: 0.7826 }, 0)
        .wait(1)
        .to({ y: 484.6, alpha: 0.8261 }, 0)
        .wait(1)
        .to({ y: 483.75, alpha: 0.8696 }, 0)
        .wait(1)
        .to({ y: 482.85, alpha: 0.913 }, 0)
        .wait(1)
        .to({ y: 482, alpha: 0.9565 }, 0)
        .wait(1)
        .to({ y: 481.1, alpha: 1 }, 0)
        .wait(145)
    );
    // CloudFormation2
    this.instance_2 = new lib.CloudFormation();
    this.instance_2.parent = this;
    this.instance_2.setTransform(
      126.35,
      286.5,
      0.4888,
      0.4888,
      0,
      0,
      0,
      105.2,
      106
    );
    this.instance_2.alpha = 0;
    this.instance_2._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(11)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 119.8, regY: 88.7, x: 133.45, y: 277.6, alpha: 0.0435 }, 0)
        .wait(1)
        .to({ y: 277.15, alpha: 0.087 }, 0)
        .wait(1)
        .to({ y: 276.7, alpha: 0.1304 }, 0)
        .wait(1)
        .to({ y: 276.3, alpha: 0.1739 }, 0)
        .wait(1)
        .to({ y: 275.85, alpha: 0.2174 }, 0)
        .wait(1)
        .to({ y: 275.4, alpha: 0.2609 }, 0)
        .wait(1)
        .to({ y: 275, alpha: 0.3043 }, 0)
        .wait(1)
        .to({ y: 274.55, alpha: 0.3478 }, 0)
        .wait(1)
        .to({ y: 274.1, alpha: 0.3913 }, 0)
        .wait(1)
        .to({ y: 273.7, alpha: 0.4348 }, 0)
        .wait(1)
        .to({ y: 273.25, alpha: 0.4783 }, 0)
        .wait(1)
        .to({ y: 272.8, alpha: 0.5217 }, 0)
        .wait(1)
        .to({ y: 272.35, alpha: 0.5652 }, 0)
        .wait(1)
        .to({ y: 271.95, alpha: 0.6087 }, 0)
        .wait(1)
        .to({ y: 271.5, alpha: 0.6522 }, 0)
        .wait(1)
        .to({ y: 271.05, alpha: 0.6957 }, 0)
        .wait(1)
        .to({ y: 270.65, alpha: 0.7391 }, 0)
        .wait(1)
        .to({ y: 270.2, alpha: 0.7826 }, 0)
        .wait(1)
        .to({ y: 269.75, alpha: 0.8261 }, 0)
        .wait(1)
        .to({ y: 269.35, alpha: 0.8696 }, 0)
        .wait(1)
        .to({ y: 268.9, alpha: 0.913 }, 0)
        .wait(1)
        .to({ y: 268.45, alpha: 0.9565 }, 0)
        .wait(1)
        .to({ y: 268, alpha: 1 }, 0)
        .wait(134)
    );
    // CloudFormation3
    this.instance_3 = new lib.CloudFormation();
    this.instance_3.parent = this;
    this.instance_3.setTransform(
      492.05,
      268.05,
      0.425,
      0.425,
      0,
      0,
      0,
      105.2,
      106
    );
    this.instance_3.alpha = 0;
    this.instance_3._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(23)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 119.8, regY: 88.7, x: 498.2, y: 260.25, alpha: 0.0417 }, 0)
        .wait(1)
        .to({ y: 259.85, alpha: 0.0833 }, 0)
        .wait(1)
        .to({ y: 259.4, alpha: 0.125 }, 0)
        .wait(1)
        .to({ y: 259, alpha: 0.1667 }, 0)
        .wait(1)
        .to({ y: 258.6, alpha: 0.2083 }, 0)
        .wait(1)
        .to({ y: 258.15, alpha: 0.25 }, 0)
        .wait(1)
        .to({ y: 257.75, alpha: 0.2917 }, 0)
        .wait(1)
        .to({ y: 257.35, alpha: 0.3333 }, 0)
        .wait(1)
        .to({ y: 256.9, alpha: 0.375 }, 0)
        .wait(1)
        .to({ y: 256.5, alpha: 0.4167 }, 0)
        .wait(1)
        .to({ y: 256.1, alpha: 0.4583 }, 0)
        .wait(1)
        .to({ y: 255.65, alpha: 0.5 }, 0)
        .wait(1)
        .to({ y: 255.25, alpha: 0.5417 }, 0)
        .wait(1)
        .to({ y: 254.85, alpha: 0.5833 }, 0)
        .wait(1)
        .to({ y: 254.4, alpha: 0.625 }, 0)
        .wait(1)
        .to({ y: 254, alpha: 0.6667 }, 0)
        .wait(1)
        .to({ y: 253.6, alpha: 0.7083 }, 0)
        .wait(1)
        .to({ y: 253.15, alpha: 0.75 }, 0)
        .wait(1)
        .to({ y: 252.75, alpha: 0.7917 }, 0)
        .wait(1)
        .to({ y: 252.35, alpha: 0.8333 }, 0)
        .wait(1)
        .to({ y: 251.9, alpha: 0.875 }, 0)
        .wait(1)
        .to({ y: 251.5, alpha: 0.9167 }, 0)
        .wait(1)
        .to({ y: 251.1, alpha: 0.9583 }, 0)
        .wait(1)
        .to({ y: 250.65, alpha: 1 }, 0)
        .wait(121)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(
    332.4,
    302.8,
    251.30000000000007,
    302.90000000000003
  );
  // library properties:
  lib.properties = {
    id: '18AC5C1A7B334A77A37B15BE5EA36FC5',
    width: 600,
    height: 600,
    fps: 24,
    color: '#231F20',
    opacity: 0.0,
    manifest: [
      {
        src: 'https://i.ibb.co/QQTTzbc/TF-Cloud-Animation-2-atlas.png',
        id: 'TF_CloudAnimation_2_atlas_'
      }
    ],
    preloads: []
  };
  // bootstrap callback support:
  (lib.Stage = function(canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();
  p.setAutoPlay = function(autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function() {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function(ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function(ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function() {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };
  p.getTimelinePosition = function() {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };
  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }
  an.bootstrapCallback = function(fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (let i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };
  an.compositions = an.compositions || {};
  an.compositions['18AC5C1A7B334A77A37B15BE5EA36FC5'] = {
    getStage: function() {
      return exportRoot.getStage();
    },
    getLibrary: function() {
      return lib;
    },
    getSpriteSheet: function() {
      return ss;
    },
    getImages: function() {
      return img;
    }
  };
  an.compositionLoaded = function(id) {
    an.bootcompsLoaded.push(id);
    for (let j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };
  an.getComposition = function(id) {
    return an.compositions[id];
  };
  an.makeResponsive = function(
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    let lastW,
      lastH,
      lastS = 1;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      const w = lib.properties.width,
        h = lib.properties.height;
      const iw = window.innerWidth,
        ih = window.innerHeight;
      const pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h;

      let sRatio = 1;

      if (isResp) {
        if (
          (respDim === 'width' && lastW === iw) ||
          (respDim === 'height' && lastH === ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function(container) {
        container.style.width = w * sRatio + 'px';
        container.style.height = h * sRatio + 'px';
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };

  canvas = document.getElementById('canvas');
  anim_container = document.getElementById('animation_container');
  dom_overlay_container = document.getElementById('dom_overlay_container');
  const comp = an.getComposition('18AC5C1A7B334A77A37B15BE5EA36FC5');
  const loader = new createjs.LoadQueue(false);
  loader.addEventListener('fileload', function(evt) {
    handleFileLoad(evt, comp);
  });
  loader.addEventListener('complete', function(evt) {
    handleComplete(evt, comp, an);
  });
  lib = comp.getLibrary();
  loader.loadManifest(lib.properties.manifest);
};

function handleFileLoad(evt, comp) {
  const images = comp.getImages();
  if (evt && evt.item.type === 'image') {
    images[evt.item.id] = evt.result;
  }
}

function handleComplete(evt, comp, AdobeAn) {
  //This function is always called, irrespective of the content. You can use the variable 'stage' after it is created in token create_stage.
  const lib = comp.getLibrary();
  const ss = comp.getSpriteSheet();
  const queue = evt.target;
  const ssMetadata = lib.ssMetadata;
  for (let i = 0; i < ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
      images: [queue.getResult(ssMetadata[i].name)],
      frames: ssMetadata[i].frames
    });
  }
  exportRoot = new lib.TF_CloudAnimation_2();
  stage = new lib.Stage(canvas);
  //Registers the 'tick' event listener.
  fnStartAnimation = function() {
    stage.addChild(exportRoot);
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener('tick', stage);
  };
  //Code to support hidpi screens and responsive scaling.
  AdobeAn.makeResponsive(true, 'both', true, 1, [
    canvas,
    anim_container,
    dom_overlay_container
  ]);
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}
