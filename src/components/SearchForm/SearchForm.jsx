import { Field, Form, Formik } from 'formik';
import s from './SearchForm.module.css';
import { IoIosCreate } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import { MdAdsClick } from 'react-icons/md';
import { validationSchema } from 'helpers/validationSchema';

const icons = { create: <IoIosCreate />, search: <FaSearch />, default: <MdAdsClick /> };

export const SearchForm = ({ onSubmit, icon = 'default' }) => {
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
              {icons[icon]}
            </button>
            {errors.text && touched.text ? <div className={s.errorMsg}>{errors.text}</div> : null}
            {/* <ErrorMessage component="div" name="text" /> */}
          </Form>
        );
      }}
    </Formik>
  );
};
