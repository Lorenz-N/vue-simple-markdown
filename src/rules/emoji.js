import NodeEmoji from 'node-emoji'

const SHORTCUTS = {
  angry: ['>:(', '>:-('],
  blush: [':")', ':-")'],
  broken_heart: ['</3', '<\\3'], // eslint-disable-line
  confused: [':/', ':-/', ':\\', ':-\\'],
  cry: [":'(", ":'-(", ':,(', ':,-('],
  frowning: [':(', ':-('],
  heart: ['<3'],
  imp: [']:(', ']:-('],
  innocent: ['o:)', 'O:)', 'o:-)', 'O:-)', '0:)', '0:-)'],
  joy: [":')", ":'-)", ':,)', ':,-)', ":'D", ":'-D", ':,D', ':,-D'],
  kissing: [':*', ':-*'],
  laughing: ['x-)', 'X-)'],
  neutral_face: [':|', ':-|'], // eslint-disable-line
  open_mouth: [':o', ':-o', ':O', ':-O'], // eslint-disable-line
  rage: [':@', ':-@'],
  smile: [':D', ':-D'],
  smiley: [':)', ':-)'],
  smiling_imp: [']:)', ']:-)'], // eslint-disable-line
  sob: [":,'(", ":,'-(", ';(', ';-('],
  stuck_out_tongue: [':P', ':-P'], // eslint-disable-line
  sunglasses: ['8-)', 'B-)'],
  sweat: [',:(', ',:-('],
  sweat_smile: [',:)', ',:-)'], // eslint-disable-line
  unamused: [':s', ':-S', ':z', ':-Z', ':$', ':-$'],
  wink: [';)', ';-)']
}

export class Emoji {
  static get RULE_NAME () { return 'emoji' }

  static parse (source) {
    for (const emoji in SHORTCUTS) {
      SHORTCUTS[emoji].forEach((shortcut) => {
        shortcut = shortcut.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
        let regex = `(^|\\s)${shortcut}(?![\\w\\/])`
        regex = new RegExp(regex, 'g')

        source = source.replace(regex, (all, before) => {
          return `${before}:${emoji}:`
        })
      })
    }

    return NodeEmoji.emojify(source)
  }
}
