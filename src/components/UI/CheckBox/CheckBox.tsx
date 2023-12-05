import { FC } from 'react';
import m from './CheckBox.module.scss'

type TProps = {
  label: string,
  setIsActive: (value: boolean) => void,
  isActive: boolean
}

const CheckBox:FC<TProps> = ({label, setIsActive, isActive}) => {
  return (
    <div className={m.checkbox}>
      <input className={m.input} onClick={() => setIsActive(!isActive)} id="checkbox" type="checkbox" />
      <label className={m.label} htmlFor="checkbox">{label}</label>
    </div>
  );
};

export default CheckBox;
