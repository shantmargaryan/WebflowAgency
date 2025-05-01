import { useTranslations } from "next-intl";
import {
  TeamSection,
  TeamContainer,
  TeamTitle,
  TeamList,
  TeamItem,
  TeamImg,
  TeamName,
  TeamPosition
} from "./styled";


export default function AboutTeam() {
  const t = useTranslations("AboutTeam")
  const t2 = useTranslations("AboutTeam.Items")


  return (
    <TeamSection>
      <TeamContainer>
        <TeamTitle>
          {t("title")}
        </TeamTitle>
        <TeamList>
          <TeamItem>
            <TeamImg src="/imgs/ShantMargaryan.jpg" alt="team"
              width={100}
              height={100}
            />
            <TeamName>
              {t2("name")}
            </TeamName>
            <TeamPosition>
              {t2("position")}
            </TeamPosition>
          </TeamItem>
          <TeamItem>
            <TeamImg src="/imgs/KarenNersisyan.jpg" alt="team"
              width={100}
              height={100}
            />
            <TeamName>
              {t2("secoundname")}
            </TeamName>
            <TeamPosition>
              {t2("secoundposition")}
            </TeamPosition>
          </TeamItem>
          <TeamItem>
            <TeamImg src="/imgs/VahanHovhannisian.jpg" alt="team"
              width={100}
              height={100}
            />
            <TeamName>
              {t2("thirdname")}
            </TeamName>
            <TeamPosition>
              {t2("thirdposition")}
            </TeamPosition>
          </TeamItem>
        </TeamList>
      </TeamContainer>
    </TeamSection>
  )
}