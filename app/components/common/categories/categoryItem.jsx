import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const CategoryItem = ({ category, depth = 0, onHover, isActive }) => {
  return (
    <div
      className={`cursor-pointer pb-[11px] px-[10px] hover:bg-gray-50 flex items-center justify-between`}
      onMouseEnter={() => onHover(category, depth)}
    >
      <span
        className={`text-xs text-text-denger ${
          isActive && "!text-text-yellow"
        }`}
      >
        {category.name}
      </span>
      {category.subcategories && (
        <span>
          <RiArrowDropRightLine
            size={12}
            className={`text-text-denger  ${isActive && "!text-text-yellow"}`}
          />
        </span>
      )}
    </div>
  );
};

export default CategoryItem;
