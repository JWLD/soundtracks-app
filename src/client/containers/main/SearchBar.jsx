import React, { Component } from 'react';
import FaClose from 'react-icons/lib/fa/close';
import FaPlus from 'react-icons/lib/fa/plus';
import { connect } from 'react-redux';
import Axios from 'axios';

import { setSearchTerm, setResults } from '../../redux/actions';

const SearchBar = (props) => {
  const iconClass = props.searchTerm ? 'page-hdr__reset-btn' : 'hide';

  return (
    <header className='page-hdr'>
			<div>
				<input
					className='page-hdr__input'
					value={props.searchTerm}
					onChange={props.onSearchTermChange}
					placeholder='Search'
				/>
				<div className='page-hdr__reset-wrap'>
					<FaClose
						className={iconClass}
						onClick={props.clearSearch}
					/>
				</div>
			</div>
			<a href="/add"><FaPlus /></a>
    </header>
  );
};

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch) => ({
  onSearchTermChange: (event) => {
    dispatch(setSearchTerm(event.target.value));
  },

  clearSearch: () => {
    dispatch(setSearchTerm(''));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
