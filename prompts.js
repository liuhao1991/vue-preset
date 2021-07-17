/**
 *
 * @authors liwb (you@example.org)
 * @date    2019-04-29 09:31
 * @version $ IIFE
 */
const pcUI2 = [
  {
    name: 'Element UI',
    value: 'element-ui'
  },
  // {
  //   name: 'ant-design-vue',
  //   value: 'ant'
  // },
  {
    name: 'none',
    value: 'none'
  }
];

// 没有用vue3实现
const pcUI3 = [
  {
    name: 'Element Plus',
    value: 'element-plus'
  },
  // {
  //   name: 'iView',
  //   value: 'iview'
  // },
  {
    name: 'none',
    value: 'none'
  }
];

module.exports = [
  {
    name: 'preset',
    type: 'list',
    message: 'Please pick a preset',
    choices: [
      {
        name: 'Vue 2',
        value: 'v2'
      },
      {
        name: 'Vue 3',
        value: 'v3'
      }
    ],
    default: 'v2'
  },
  {
    name: 'language',
    type: 'list',
    message: 'Choose whether your develop language is a JS or TS(default:JS)',
    choices: [
      {
        name: 'JS',
        value: 'js'
      },
      {
        name: 'TS',
        value: 'ts'
      }
    ],
    default: 'js'
  },
  {
    name: 'application',
    type: 'list',
    message: 'Choose whether your app is a PC or a mobile(default:mobile)',
    choices: [
      {
        name: 'PC',
        value: 'pc'
      },
      {
        name: 'mobile',
        value: 'mobile'
      },
    ],
    default: 'pc'
  },
  {
    name: 'ui-framework',
    type: 'list',
    message: 'Choice UI Framework(default:none)',
    choices: (answers) => (answers.preset === 'v2' ? pcUI2 : pcUI3),
    when: (answers) => answers.application === 'pc',
    default: 'none'
  },
  {
    name: 'mobile-ui-framework',
    type: 'list',
    message: 'Choice Mobile UI Framework(default:none)',
    choices: [
      {
        name: 'Vant',
        value: 'vant'
      },
      {
        name: 'none',
        value: 'none'
      }
    ],
    when: (answers) => answers.application === 'mobile',
    default: 'none'
  },
];
