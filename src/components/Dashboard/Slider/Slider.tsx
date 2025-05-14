'use client';

import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import './slider.scss';

export default function Slider() {
  const [navBarDash, setNavBarDash] = useState<string[]>([]);
  const [activeDashTabPlusIndex, setActiveDashTabPlusIndex] =
    useState('dashboard0');
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    fetch('/mockData/navBar.json')
      .then((res) => res.json())
      .then((data) => setNavBarDash(data.navDash));
  }, []);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <div className="slider__section">
      <div className="slider__container">
        <nav className="slider">
          <ul className="slider__list" ref={listRef}>
            {navBarDash.map((item, index) => {
              const adaptedItem = item.replace(/&/, 'and').replace(/\s+/g, '-');
              const iconPath = `/icons/${
                activeDashTabPlusIndex === adaptedItem + index
                  ? adaptedItem + 'Active'
                  : adaptedItem
              }.svg`;

              return (
                <li
                  key={adaptedItem + index}
                  className={cn('slider__item', {
                    'slider__item slider__item--active':
                      activeDashTabPlusIndex === adaptedItem + index,
                  })}
                  onClick={() => setActiveDashTabPlusIndex(adaptedItem + index)}
                >
                  <Image
                    className="slider__icon"
                    alt={item}
                    src={iconPath}
                    width={18}
                    height={18}
                    style={{ objectFit: 'cover', objectPosition: 'left' }}
                  />
                  <p
                    className={cn('slider__item-name', {
                      'slider__item-name slider__item-name--active':
                        activeDashTabPlusIndex === adaptedItem + index,
                    })}
                  >
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="slider__buttons">
        <div className="slider__button" onClick={scrollLeft}>
          <Image
            width={29.2}
            height={24.4}
            src={'/icons/arrow-left.svg'}
            alt="arrow-left"
          />
        </div>

        <div className="slider__button" onClick={scrollRight}>
          <Image
            width={29.2}
            height={24.4}
            src={'/icons/arrow-right.svg'}
            alt="arrow-right"
          />
        </div>
      </div>
    </div>
  );
}
