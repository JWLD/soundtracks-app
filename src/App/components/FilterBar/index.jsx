import { useQuery } from '@apollo/react-hooks'
import React from 'react'

import ROUTES from 'constants/routes'
import { useCache } from 'hooks'

import { FilterBarQuery } from './gql'
import * as SC from './style'

const FilterBar = () => {
  const { updateCache } = useCache()

  const { data } = useQuery(FilterBarQuery)
  const { filter } = data

  return (
    <SC.FilterBar>
      <SC.HomeLink to={ROUTES.LANDING}>
        <SC.HomeIcon />
      </SC.HomeLink>

      <SC.Input
        onChange={e => updateCache({ filter: e.target.value })}
        placeholder="Filter"
        value={filter}
      />

      {filter && <SC.ResetIcon onClick={() => updateCache({ filter: '' })} />}
    </SC.FilterBar>
  )
}

export default FilterBar
