import React from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";
import useSelect from "../hooks/useSelect";

const Form = ({ setCategory }) => {
  const OPTIONS = [
    { value: "world", label: "World" },
    { value: "nation", label: "Nation" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "Health" }, 
    { value: "science", label: "Science" }, 
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];

  const [category, SelectNews] = useSelect("technology", OPTIONS);

  // submit al form, pasar categoria a app.js
  const findNews = (e) => {
    e.preventDefault();
    setCategory(category);
  };

  return (
    <div className={`${styles.search} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={findNews}>
          <h2 className={styles.heading}>Search news</h2>
          <SelectNews />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  setCategory: PropTypes.func.isRequired
}

export default Form;
