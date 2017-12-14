export default {
  name: 'Scatter',
  props: [
    {
      name: 'legendType',
      type: `'line' | 'square' | 'rect'| 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none'`,
      defaultVal: `'circle'`,
      isOptional: true,
      desc: {
        'en-US': 'The type of icon in legend.  If set to \'none\', no legend item will be rendered.',
        'zh-CN': '对应的图例 icon 的类型。',
      },
    }, {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The id of x-axis which is corresponding to the data.',
         'zh-CN': '散点图对应的 x 轴的 id 。',
      },
    }, {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The id of y-axis which is corresponding to the data.',
        'zh-CN': '散点图对应的 y 轴的 id 。',
      },
    }, {
      name: 'zAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The id of z-axis which is corresponding to the data.',
        'zh-CN': '散点图对应的 z 轴的 id 。',
      },
    }, {
      name: 'line',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US': 'If false set, line will not be drawn. If true set, line will be drawn which have the props calculated internally. If object set, line will be drawn which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom line element. If set a function, the function will be called to render Customized line.',
        'zh-CN': '如果值为 false，不会渲染相应的曲线。当值为 true，会根据 Scatter 的属性配置来展示曲线。当值为一个对象的时候，会把这个对象解析为 曲线 的属性，来覆盖默认属性。当值是一个 React Element ，会克隆这个 React Element 来渲染“曲线”。当值是一个 函数 时，会调用这个函数去渲染自定义的“曲线”。',
      },
      format: [
        `<Scatter data={data} line />`,
        `<Scatter data={data} line={{stroke: 'red', strokeWidth: 2}} />`,
        `<Scatter data={data} line={<CustomizedLine />} />`,
      ],
      examples: [{
        name: 'A scatter chart with joint line',
        url: '/examples/JointLineScatterChart',
      }],
    }, {
      name: 'shape',
      type: '\'circle\' | \'cross\' | \'diamond\' | \'square\' | \'star\' | \'triangle\' | \'wye\' | ReactElement | Function',
      defaultVal: '\'circle\'',
      isOptional: false,
      desc: {
        'en-US': 'If a string set, specified symbol will be used to show scatter item. If ReactElement set, the option can be the custom scatter item element. If set a function, the function will be called to render customized scatter item.',
        'zh-CN': '散点的符号类型。当值是一个 React Element ，会克隆这个 React Element 来渲染“散点”。当值是一个 函数 时，会调用这个函数去渲染自定义的“散点”。'
      },
      format: [
        `<Scatter data={data} shape="cross" />`,
        `<Scatter data={data} shape={<CustomizedShape/>} />`,
        `<Scatter data={data} shape={<renderCustomizedShape/>} />`,
      ],
      examples: [{
        name: 'A scatter chart with joint line',
        url: '/examples/JointLineScatterChart',
      }],
    }, {
      name: 'lineType',
      type: `'joint' , 'fitting'`,
      defaultVal: '\'joint\'',
      isOptional: false,
      desc: {
        'en-US': 'If \'joint\' set, line will generated by just jointing all the points. If \'fitting\' set, line will be generated by fitting algorithm.',
        'zh-CN': '当值为 "joint"，会通过连接所有散点来生成曲线。当值为“fitting”时，会使用拟合算法绘制曲线。'
      },
    }, {
      name: 'points',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The coordinates of all the scatters.',
        'zh-CN': '所有散点的坐标。'
      },
      format: [`[{ cx: 12, cy: 12, r: 4, payload: {x: 12, y: 45, z: 9 }}]`],
    }, {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true in CSR, and false in SSR',
      isOptional: false,
      desc: {
        'en-US': 'If set false, animation of scatters will be disabled.',
        'zh-CN': '当值为 false，不开启动画。',
      }
    }, {
      name: 'animationBegin',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: {
        'en-US': 'Specifies when the animation should begin, the unit of this option is ms.',
        'zh-CN': '声明组件挂载或更新后，开始运行动画的间隔时长，单位为毫秒。',
      },
    }, {
      name: 'animationDuration',
      type: 'Number',
      defaultVal: 1500,
      isOptional: false,
      desc: {
        'en-US': 'Specifies the duration of animation, the unit of this option is ms.',
        'zh-CN': '声明动画的运行时长，单位为毫秒。',
      },
    }, {
      name: 'animationEasing',
      type: `'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'`,
      defaultVal: `'ease'`,
      isOptional: false,
      desc: {
        'en-US': 'The type of easing function.',
        'zh-CN': '动画缓动函数的类型。',
      },
    }, {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the symbols in this group',
        'zh-CN': '散点 click 事件的回调函数。',
      },
    }, {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousedown on the symbols in this group',
        'zh-CN': '散点 mousedown 事件的回调函数。',
      },
    }, {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseup on the symbols in this group',
        'zh-CN': '散点 mouseup 事件的回调函数。',
      },
    }, {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove on the symbols in this group',
        'zh-CN': '散点 mousemove 事件的回调函数。',
      },
    }, {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseover on the symbols in this group',
        'zh-CN': '散点 mouseover 事件的回调函数。',
      },
    }, {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseout on the symbols in this group',
        'zh-CN': '散点 mouseout 事件的回调函数。',
      },
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of moustenter on the symbols in this group',
        'zh-CN': '散点 moustenter 事件的回调函数。',
      },
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the symbols in this group',
        'zh-CN': '散点 mouseleave 事件的回调函数。',
      },
    },
  ],
  parentComponents: [
    'ScatterChart'
  ],
  childrenComponents: [
    'Cell', 'LabelList', 'ErrorBar',
  ],
};
