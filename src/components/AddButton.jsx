import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({ addData, setAddData }) => {
  const handleAddContent = () => {
    setAddData(!addData);
  };
  return (
    <>
      <button onClick={handleAddContent}>{addData ? '접기' : '더보기'}</button>
    </>
  );
};

AddButton.propTypes = {
  setAddData: PropTypes.func,
  addData: PropTypes.bool,
};

export default AddButton;
