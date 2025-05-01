"use client";
import { useTranslations } from "next-intl";
import { imgs } from "./images";
import { useEffect, useState } from "react";
import {
  FeaturesSection,
  FeaturesContainer,
  FeaturesTitle,
  FeaturesList,
  FeaturesItem,
  FeaturesText,
  BeforeTitle,
  FeaturesImg
} from "./styled";


export default function FeaturesItems() {
  const t = useTranslations("FeaturesItems");
  const [featuresItems, setFeaturesItems] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch("/api/featuresItems");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { featuresItems } = await response.json();
        setFeaturesItems(featuresItems);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };

    fetchFeatures();
  }, []);


  return (
    <FeaturesSection>
      <FeaturesContainer>
        <FeaturesList>
          {featuresItems.map((post) => (
            <FeaturesItem key={post.id}>
              <div>
                <BeforeTitle>
                  {t(post?.beforeTitle)}
                </BeforeTitle>
                <FeaturesTitle>{t(post?.title)}</FeaturesTitle>
                <FeaturesText>{t(post?.description)}</FeaturesText>
              </div>
              <FeaturesImg src={imgs[post?.id - 1]?.path}
                alt={imgs[post?.id - 1]?.alt}
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }}
              />
            </FeaturesItem>
          ))}
        </FeaturesList>
      </FeaturesContainer>
    </FeaturesSection>
  )
}