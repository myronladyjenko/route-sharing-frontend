import "../shared-components/styles.css";
import { useEffect, useState } from "react";

function Icon() {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
}

export default function Dropdown({
  placeHolder,
  optionalCallExpression,
  selectedVal,
  updateSelectedVal,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setMenuOpen(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const getDisplay = () => {
    if (selectedVal) {
      return selectedVal;
    }
    return placeHolder;
  };

  const onItemClick = (option) => {
    updateSelectedVal(option);
  };

  const isSelected = (option) => {
    if (!selectedVal) {
      return false;
    }

    return selectedVal === option;
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-input" onClick={handleInputClick}>
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="dropdown-menu">
          {optionalCallExpression.map((option, index) => (
            <div
              key={index}
              className={`dropdown-item ${isSelected(option) && "selected"}`}
              onClick={() => onItemClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
