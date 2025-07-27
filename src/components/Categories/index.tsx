import { useCategory } from "../../context/CategoriesContext";
import { categories } from "../util/getCategories";
import styles from "./category.module.css";

export function Categories() {
  const { selectedCategory, setSelectedCategory } = useCategory();

  function handleChangeCategory(category: string) {
    setSelectedCategory(category);
  }

  return (
    <div className={`${styles.categories} ${styles.snapsInline}`}>
      <button
        className={
          selectedCategory === "todos"
            ? `${styles.button} ${styles.active}`
            : styles.button
        }
        onClick={() => handleChangeCategory("todos")}
      >
        Todos
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleChangeCategory(category.category)}
          className={
            selectedCategory === category.category
              ? `${styles.button} ${styles.active}`
              : styles.button
          }
        >
          {category.category}
        </button>
      ))}
    </div>
  );
}
