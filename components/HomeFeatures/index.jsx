"use client";
import { useTranslations } from "next-intl";
import { svgs } from "./svgs";
import { FeaturesSection, FeaturesContainer, Content, BeforeTitle, FeaturesTitle, List, Item, Icon, ItemTitle, ItemParagraph } from "./styled";
import { useEffect, useState } from "react";
import IntersectionComponent from "@/Utils/Intersection";

export default function HomeFeatures() {
  const t = useTranslations("HomeFeatures");
  const t2 = useTranslations("HomeFeatures.Items");
  const [homeFeatures, setHomeFeatures] = useState([]);
  const [imageLoading, setImageLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        // Check if data is cached in sessionStorage
        const cachedData = sessionStorage.getItem("homeFeatures");
        if (cachedData) {
          setHomeFeatures(JSON.parse(cachedData));
          return;
        }

        // Fetch data from the API if not cached
        const response = await fetch("/api/homeFeatures");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { homeFeatures: features } = await response.json();

        // Cache the data in sessionStorage
        sessionStorage.setItem("homeFeatures", JSON.stringify(features));
        setHomeFeatures(features);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <FeaturesSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <FeaturesContainer>
        <Content isVisible={isVisible}>
          <BeforeTitle>
            {t("beforeTitle")}
          </BeforeTitle>
          <FeaturesTitle>
            {t("title")}
          </FeaturesTitle>
        </Content>
        <List>
          {
            homeFeatures.map(({ id, title, description }) => (
              <Item key={id} isVisible={isVisible}>
                <Icon
                  src={svgs[id - 1].path}
                  alt="icons"
                  width={32}
                  height={32}
                  onLoad={() => setImageLoading(false)}
                  imageLoading={imageLoading}
                  priority={false}
                />
                <ItemTitle>
                  {t2(title)}
                </ItemTitle>
                <ItemParagraph>
                  {t2(description)}
                </ItemParagraph>
              </Item>
            ))
          }
        </List>
      </FeaturesContainer>
    </FeaturesSection>
  );
}
