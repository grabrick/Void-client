import { FC } from "react";
import m from "./PresetCard.module.scss";
import Reveal from "../Reveal/Reveal";
import SlicedReveal from "../Reveal/SlicedReveal";
import Image from "next/image";

type TPrice = {
  count: number,
  currency: string
}

type TCart = {
  image: string | null;
  name: string;
  desc: string;
  price: TPrice;
  delay: number;
  duration: number;
  setActive: (value: boolean) => void;
  active: boolean;
};

const PresetCard: FC<TCart> = ({
  image,
  name,
  desc,
  price,
  delay,
  duration,
  setActive,
  active,
}) => {
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
          <button className={m.buyButton} onClick={() => setActive(true)}>Buy</button>
        </div>
      </div>
    </SlicedReveal>
  );
};

export default PresetCard;
