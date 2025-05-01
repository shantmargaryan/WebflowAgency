"use client";
import { IKImage } from "imagekitio-next";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Images(props) {
  return <IKImage
    loading="lazy"
    urlEndpoint={urlEndpoint}
    {...props} />;
}