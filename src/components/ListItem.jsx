import "./ListItem.scss";

const ListItem = ({
  title = "Default Title",
  description = "Default Description",
  date = "08.04.2023",
}) => {
  const shortenedDescription =
    description.length > 14
      ? description.substring(0, 14) + "..."
      : description;

  return (
    <ul className="list-item">
      <li>
        <div className="list-item-title">{title}</div>
        <div className="list-item-description">{shortenedDescription}</div>
        <div className="list-item-date">{date}</div>
      </li>
      <li>
        <div className="list-item-title">{title}</div>
        <div className="list-item-description">{shortenedDescription}</div>
        <div className="list-item-date">{date}</div>
      </li>
      <li>
        <div className="list-item-title">{title}</div>
        <div className="list-item-description">{shortenedDescription}</div>
        <div className="list-item-date">{date}</div>
      </li>
    </ul>
  );
};

export default ListItem;
