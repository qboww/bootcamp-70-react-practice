import { Field, Form, Formik } from 'formik';
import s from './SearchForm.module.css';
import * as Yup from 'yup';
import { IoIosCreate } from 'react-icons/io';

const validationSchema = Yup.object().shape({
  text: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export const SearchForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        text: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => {
        return (
          <Form className={s.searchForm}>
            <Field name="text" className={s.searchInput} />
            <button type="submit" className={s.searchBtn}>
              <IoIosCreate />
            </button>
            {errors.text && touched.text ? <div className={s.errorMsg}>{errors.text}</div> : null}
            {/* <ErrorMessage component="div" name="text" /> */}
          </Form>
        );
      }}
    </Formik>
  );
};
