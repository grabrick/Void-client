import { FC } from 'react';
import m from './SearchPopup.module.scss'
import Image from 'next/image';
import Loupe from '@/assets/icons/Loupe.svg'

type TProps = {
  setIsOpened: (value: boolean) => void,
  isOpened: boolean
}

const SearchPopup:FC<TProps> = ({ setIsOpened, isOpened }) => {
  return (
    <div className={m.container} onClick={() => setIsOpened(!isOpened)}>
      <div className={m.wrapper}>
        <div className={m.modal} onClick={(e) => e.stopPropagation()}>
            <Image src={Loupe} alt='' width={25} height={25} />
            <input className={m.input} placeholder='Search...'></input>
        </div>
      </div>
    </div>
  );
}

export default SearchPopup;