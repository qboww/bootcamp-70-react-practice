import { ClimbingBoxLoader } from 'react-spinners';
import { BackDrop } from 'components';

export const Loader = () => {
  return (
    <BackDrop>
      <ClimbingBoxLoader color="#36bed6" />
    </BackDrop>
  );
};
