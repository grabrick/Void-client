import { FC, useEffect, useState } from "react";
import m from "./PaymentConfirm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import CheckBox from "../../CheckBox/CheckBox";
import check from "@/assets/icons/Check.svg";
import Image from "next/image";

type TProps = {
  setActive: (value: boolean) => void;
};

const PaymentConfirm: FC<TProps> = ({ setActive }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeBtn, setActiveBtn] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => {
    // AuthService.login(data.Email, data.Password).then(res => {
    //   if(res.status === 201) {
    //     router.push('/')
    //   }
    // })
  };

  useEffect(() => {
    if (isActive === true) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
    console.log("123");
  }, [isActive]);

  return (
    <div className={m.container} onClick={() => setActive(false)}>
      <div className={m.wrapper}>
        <div className={m.modal} onClick={(e) => e.stopPropagation()}>
          <h1 className={m.title}>Payment Confirm</h1>

          <form className={m.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={m.nameWrapper}>
              <input
                className={m.input}
                placeholder="First Name"
                type="text"
                {...register("FName", {
                  required: true,
                })}
              />
              <input
                className={m.input}
                placeholder="Last Name"
                type="text"
                {...register("LName", {
                  required: true,
                })}
              />
            </div>
            <input
              className={m.input}
              placeholder="Email"
              type="text"
              {...register("Email", {
                required: true,
              })}
            />
            <div className={m.licenseWrapper}>
              <p className={m.license}>
                {`by accepting the terms of the end user license agreement by
              clicking on the appropriate "i accept the terms of the agreement"
              button below or by downloading, installing, activating or using
              the software, you acknowledge that you have read this agreement,
              understand its contents and agree to abide by its terms.`}
              </p>
              <CheckBox
                label="I agree"
                setIsActive={setIsActive}
                isActive={isActive}
              />
            </div>

            {activeBtn && (
              <div className={m.confirmWrapper}>
                <button className={m.confirmBtn}>
                  <Image className={m.btnIcon} src={check} alt="" />
                  <p className={m.btnText}>Confirm</p>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirm;
