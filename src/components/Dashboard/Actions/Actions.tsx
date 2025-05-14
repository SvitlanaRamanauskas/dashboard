'use client';

import { useEffect, useState } from 'react';
import './actions.scss';

export default function Actions() {
  const [quickActions, setQuickActions] = useState<string[]>([]);

  useEffect(() => {
    fetch('/mockData/actions.json')
      .then((res) => res.json())
      .then((data) => setQuickActions(data.actions));
  }, []);

  return (
    <article className="actions">
      <h2 className="sub-title actions__title">Quick actions</h2>

      <ul className="actions__list">
        {quickActions.map((action) => (
          <li key={action} className="actions__item">
            {action}
          </li>
        ))}
      </ul>
    </article>
  );
}
