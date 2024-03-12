//a component return one element if i wanna add h1 or smtg we ude a div
// best way => Fragment
import { useState } from "react";
//import the CSS File.
import styles from "./GroupList.module.css";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function GroupList({ items, heading, onSelectItem }: Props) {
  //in TypeScript we dont have a for loop
  //in typeScript === comparevalue and type == just the value
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>

      {/* ceciveut dire que si la condition est vrai le paragraphe s'affichera */}
      {items.length == 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={styles["Groupe-list"]}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default GroupList;
