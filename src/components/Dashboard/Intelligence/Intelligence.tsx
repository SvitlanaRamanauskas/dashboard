"use client";

import { useEffect, useState } from "react";
import "./intelligence.scss";
import { IntelligenceType } from "@/types/intelligence";

export default function Intelligence() {
  const [intellList, setIntellList] = useState<IntelligenceType[]>([]);

  useEffect(() => {
    fetch("/mockData/intelligence.json")
      .then((res) => res.json())
      .then((data) => setIntellList(data.intelligence));
  }, []);

  return (
    <article className="intelligence">
      <h2 className="sub-title intelligence__title">Market Intelligence</h2>

      <ul className="intelligence__list">
        {intellList.map((item) => (
          <li key={item.name} className="intelligence__item">
            <div className="intelligence__status-wrapper">
              <div className={`status-circle intelligence__status status-circle--${item.status}`}/>
            </div>
            <p className="intelligence__name">{item.name}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
