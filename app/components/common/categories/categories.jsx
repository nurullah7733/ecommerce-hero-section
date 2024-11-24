"use client";
import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

const Categories = ({ categories }) => {
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
    <div className="flex shadow-sm" onMouseLeave={handleMouseLeave}>
      {/* Main Categories */}
      <div className="w-[230px] max-h-[381px] overflow-y-auto py-2 border-r bg-white">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            onHover={handleCategoryHover}
            isActive={activeCategories[0]?.id === category.id}
          />
        ))}
      </div>

      {/* Dynamically render subcategory columns */}
      {activeCategories.map(
        (category, index) =>
          category.subcategories && (
            <div
              key={category.id}
              className="w-[230px] max-h-[381px] overflow-y-auto py-2 border-r bg-white"
            >
              {category.subcategories.map((subcategory) => (
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
