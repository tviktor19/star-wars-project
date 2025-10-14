import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <div className="breadcrumbs">
      <span className="home">Home /</span>{' '}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        const isLast = index === pathnames.length - 1
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
        return (
          <React.Fragment key={name}>
            <Link className="gray" to={routeTo}>
              {capitalizedName}
            </Link>
            <span className="gray">{!isLast && ' / '}</span>
          </React.Fragment>
        )
      })}
    </div>
  )
}
