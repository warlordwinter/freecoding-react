function ListGroup() {
  const items = [
    "new york",
    "los angeles",
    "chicago",
    "Bangkok"
  ];

  if (items.length === 0)
    return <p>No items</p>;

    return (
    <>
        <h1>List</h1>
        <ul className="list-group">
        {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;
