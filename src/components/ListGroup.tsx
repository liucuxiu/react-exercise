function ListGroup() {
  const items = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Philadelphia',
  ]
  const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <h1>List</h1>

      <ul className="list-group">
        {items.length === 0 && <p>No items</p>}
        {items.map((item) =>
          <li className="list-group-item"
              onClick={handleClick}
              key={item}>
            {item}
          </li>
        )}
      </ul>
    </>
  )
}

export default ListGroup;