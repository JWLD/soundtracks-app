import { useQuery } from '@apollo/react-hooks'
import React from 'react'

import ROUTES from 'constants/routes'

import { ComposersQuery } from './gql'
import { getComposers } from './helpers'
import * as SC from './style'

const Composers = () => {
  const { data, loading } = useQuery(ComposersQuery)

  if (loading) return <div>Loading</div>

  const tiles = getComposers(data).map(composer => {
    const { id, imageUrl, name } = composer

    return (
      <SC.ComposerTile key={id} to={`${ROUTES.COMPOSER}/${id}`}>
        <SC.TileContent>
          <SC.ImageWrap>
            {imageUrl ? (
              <SC.Image url={imageUrl} />
            ) : (
              <SC.NoImageWrap>
                <SC.NoImageIcon />
              </SC.NoImageWrap>
            )}
          </SC.ImageWrap>

          <SC.Name>{name}</SC.Name>
        </SC.TileContent>
      </SC.ComposerTile>
    )
  })

  return <SC.TileGrid>{tiles}</SC.TileGrid>
}

export default Composers
