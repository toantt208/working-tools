import React, { useEffect } from "react";
import View from "./View";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";

export type NavItem = {
  title: string;
  icon: React.ElementType;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    title: "JWT Decoder",
    icon: Home,
    href: "/jwt-decoder",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    href: "#",
  },
  {
    title: "Products",
    icon: Package,
    href: "#",
  },
  {
    title: "Customers",
    icon: Users,
    href: "#",
  },
  {
    title: "Analytics",
    icon: LineChart,
    href: "#",
  },
];

export default function Container({ children }: { children: React.ReactNode }) {
  const [searchKey, setSearchKey] = React.useState("");
  const [navItems, setNavItems] = React.useState(NAV_ITEMS);

  useEffect(() => {
    if (searchKey) {
      setNavItems((prev) =>
        prev.filter((item) =>
          item.title.toLowerCase().includes(searchKey.toLowerCase()),
        ),
      );
    } else {
      setNavItems(NAV_ITEMS);
    }
  }, [searchKey]);

  return (
    <View searchKey={searchKey} setSearchKey={setSearchKey} navItems={navItems}>
      {children}
    </View>
  );
}
