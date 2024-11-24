import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const CategoryItem = ({
  category,
  depth = 0,
  onHover,
  isActive,
  lastCategory,
}) => {
  return (
    <div
      className={`cursor-pointer ${
        lastCategory ? "" : "pb-[10px]"
      }  hover:bg-gray-50 flex items-center justify-between`}
      onMouseEnter={() => onHover(category, depth)}
    >
      <span
        className={`text-xs text-text-denger ${
          isActive && "!text-text-yellow"
        }`}
      >
        {category.title}
      </span>
      {category.childrens && (
        <span>
          <RiArrowDropRightLine
            size={16}
            className={`text-text-denger  ${isActive && "!text-text-yellow"}`}
          />
        </span>
      )}
    </div>
  );
};

export default CategoryItem;
