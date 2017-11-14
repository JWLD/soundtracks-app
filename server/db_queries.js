const dbQueries = {};

dbQueries.searchArtists = (connPool, data, callback) => {
  connPool.query(
    `SELECT * FROM artists WHERE name ILIKE '%${data}%' ORDER BY name ASC`,
    callback
  );
};

dbQueries.getAlbums = (connPool, data, callback) => {
  connPool.query(
    `SELECT * FROM albums WHERE artist_id = ${data} AND skipped = false ORDER BY year`,
    callback
  );
}

module.exports = dbQueries;
