import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { VarifyOTPImg, loginImg } from "@/assets/ImagesLink";
import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from "yup";
import axios from "axios";
import { endPoints } from "@/network/endPoints";
import { BaseUrl } from "../../../appConfig";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [OPTScreen, setOPTScreen] = useState(false);
  const [contactNumber, setContactNumber] = useState(null);
  const [resentOPT, setResentOPT] = useState(false);
  const [timer, setTimer] = useState(0);
  const [otp, setOtp] = useState(null);
  const [otpInput, setOtpInput] = useState(["", "", "", ""]);
  const sentOTP = (number) => {
    axios
      .post(BaseUrl + endPoints.sentOTP, {
        mobile: number,
      })
      .then((res) => {
        console.log(res, "res11111111111111111");
        console.log(res?.data?.Otp, "res2222222222");
        setOtp(res?.data?.Otp);
      })
      .catch((err) => console.log(err));
  };

  const varifyOTPAPI = (data) => {
    axios.post(BaseUrl + endPoints.varifyOTP, {
      mobile: contactNumber,
      otp: parseInt(otpInput.join("")),
    });
  };

  const varifyOTP = () => {
    const enteredOTP = otpInput.join("");
    console.log(otp, enteredOTP, "pppppppppp");
    if (otp === enteredOTP) {
      console.log("OTP Verified");
      varifyOTPAPI();
      router.push("/");
      router;
    } else {
      window?.alert("Invalid OTP");
    }
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
  const handleOtpInputChange = (index, value) => {
    const updatedOtpInput = [...otpInput];
    updatedOtpInput[index] = value;
    setOtpInput(updatedOtpInput);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.login_card}>
        {OPTScreen ? (
          <div className="w-full bg-white p-[60px] py-[80px]">
            <img
              alt="otp-image"
              src={VarifyOTPImg}
              className="w-[90px] h-[90px] "
            />
            <p className={styles.heading}>Verify with OTP</p>
            <p className={`${styles.info_line} !p-0`}>
              Sent to {contactNumber}{" "}
            </p>
            <div className={styles.otp_container}>
              {otpInput.map((value, index) => (
                <input
                  key={index}
                  className={styles.otp_input}
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleOtpInputChange(index, e.target.value)}
                />
              ))}
            </div>
            {resentOPT ? (
              <p className={`${styles.info_line} !p-0`}>
                Resend OTP in: <span className="text-[#000]"> {timer}</span>
              </p>
            ) : (
              <div className=" flex flex-col">
                <button
                  onClick={() => varifyOTP()}
                  className={`${styles.varifyOTP_btn}  `}
                >
                  Verify OTP
                </button>

                <p
                  className={`${styles.pink_text} text-12 font-bold cursor-pointer`}
                  onClick={() => {
                    setResentOPT(true);
                  }}
                >
                  RESEND OTP{" "}
                </p>
              </div>
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
