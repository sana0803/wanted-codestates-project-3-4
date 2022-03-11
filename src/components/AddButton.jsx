import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Button = styled.button`
  width: 90%;
  display: block;
  margin: 0 auto;
  background-color: #bfe0ff;
  color: #3081cc;
  border: 0;
  padding: 8px 0;
  border-radius: 5px;
  cursor: pointer;
`;

const AddButton = ({ addData, setAddData }) => {
  const handleAddContent = () => {
    setAddData(!addData);
  };
  return (
    <>
      <Button onClick={handleAddContent}>{addData ? '접기' : '더보기'}</Button>
    </>
  );
};

AddButton.propTypes = {
  setAddData: PropTypes.func,
  addData: PropTypes.bool,
};

export default AddButton;
