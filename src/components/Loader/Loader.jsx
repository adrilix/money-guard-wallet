import { Blocks } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';

export const LoaderSpinner = () => {
  return (
    <LoaderStyle>
      <Blocks
        visible={true}
        height="40"
        width="40"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </LoaderStyle>
  );
};
