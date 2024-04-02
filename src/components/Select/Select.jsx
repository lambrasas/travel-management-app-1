import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Select.module.scss";

// options = [{value: 1, label: "First item"}, {value: 2, label: "Second item"}]
const Select = ({ options, label, className, ...props }) => {
  return (
    <>
      {label && (
        <label htmlFor={props.id} className={styles.label}>
          {label}
        </label>
      )}
      <select className={classNames(styles.input, className)} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string,
};

export default Select;
