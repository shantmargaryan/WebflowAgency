import { useTranslations } from "next-intl";
import { MoveRight as ArrowRight } from "lucide-react";
import { ProjectSection, ProjectContainer, Content, ProjectTitle, Link, ImgLink, ViewMore, ProjectImg, List, Item, ImgBox, ItemContent, ItemTitle, ItemParagraph, ItemLink } from "./styled";
export default function HomeProject() {
  const t = useTranslations("HomeProjects")
  const t2 = useTranslations("HomeProjects.Items")

  return (
    <ProjectSection>
      <ProjectContainer>
        <Content>
          <ProjectTitle>
            {t("title")}
          </ProjectTitle>
          <ViewMore href="/projects">
            {t("link")}
            <ArrowRight />
          </ViewMore>
        </Content>
        <List>
          <Item>
            <ItemContent>
              <ItemTitle>
                {t2("title")}
              </ItemTitle>
              <ItemParagraph>
                {t2("description")}
              </ItemParagraph>
              <ItemLink href="https://tosno-bruschatka.ru/"
                target="_blank">
                {t2("link")}
                <ArrowRight />
              </ItemLink>
            </ItemContent>
            <ProjectImg src="/imgs/HomeprojectImg1.png"
              alt="project"
              width={700}
              height={700}
              style={{ width: '100%', height: 'auto' }}
            />
          </Item>
          <ImgBox>
            <Item>
              <ItemContent>
                <ItemTitle>
                  {t2("secoundTitle")}
                </ItemTitle>
                <ItemLink href="https://stav-ukladka.ru/"
                  target="_blank">
                  {t2("link")}
                  <ArrowRight />
                </ItemLink>
              </ItemContent>
              <ProjectImg src="/imgs/HomeprojectImg2.png" alt="project"
                width={700}
                height={700}
                style={{ width: '100%', height: 'auto' }}
              />
            </Item>
            <Item>
              <ImgLink href="/worksSingle">
                <ProjectImg src="/imgs/projectImg3.png" alt="project"
                  target="_blank"
                  width={700}
                  height={700}
                  style={{ width: '100%', height: 'auto' }}
                />
              </ImgLink>
            </Item>
          </ImgBox>
        </List>
      </ProjectContainer>
    </ProjectSection>
  )
}