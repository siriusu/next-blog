

export default function Container({ children }) {
  const styles = [
    "container",
    "mx-auto",
    "px-5",
    "bg-blue-500"
  ]
  return <div className={styles.join(" ")}>{children}</div>
}
