function Book({ title, author }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <h3>{title}</h3>
      <p>Autor: {author}</p>
    </div>
  );
}

export default Book;    