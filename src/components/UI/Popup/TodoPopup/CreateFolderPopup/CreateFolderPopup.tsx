import { FC } from 'react';
import m from './CreateFolderPopup.module.scss'

type TProps = {
  isButtonActions: boolean,
  setIsButtonActions: (val: {type: null | string, flag: boolean}) => void,
}

const CreateFolderPopup:FC<TProps> = ({ setIsButtonActions, isButtonActions }) => {
  console.log("123123, i`m here");
  
  return (
    <section className={m.container}>

    </section>
  )
}

export default CreateFolderPopup;