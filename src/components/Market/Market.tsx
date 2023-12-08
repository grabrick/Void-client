import { FC, Key, useState } from "react";
import PresetCard from "../UI/PresetCard/PresetCard";
import m from "./Market.module.scss";
import PageRouter from "../UI/PageRouter/PageRouter";
import PaymentConfirm from "../UI/Popup/PaymentConfirm/PaymentConfirm";
import { PresetService } from "@/services/preset/preset.services";
import SearchPopup from "../UI/Popup/SearchPopup/SearchPopup";

type TProps = {
  marketValue: any,
  setIsOpened: (value: boolean) => void,
  isOpened: boolean
}

type TPreset = {
  _id: Key | null | undefined | any;
  image: string | null;
  name: string;
  desc: string;
  price: {
    count: number,
    currency: string
  };
}

const Market:FC<TProps> = ({ marketValue, setIsOpened, isOpened }) => {
  const [active, setActive] = useState<boolean>(false);
  const [currentPreset, setCurrentPreset] = useState<any>(null)

  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <PageRouter title={"Market"} subTitle={null} />

        <div className={m.cardWrapper}>
          {marketValue.map(
            (items: TPreset) => (
              <PresetCard
                key={items._id}
                id={items._id}
                setActive={setActive}
                setCurrentPreset={setCurrentPreset}
                active={active}
                image={items.image}
                name={items.name}
                desc={items.desc}
                price={items.price}
                delay={0.7}
                duration={0.5}
              />
            )
          )}
        </div>
      </div>
      {isOpened && <SearchPopup setIsOpened={setIsOpened} isOpened={isOpened} />}
      {active && <PaymentConfirm setActive={setActive} currentPreset={currentPreset} />}
    </div>
  );
};

export default Market;
