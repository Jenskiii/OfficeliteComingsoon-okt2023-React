import { useState, useMemo} from "react";
import { Select } from "../Select/Select";
import { checkEmail, checkName, checkCompany, checkPhone } from "./validators";
import styles from "./form.module.css";
// images
import errorIcon from "../../assets/sign-up/icon-cross.svg";

//  options for select component
const options = [
  { value: "free", price: "Free", label: "Basic Pack" },
  { value: "9,99", price: "$9,99", label: "Pro Pack" },
  { value: "19,99", price: "$19,99", label: "Ultimate Pack" },
];

export function Form() {
  // values for selectfield
  // useStates for input values
  const [selectValue, setSelectValue] = useState(options[0]);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  // checks is form is sumbitted or not
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  // will auto update form errors after submit
  const emailErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkEmail(email) : [];
  }, [isAfterFirstSubmit, email]);

  const nameErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkName(fullName) : [];
  }, [isAfterFirstSubmit, name]);

  const phoneErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkPhone(phone) : [];
  }, [isAfterFirstSubmit, phone]);

  const companyErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkCompany(company) : [];
  }, [isAfterFirstSubmit, company]);

  // handles submit
  function onSubmit(e) {
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);

    setIsAfterFirstSubmit(true);

    const nameResults = checkName(fullName);
    const emailResults = checkEmail(email);
    const phoneResults = checkPhone(phone);
    const companyResults = checkCompany(company);

    if (
      emailResults.length === 0 &&
      nameResults.length === 0 &&
      phoneResults.length === 0 &&
      companyResults.length === 0
    ) {
      alert("Succesfully Submitted");
      // reset form
      resetForm()
      setIsAfterFirstSubmit(false)
    }
  }
//  resets form
  function resetForm(){
    setCompany(""),setEmail(""),setFullName(""),setPhone(""),setSelectValue(options[0])
  }

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form} noValidate>
        <div className={styles.container}>
          {/* name */}
          <div
            className={`${styles["form-group"]} ${
              nameErrors.length > 0 ? styles.error : ""
            }`}
          >
            <div className={styles["form-row"]}>
              <input
                type="text"
                className={nameErrors.length > 0 ? styles.error : ""}
                id="name"
                value={fullName}
                placeholder="Name"
                onChange={(e) => setFullName(e.target.value)}
              />
              <img
                className={styles["error-icon"]}
                src={errorIcon}
                alt="red circle with cross"
              />
              {nameErrors.length > 0 && (
                <div className={styles["error-msg"]}>
                  {nameErrors.join(", ")}
                </div>
              )}
            </div>
          </div>
          {/* email */}
          <div
            className={`${styles["form-group"]} ${
              emailErrors.length > 0 ? styles.error : ""
            }`}
          >
            <div className={styles["form-row"]}>
              <input
                type="email"
                className={emailErrors.length > 0 ? styles.error : ""}
                id="email"
                value={email}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <img
                className={styles["error-icon"]}
                src={errorIcon}
                alt="red circle with cross"
              />
              {emailErrors.length > 0 && (
                <div className={styles["error-msg"]}>
                  {emailErrors.join(", ")}
                </div>
              )}
            </div>
          </div>
          {/* Select  */}
          <div className={`${styles["form-group"]}`}>
            <Select
              options={options}
              value={selectValue}
              onChange={(option) => setSelectValue(option)}
            />
          </div>
          {/* phone */}
          <div
            className={`${styles["form-group"]} ${
              phoneErrors.length > 0 ? styles.error : ""
            }`}
          >
            <div className={styles["form-row"]}>
              <input
                type="text"
                className={phoneErrors.length > 0 ? styles.error : ""}
                id="phone"
                value={phone}
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
              <img
                className={styles["error-icon"]}
                src={errorIcon}
                alt="red circle with cross"
              />
              {phoneErrors.length > 0 && (
                <div className={styles["error-msg"]}>
                  {phoneErrors.join(", ")}
                </div>
              )}
            </div>
          </div>
          {/* company */}
          <div
            className={`${styles["form-group"]} ${
              companyErrors.length > 0 ? styles.error : ""
            }`}
          >
            <div className={styles["form-row"]}>
              <input
                type="text"
                className={companyErrors.length > 0 ? styles.error : ""}
                id="company"
                value={company}
                placeholder="Company"
                onChange={(e) => setCompany(e.target.value)}
              />
              <img
                className={styles["error-icon"]}
                src={errorIcon}
                alt="red circle with cross"
              />
              {companyErrors.length > 0 && (
                <div className={styles["error-msg"]}>
                  {companyErrors.join(", ")}
                </div>
              )}
            </div>
          </div>
          <button
            className={`button ${styles["form-button"]}`}
            datatype="primary"
          >
            Get on the list
          </button>
        </div>
      </form>
    </>
  );
}
