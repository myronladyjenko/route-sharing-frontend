import Dropdown from "./HoldSelectionList";
import { useState } from "react";
export const DropdownSelection = ({
  placeHolder,
  addHandler,
  optionalCallExpression,
}) => {
  const [selectedVal, setSelectedVal] = useState(null);
  console.log(optionalCallExpression);

  return (
    optionalCallExpression.length > 0 && (
      <div>
        <Dropdown
          placeHolder={placeHolder}
          optionalCallExpression={optionalCallExpression}
          selectedVal={selectedVal}
          updateSelectedVal={setSelectedVal}
        ></Dropdown>
        <button
          onClick={() => addHandler(selectedVal)}
          disabled={selectedVal ? false : true}
        >
          Add
        </button>
      </div>
    )
  );
};
