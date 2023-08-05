import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
  resize: none;
  transition: all 0.3s ease-in-out;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-family: Circe;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: #000;
  max-width: 100%;
  margin-bottom: 10px;
  width: 280px;
  line-height: 1.33;
  padding-left: 8px;

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    min-height: 27px;
    height: 27px;
    overflow: hidden;
    width: 409.5px;
  }

  @media (max-width: 767px) {
    height: auto;
    min-height: 85px;
    padding-left: 20px;
    padding-right: 20px;

    &::-webkit-scrollbar {
      width: 4px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #bdbdbd;
    }
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #bdbdbd;
    }

    mask-image: linear-gradient(to top, transparent, #000),
      linear-gradient(to left, transparent 4px, #000 4px);
    mask-size: 100% 20000px;
    mask-position: left bottom;
    -webkit-mask-image: linear-gradient(to top, transparent, #000),
      linear-gradient(to left, transparent 4px, var#000 4px);
    -webkit-mask-size: 100% 20000px;
    -webkit-mask-position: left bottom;
    transition: mask-position 0.3s, -webkit-mask-position 0.3s;

    &:hover {
      -webkit-mask-position: left top;
      mask-position: left top;
    }
  }
`;
