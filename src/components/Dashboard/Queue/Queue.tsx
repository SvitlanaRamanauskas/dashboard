'use client';

import { useEffect, useState } from 'react';
import cn from 'classnames';
import './queue.scss';
import Table from '@/components/Dashboard/TableQueue/TableQueue';
import { QueueTableData } from '@/types/queue';

export default function Queue() {
  const [activeItem, setActiveItem] = useState('1');

  const [queueItems, setQueueItems] = useState([]);

  const [tableColumns, setTableColumns] = useState([]);
  const [tableData, setTableData] = useState<QueueTableData[]>([]);

  useEffect(() => {
    fetch('/mockData/navBar.json')
      .then((res) => res.json())
      .then((data) => setQueueItems(data.queueItems));
  }, []);

  useEffect(() => {
    fetch('/mockData/tableWorkQueue.json')
      .then((res) => res.json())
      .then((data) => {
        setTableColumns(data.queue.columns);
        setTableData(data.queue.data);
      });
  }, []);

  return (
    <article className="queue">
      <h2 className="sub-title quque__title">Work queue</h2>

      <nav className="queue__nav">
        <ul className="queue__list">
          {queueItems.map((item) => (
            <li
              key={item}
              className={cn('queue__item', {
                'queue__item queue__item--active': activeItem === item,
              })}
              onClick={() => setActiveItem(item)}
            >
              <p className="queue__item-name">{item}</p>
            </li>
          ))}
        </ul>
      </nav>

      <Table columns={tableColumns} data={tableData} />
    </article>
  );
}
