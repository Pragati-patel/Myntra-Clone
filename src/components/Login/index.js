import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { VarifyOTP, loginImg } from "@/assets/ImagesLink";
import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from "yup";
import axios from "axios";
import { baseURL } from "@/network/axios";
import { endPoints } from "@/network/endPoints";
import { BaseUrl } from "../../../appConfig";

export default function Login() {
  const [OPTScreen, setOPTScreen] = useState(false);
  const [contactNumber, setContactNumber] = useState(null);
  const [resentOPT, setResentOPT] = useState(false);
  const [timer, setTimer] = useState(0);

  const sentOTP = (number) => {
    axios
      .post(BaseUrl + endPoints.sentOTP, {
        mobile: number,
      })
      .then((res) => console.log(res, "res"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let interval;
    if (resentOPT) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(interval);
            setResentOPT(false);
            return 30;
          } else {
            return prevTimer - 1;
          }
        });
      }, 1000);
    } else {
      setTimer(30);
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount or dependency change
  }, [resentOPT]);

  const validationSchema = Yup.object({
    contactNumber: Yup.string()
      .test(
        "no-spaces-special-characters",
        "Please enter a valid 10 digit phone number without spaces or special characters",
        (value) => {
          return /^[0-9]*$/.test(value);
        },
      )
      .min(
        10,
        "Oops! Looks like you missed some digits. Please enter complete 10 digit number.",
      )
      .max(
        10,
        "Oops! It looks like you entered too many digits. Please enter valid 10 digit number.",
      )
      .required("Contact number is required"),
  });

  const handleSubmit = (values) => {
    setContactNumber(values.contactNumber);
    console.log(values, "[[[[[[[[[");
    setOPTScreen(true);
    sentOTP(values.contactNumber);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.login_card}>
        {OPTScreen ? (
          <div className="w-full bg-white p-[60px] py-[80px]">
            <img
              alt="otp-image"
              src={VarifyOTP}
              className="w-[90px] h-[90px] "
            />
            <p className={styles.heading}>Verify with OTP</p>
            <p className={`${styles.info_line} !p-0`}>
              Sent to {contactNumber}{" "}
            </p>
            <div className={styles.otp_container}>
              <input className={styles.otp_input} type="text" maxlength="1" />
              <input className={styles.otp_input} type="text" maxlength="1" />
              <input className={styles.otp_input} type="text" maxlength="1" />
              <input className={styles.otp_input} type="text" maxlength="1" />
            </div>
            {resentOPT ? (
              <p className={`${styles.info_line} !p-0`}>
                Resend OTP in: <span className="text-[#000]"> {timer}</span>
              </p>
            ) : (
              <p
                className={`${styles.pink_text} text-12 font-bold cursor-pointer`}
                onClick={() => setResentOPT(true)}
              >
                RESEND OTP{" "}
              </p>
            )}

            <p className={`${styles.info_line} !pb-0`}>
              Log in using
              <span className={styles.pink_text}>Get help</span>
            </p>
            <p className={`${styles.info_line} !pb-0`}>
              Have trouble logging in?
              <span className={styles.pink_text}> Password </span>
            </p>
          </div>
        ) : (
          <div>
            <img alt="login-image" src={loginImg} className="w-full" />
            <div className={styles.login_content}>
              <p className={styles.heading}>
                Login <span className={styles.or_style}>or</span> Signup
              </p>

              <Formik
                initialValues={{
                  contactNumber: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ touched }) => (
                  <Form>
                    <Field
                      type="number"
                      name="contactNumber"
                      placeholder="Mobile Number"
                      className={styles.form_input}
                      style={{
                        "-moz-appearance": "textfield",
                        appearance: "textfield",
                      }}
                    />
                    <ErrorMessage name="contactNumber">
                      {(msg) =>
                        touched.contactNumber && (
                          <p className={styles.error}>{msg} </p>
                        )
                      }
                    </ErrorMessage>

                    <p className={styles.info_line}>
                      By continuing, I agree to the{" "}
                      <span className={styles.pink_text}>Terms of Use</span> &{" "}
                      <span className={styles.pink_text}>Privacy Policy</span>
                    </p>
                    <button type="submit" className={styles.continue}>
                      CONTINUE
                    </button>
                    <p className={`${styles.info_line} !pb-0`}>
                      Have trouble logging in?
                      <span className={styles.pink_text}>Get helpe</span>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
