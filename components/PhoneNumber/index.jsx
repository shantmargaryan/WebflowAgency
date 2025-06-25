import {
  Number
} from "./styled"

export default function PhoneNumber({ number }) {

  return (
    <Number href="tel:+37455212205">
      {number}
    </Number>
  )
}