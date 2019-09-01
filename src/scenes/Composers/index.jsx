import PropTypes from 'prop-types'
import React from 'react'

import ROUTES from 'constants/routes'

import withData from './query'
import * as SC from './style'

const Composers = ({ composers }) => {
  const tiles = composers.map(composer => {
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

Composers.propTypes = {
  composers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
}

export default withData(Composers)
