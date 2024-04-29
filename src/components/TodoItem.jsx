import styles from "./todoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log(item.name, "is deleted");
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    console.log(name, "is completed");
    const newTodos = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
    console.log(todos);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.doItem}>
      <div className={styles.doItemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <button onClick={() => handleDelete(item)} className={styles.delete}>
          x
        </button>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
