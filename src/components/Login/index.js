import React from "react";
import styles from "./styles.module.css";
import { loginImg } from "@/assets/ImagesLink";
import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from "yup";

export default function Login() {
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
    console.log(values);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.login_card}>
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
            onSubmit={async (values) => {
              await handleSubmit(values);
            }}
          >
            {({ handleSubmit, touched }) => (
              <form onSubmit={handleSubmit}>
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
                <butto type="submit" className={styles.continue}>
                  CONTINUE
                </butto>
                <p className={`${styles.info_line} !pb-0`}>
                  Have trouble logging in?
                  <span className={styles.pink_text}>Get helpe</span>
                </p>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
