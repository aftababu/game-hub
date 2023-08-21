import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortorder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder ,sortOrder}: Props) => {
  const sortOrders = [
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentOrder=sortOrders.find(item=>item.value===sortOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        orders by : {currentOrder?.label||'Relavance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
