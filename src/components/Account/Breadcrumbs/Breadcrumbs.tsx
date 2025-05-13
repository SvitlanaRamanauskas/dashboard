"use client"

import "./breadcrumbs.scss";

export default function Breadcrumbs({ accountName }: { accountName: string }) {
console.log(accountName)
  return (
    <div className="breadcrumbs">
      <p className="breadcrumbs__text">Dashboard //</p>
      <p className="breadcrumbs__text">Accounts //</p>
      <p className="breadcrumbs__text">{accountName}</p>
    </div>
  )
}