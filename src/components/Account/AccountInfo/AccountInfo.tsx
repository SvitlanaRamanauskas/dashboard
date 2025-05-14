'use client';

import Image from 'next/image';
import './account-info.scss';
import { useEffect, useState } from 'react';
import { Info } from '@/types/info';
import Attention from '../Attention/Attention';

type Props = {
  accountName: string;
};

export const AccountInfo: React.FC<Props> = ({ accountName }) => {
  const [info, setInfo] = useState<Info[]>([]);
  useEffect(() => {
    fetch('/mockData/accountInfo.json')
      .then((res) => res.json())
      .then((data) => setInfo(data.accountInfo));
  }, []);

  return (
    <div className="account-info">
      <div className="info">
        <div className="account-info__logo">
          <Image
            alt="logo"
            src={'/logo.png'}
            width={102}
            height={102}
            style={{ borderRadius: '50%' }}
          />
        </div>

        <div className="info__container">
          <h2 className="info__title">{accountName}</h2>
          <ul className="info__list">
            {info.map((item, index) => {
              if (index === 0) {
                return (
                  <li key={item.info} className="info__item">
                    <p className="info__text-info">{item.info}</p>
                  </li>
                );
              } else {
                return (
                  <li key={item.info} className="info__item">
                    <p className="head-name info__text-title">{item.title}</p>
                    <p className="info__text-info">{item.info}</p>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>

      <Attention />
    </div>
  );
};

export default AccountInfo;
