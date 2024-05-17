import { Field, Form, Formik } from 'formik';
import { validationSchema } from 'helpers/validationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { changeTodoThunk } from 'reduxStore/operations';
import { selectCurrentToDo } from 'reduxStore/selectors';
import { MdOutlineCancel } from 'react-icons/md';
import { addCurrentToDo } from 'reduxStore/toDoSlice';

export const EditToDoForm = () => {
  const dispatch = useDispatch();
  const currentToDo = useSelector(selectCurrentToDo);

  return (
    <>
      <button
        onClick={() => {
          dispatch(addCurrentToDo(null));
        }}
      >
        <MdOutlineCancel />
      </button>
      <Formik
        initialValues={{ text: currentToDo.text }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          dispatch(changeTodoThunk({ ...values, id: currentToDo.id }));
          actions.resetForm();
        }}
      >
        <Form>
          <Field name="text" />
          <button type="submit">Change</button>
        </Form>
      </Formik>
    </>
  );
};
