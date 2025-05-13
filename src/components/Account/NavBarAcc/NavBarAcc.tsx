"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import "./navbarAcc.scss";
import { useRouter } from "next/navigation";

export default function NavBarAcc() {
  const [navBarAcc, setNavBarAcc] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("accounts");

  const router = useRouter();

const handleClickNavItem = (name: string) => {
  if (name === "dashboard") {
    router.push("/");
  }
};

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({top: 0, behavior: "smooth"});
    }

  }, []);

  useEffect(() => {
    fetch("/mockData/navBar.json")
      .then((res) => res.json())
      .then((data) => setNavBarAcc(data.navAcc));
  }, []);

  return (
    <nav className="nav">
      <ul className="nav__list">
        {navBarAcc.map((item) => {
          const adaptedItem = item.replace(/&/, "and").replace(/\s+/g, "-");
          const iconPath = `/icons/${
            activeTab === adaptedItem ? adaptedItem + "Active" : adaptedItem
          }.svg`;

          return (
            <li
              key={item}
              className={cn("nav__item", {
                "nav__item nav__item--active": activeTab === adaptedItem,
              })}
              onClick={() => {
                setActiveTab(adaptedItem)
                handleClickNavItem(adaptedItem)
              }}
            >
              <div className="nav__icon">
                <Image alt={item} src={iconPath} width={18} height={18} />
              </div>
              <p
                className={cn("nav__item-name", {
                  "nav__item-name nav__item-name--active":
                    activeTab === adaptedItem,
                })}
              >
                {item}
              </p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
