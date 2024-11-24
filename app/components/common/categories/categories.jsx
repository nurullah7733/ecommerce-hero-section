"use client";
import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

const Categories = ({ categories }) => {
  // console.log(categories, "categories");

  const [activeCategories, setActiveCategories] = useState([]);

  const handleCategoryHover = (category, depth) => {
    setActiveCategories((prev) => {
      const newActive = prev.slice(0, depth);
      newActive[depth] = category;
      return newActive;
    });
  };

  const handleMouseLeave = () => {
    setActiveCategories([]);
  };

  return (
    <div className="flex shadow-sm " onMouseLeave={handleMouseLeave}>
      {/* Categories */}
      <div className="w-[230px] pointer-events-auto max-h-[381px] overflow-y-auto py-[12px] px-[10px] border-r bg-white">
        {categories.map((category, index) => (
          <CategoryItem
            key={category.id}
            category={category}
            onHover={handleCategoryHover}
            lastCategory={index === categories.length - 1}
            isActive={activeCategories[0]?.id === category.id}
          />
        ))}
      </div>

      {/* subcategory */}
      {activeCategories.map(
        (category, index) =>
          category.childrens && (
            <div
              key={category.id}
              className="w-[230px] py-[12px] px-[10px] pointer-events-auto max-h-[381px] overflow-y-auto border-r bg-white"
            >
              {category.childrens.map((subcategory) => (
                <CategoryItem
                  key={subcategory.id}
                  category={subcategory}
                  depth={index + 1}
                  onHover={handleCategoryHover}
                  isActive={activeCategories[index + 1]?.id === subcategory.id}
                />
              ))}
            </div>
          )
      )}
    </div>
  );
};

export default Categories;
