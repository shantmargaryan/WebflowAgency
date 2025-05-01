"use client";
import { useTranslations } from "next-intl";
import { svgs } from "./svgs";
import { FeaturesSection, FeaturesContainer, Content, BeforeTitle, FeaturesTitle, List, Item, Icon, ItemTitle, ItemParagraph } from "./styled";
import { useEffect, useState } from "react";

export default function HomeFeatures() {
  const t = useTranslations("HomeFeatures");
  const t2 = useTranslations("HomeFeatures.Items");
  const [homeFeatures, setHomeFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch("/api/homeFeatures");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { homeFeatures: features } = await response.json();
        setHomeFeatures(features);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <FeaturesSection>
      <FeaturesContainer>
        <Content>
          <BeforeTitle>
            {t("beforeTitle")}
          </BeforeTitle>
          <FeaturesTitle>
            {t("title")}
          </FeaturesTitle>
        </Content>
        <List>
          {homeFeatures.map(({ id, title, description }) => (
            <Item key={id}>
              <Icon
                path={svgs[id - 1].path}
                alt="icons"
                width={32}
                height={32}
              />
              <ItemTitle>
                {t2(title)}
              </ItemTitle>
              <ItemParagraph>
                {t2(description)}
              </ItemParagraph>
            </Item>
          ))}
        </List>
      </FeaturesContainer>
    </FeaturesSection>
  )
}
