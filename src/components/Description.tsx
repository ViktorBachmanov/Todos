import React from "react";
import { descRu, descEn } from "./desc_translate";

export enum Lang {
  EN = "en",
  RU = "ru",
}

interface Props {
  lang: Lang;
}

export default function Description(props: Props) {
  const { lang } = props;

  const descSrc = lang === Lang.EN ? descEn : descRu;

  return (
    <>
      <h1 className="header">{descSrc.header}</h1>

      {descSrc.paragraphs.map((text, index) => {
        return <p key={index}>{text}</p>;
      })}
    </>
  );
}
