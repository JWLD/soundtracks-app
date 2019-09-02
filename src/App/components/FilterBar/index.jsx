import { useQuery } from '@apollo/react-hooks'
import React from 'react'

import { useCache } from 'hooks'

import { FilterBarQuery } from './gql'
import * as SC from './style'

const FilterBar = () => {
  const { updateCache } = useCache()
  const { data } = useQuery(FilterBarQuery)

  return (
    <SC.FilterBar>
      <SC.Input
        onChange={e => updateCache({ filter: e.target.value })}
        placeholder="Search"
        value={data.filter}
      />

      {data.filter && (
        <SC.ResetIcon onClick={() => updateCache({ filter: '' })} />
      )}
    </SC.FilterBar>
  )
}

export default FilterBar
