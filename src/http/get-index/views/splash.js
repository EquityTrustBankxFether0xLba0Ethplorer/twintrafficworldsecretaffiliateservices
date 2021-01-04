import PhotoCredit from './photo-credit.js'

export default function Aside(props = {}) {
  let photographer = props.photographer || ''
  let service = props.service || ''
  let credit = props.credit || ''

  return `
<aside
  class="
    position-relative
    height-15
    height-100-large
    background-image
    background-position-center
    background-size-cover
    flex-grow-1-large
  "
>
  ${PhotoCredit({
    photographer,
    service,
    credit
  })}
</aside>
  `
}