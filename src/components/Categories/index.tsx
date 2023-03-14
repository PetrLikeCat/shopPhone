import React from 'react';
import s from "./Categories.module.scss"
type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ['Все', 'XIAOMI', 'REDMI', 'POXO']

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  console.log(value, onChangeCategory, "props")
  return (
    <div className={s.categories}>
      <p className={s.categories__text}>По какому бренду искать:</p>
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={`${value === i ? s.active : ''}`}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});
