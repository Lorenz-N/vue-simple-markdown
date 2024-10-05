import { Strong } from './strong'
import { Italic } from './italic'
import { Img } from './img'
import { Link } from './link'
import { Heading } from './heading'
import { HorizontalLine } from './horizontal-line'
import { Lists } from './lists'
import { Emoji } from './emoji'
import { InlineCode } from './inline-code'
import { Highlight } from './highlight'
import { Linkify } from './linkify'
import { Quote } from './quote'
import { Table } from './table'

const RULES = [
  Highlight,
  InlineCode,
  HorizontalLine,
  Quote,
  Strong,
  Italic,
  Img,
  Link,
  Linkify,
  Heading,
  Emoji,
  Lists,
  Table
]

export {
  RULES,
  Highlight,
  InlineCode,
  HorizontalLine,
  Quote,
  Strong,
  Italic,
  Img,
  Link,
  Linkify,
  Heading,
  Emoji,
  Lists,
  Table
}
