import { SocialList, Item } from "./styled"; 
import { Link } from "@/i18n/navigation";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';



export default function Socials() {
  return (
    <SocialList>
      <Item>
        <Link href="https://www.facebook.com/" target="_blank">
          <FacebookOutlinedIcon />
        </Link>
      </Item>
      <Item>
        <Link href="https://www.instagram.com/" target="_blank">
          <InstagramIcon />
        </Link>
      </Item>
    </SocialList>
  );
}