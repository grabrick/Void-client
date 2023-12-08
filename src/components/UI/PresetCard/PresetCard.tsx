import { FC, Key } from "react";
import m from "./PresetCard.module.scss";
import Reveal from "../Reveal/Reveal";
import SlicedReveal from "../Reveal/SlicedReveal";
import Image from "next/image";

type TPrice = {
  count: number;
  currency: string;
};

type TCart = {
  image: string | null;
  name: string;
  id: string;
  desc: string;
  price: TPrice;
  delay: number;
  duration: number;
  setActive: (value: boolean) => void;
  setCurrentPreset: (value: any) => void;
  active: boolean;
};

const PresetCard: FC<TCart> = ({
  image,
  id,
  name,
  desc,
  price,
  delay,
  duration,
  setActive,
  setCurrentPreset,
  active,
}) => {
  const submit = () => {
    const presetData = { id: id, name: name, price: price };
    setActive(true);
    setCurrentPreset(presetData);
  };
  return (
    <SlicedReveal delay={delay} duration={duration}>
      <div className={m.container}>
        <h4 className={m.title}>{name} preset</h4>
        <Image
          src={image ?? ""}
          className={m.image}
          alt="alt"
          width={400}
          height={300}
        />
        <div className={m.infoWrapper}>
          <p className={m.price}>price: {price.count}$</p>
          <button className={m.buyButton} onClick={() => submit()}>
            Buy
          </button>
        </div>
      </div>
    </SlicedReveal>
  );
};

export default PresetCard;
