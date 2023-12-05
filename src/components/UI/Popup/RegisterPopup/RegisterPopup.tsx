import { FC, useState } from "react";
import m from "./RegisterPopup.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import OpenEye from "@/assets/icons/OpenEYE.svg";
import CloseEye from "@/assets/icons/CloseEYE.svg";
import AxiosInstance from "../../../../api/interceptors";
import axios from "axios";
import { AuthService } from "@/services/auth/auth.services";
import { useRouter } from "next/router";

type TLogin = {
  name: string;
  surname: string;
  email: string;
  password: string;
  repeatPassword: string;
};

type TProps = {
  setChange: (value: boolean) => void;
};

const RegisterPopup: FC<TProps> = ({ setChange }) => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TLogin>();
  const onSubmit: SubmitHandler<TLogin> = (data) => {
    AuthService.register({
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
    }).then(res => {
      if(res.status === 201) {
        router.push('/')
      }
    });
  };
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <div className={m.modal}>
          <h1 className={m.Title}>Welcome back!</h1>
          <form className={m.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={m.input}
              placeholder="Name"
              autoComplete="off"
              autoCorrect="off"
              type="text"
              {...register("name", {
                required: true,
              })}
            />
            <input
              className={m.input}
              placeholder="Surname"
              autoComplete="off"
              autoCorrect="off"
              type="text"
              {...register("surname", {
                required: true,
              })}
            />
            <input
              className={m.input}
              placeholder="Email"
              autoComplete="off"
              autoCorrect="off"
              type="text"
              {...register("email", {
                required: true,
              })}
            />
            <div className={m.passwdWrapper}>
              <input
                className={m.input}
                placeholder="Password"
                autoComplete="off"
                autoCorrect="off"
                type={show === true ? "text" : "password"}
                {...register("password", {
                  required: true,
                })}
              />
              <Image
                className={m.eyeBtn}
                onClick={() => setShow(!show)}
                width={30}
                height={30}
                src={show === false ? OpenEye : CloseEye}
                alt=""
              />
            </div>

            <div className={m.passwdWrapper}>
              <input
                className={m.input}
                placeholder="Repeat Password"
                autoComplete="off"
                autoCorrect="off"
                type={show === true ? "text" : "password"}
                {...register("repeatPassword", {
                  required: true,
                })}
              />
              <Image
                className={m.eyeBtn}
                onClick={() => setShow(!show)}
                width={30}
                height={30}
                src={show === false ? OpenEye : CloseEye}
                alt=""
              />
            </div>

            <div className={m.questionWrapper}>
              <span className={m.question}>{`Do you have an account?`}</span>
              <button
                className={m.questionBtn}
                onClick={() => setChange(false)}
              >
                Yes
              </button>
            </div>
            <div className={m.buttonWrapper}>
              <button className={m.button} type="submit">
                Registering
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPopup;
