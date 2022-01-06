import { ListItem } from "@material-ui/core";
import "./portfolioList.scss";

export default function PortfolioList({
  id,
  title,
  link,
  active,
  setSelected,
}) {
  return (
    <ul>
      <li
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    </ul>
  );
}
