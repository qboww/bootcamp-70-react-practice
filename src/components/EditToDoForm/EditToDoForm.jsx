import { useSelector } from 'react-redux';
import { selectCurrentToDo } from 'reduxStore/selectors';

export const EditToDoForm = () => {
  const currentToDo = useSelector(selectCurrentToDo);
  return <div>additForm</div>;
};
