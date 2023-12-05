import { FC, useState } from "react";
import m from "./LoginPopup.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import OpenEye from "@/assets/icons/OpenEYE.svg";
import CloseEye from "@/assets/icons/CloseEYE.svg";
import { useRouter } from "next/router";
import { AuthService } from "@/services/auth/auth.services";

type TLogin = {
  Email: string;
  Password: string;
};

type TProps = {
  setChange: (value: boolean) => void;
};

const LoginPopup: FC<TProps> = ({ setChange }) => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TLogin>();

  const onSubmit: SubmitHandler<TLogin> = (data) => {
    AuthService.login(data.Email, data.Password)
      .then((res) => {
        if (res.status === 201) {
          router.push("/");
        }
      })
      .catch((errors) => {
        if (errors) {
          setServerError(errors.response.data.message);
        }
      });
  };

  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <div className={m.modal}>
          <h1 className={m.Title}>Welcome back!</h1>

          <form className={m.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={m.inputWrapper}>
              <div className={m.emailWrapper}>
                <input
                  className={m.input}
                  placeholder="Email"
                  type="text"
                  {...register("Email", {
                    required: true,
                  })}
                />
              </div>

              <div className={m.passwdWrapper}>
                <div className={m.inputWrapp}>
                  <input
                    className={m.input}
                    placeholder="Password"
                    type={show === true ? "text" : "password"}
                    {...register("Password", {
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
              </div>
            </div>

            {serverError && <p className={m.error}>{serverError}</p>}
            
            <div className={m.questionWrapper}>
              <span className={m.question}>{`You don't have an account`}</span>
              <button className={m.questionBtn} onClick={() => setChange(true)}>
                Yes
              </button>
            </div>
            <div className={m.buttonWrapper}>
              <button className={m.button} type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
