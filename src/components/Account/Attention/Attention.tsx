'use client';

import { AttentionType } from '@/types/attention';
import { useEffect, useState } from 'react';
import './attention.scss';
import Image from 'next/image';

export function Attention() {
  const [attentionList, setAttentionList] = useState<AttentionType[]>([]);
  useEffect(() => {
    fetch('/mockData/attentionList.json')
      .then((res) => res.json())
      .then((data) => setAttentionList(data.attentionList));
  }, []);

  return (
    <div className="attention">
      <div className="attention__header">
        <div className="attention__circle">!</div>
        <h2 className="attention__title">Needs Attention</h2>
      </div>

      <ul className="attention__list">
        {attentionList.map((item) => (
          <li key={item.task} className="attention__item">
            <p className="head-name attention__text-task">{item.task}</p>
            <p className="attention__text-details">{item.details}</p>
            <div className="attention__text-link-wrapper">
              <p className="attention__text-link">{item.link}</p>
              <Image
                alt="arrow-purple"
                src="/icons/arrow-rifht-purple.svg"
                width={18}
                height={12}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Attention;
