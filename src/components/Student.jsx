function Student({ name, className }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Klasa: {className}</p>
    </div>
  );
}

export default Student;