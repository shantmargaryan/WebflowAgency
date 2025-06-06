"use client"
import { useTranslations } from "next-intl";
import { MoveRight as ArrowRight } from "lucide-react";
import { ProjectSection, ProjectContainer, Content, ProjectTitle, ImgLink, ViewMore, List, Item, ImgBox, ItemContent, ItemTitle, ItemParagraph, ItemLink } from "./styled";
import Image from "next/image";
import { useState } from "react";
import IntersectionComponent from "@/Utils/Intersection";

export default function HomeProject() {
  const t = useTranslations("HomeProjects");
  const t2 = useTranslations("HomeProjects.Items");
  const [imageLoading, setImageLoading] = useState(true);
  const [isVisible, setisVisible] = useState(false);

  const handleIntersect = () => {
    setisVisible(true);
  };

  return (
    <ProjectSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <ProjectContainer>
        <Content>
          <ProjectTitle isVisible={isVisible}>
            {t("title")}
          </ProjectTitle>
          <ViewMore href="/projects" isVisible={isVisible}>
            {t("link")}
            <ArrowRight />
          </ViewMore>
        </Content>
        <List>
          <Item isVisible={isVisible}>
            <ItemContent>
              <ItemTitle>
                {t2("title")}
              </ItemTitle>
              <ItemParagraph>
                {t2("description")}
              </ItemParagraph>
              <ItemLink href="https://tosno-bruschatka.ru/" target="_blank">
                {t2("link")}
                <ArrowRight />
              </ItemLink>
            </ItemContent>
            <Image
              src="/imgs/HomeprojectImg1.png"
              alt="project"
              width={700}
              height={700}
              style={{ width: '100%', height: 'auto' }}
              onLoadingComplete={() => setImageLoading(false)}
              priority={false}
            />
          </Item>
          <ImgBox>
            <Item isVisible={isVisible}>
              <ItemContent>
                <ItemTitle>
                  {t2("secoundTitle")}
                </ItemTitle>
                <ItemLink href="https://stav-ukladka.ru/" target="_blank">
                  {t2("link")}
                  <ArrowRight />
                </ItemLink>
              </ItemContent>
              <Image
                src="/imgs/HomeprojectImg2.png"
                alt="project"
                width={700}
                height={700}
                style={{ width: '100%', height: 'auto' }}
                onLoadingComplete={() => setImageLoading(false)}
                priority={false}
              />
            </Item>
            <Item isVisible={isVisible}>
              <ImgLink href="https://shantmargaryan.github.io/PopYRus/" target="_blank">
                <Image
                  src="/imgs/PapYRus.png"
                  alt="project"
                  width={700}
                  height={700}
                  style={{ width: '100%', height: 'auto' }}
                  onLoadingComplete={() => setImageLoading(false)}
                  priority={false}
                />
              </ImgLink>
            </Item>
          </ImgBox>
        </List>
      </ProjectContainer>
    </ProjectSection>
  );
}