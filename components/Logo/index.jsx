import { LogoLink, LogoImg } from "./styled"
export default function Logo() {
  return (
    <LogoLink href="/">
      <LogoImg path="/svg/logo.svg" alt="logo"
        width={120}
        height={120} />
    </LogoLink>
  )
}