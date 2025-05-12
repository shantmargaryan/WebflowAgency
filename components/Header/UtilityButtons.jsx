import { UtilButtons, PhoneNumber } from "./styled";
import MultiLangButton from "../MultiLangButton";
import ThemeSwicher from "../ThemeSwicher";
import CallIcon from "@mui/icons-material/Call";

export default function UtilityButtons() {
  return (
    <UtilButtons>
      <PhoneNumber href="tel:+37455212205">
        <CallIcon />
      </PhoneNumber>
      <MultiLangButton />
      <ThemeSwicher />
    </UtilButtons>
  );
}