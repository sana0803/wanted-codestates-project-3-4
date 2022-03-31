import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Button = styled.button`
  width: 680px;
  height: 48px;
  display: block;
  margin: 0 auto;
  background-color: #bfe0ff;
  color: #3081cc;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    transition: all 0.2s ease-in;
    background-color: var(--main-color);
    color: #fff;
  }
`;

const AddButton = ({ isAdd, setIsAdd }) => {
  const handleAddContent = () => {
    setIsAdd(!isAdd);
  };
  return (
    <>
      <Button onClick={handleAddContent}>{isAdd ? '접기' : '더보기'}</Button>
    </>
  );
};

AddButton.propTypes = {
  setIsAdd: PropTypes.func,
  isAdd: PropTypes.bool,
};

export default AddButton;
