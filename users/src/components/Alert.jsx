function Alert({ text }) {
  const styles = {
    position: "fixed",
    top: "10px",
    left: "300px",
  };

  return (
    <div className="alert alert-danger" role="alert" style={styles}>
      {text}
    </div>
  );
}

export default Alert;
