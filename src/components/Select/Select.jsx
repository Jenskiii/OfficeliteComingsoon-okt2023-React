import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdDone } from "react-icons/md";
import styles from "./select.module.css";

export function Select({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);

  // changes selected option on click
  function selectOption(option) {
    onChange(option);
  }
  // check if clicked element matches option
  function isOptionSelected(option) {
    return option === value;
  }
  return (
    <>
      <div
        // closes options when clicked outside of tab
        onBlur={() => setIsOpen(false)}
        // toggles true / false onclick (will open and close menu)
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={0}
        className={styles.container}
      >
        <span className={styles.value}>
          {value?.label}
          <span className="price-span">{value?.price}</span>
        </span>
       
        <div className={`${styles.caret} ${isOpen ? styles.open : ""}`}>
          <MdOutlineKeyboardArrowDown />
        </div>

        <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
          {options.map((option) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              key={option.label}
              className={styles.option}
            >
              <div>
                {option.label}
                <span className="price-span">{option.price}</span>
              </div>

              <div
                // if option selected will show checkmark
                className={`${styles.checkmark} ${
                  isOptionSelected(option) ? styles.show : ""
                }`}
              >
                <MdDone />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
