import './filterPanel.scss';

export default function FilterPanel() {
  return (
    <div className="filter-panel">
      <h2 className="sub-title quque__title">My accounts</h2>

      <div className="search filter-panel__search">
        <input
          type="text"
          className="search__input filter-panel__input"
          placeholder="search"
        />
      </div>

      <div className="filter-panel--right">
        <ul className="filter-panel__list">
          <li className="filter-panel__item">Filter</li>
          <li className="filter-panel__item">Sort</li>
          <li className="filter-panel__item">Group</li>
          <li className="filter-panel__item">+ New</li>
        </ul>
      </div>
    </div>
  );
}
