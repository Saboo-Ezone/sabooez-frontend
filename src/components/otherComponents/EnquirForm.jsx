import React, { useEffect } from 'react';
// import patternBoxSvg from '../../assets/other/pattern-box.svg';
import patternWhite from '../../assets/other/pattern-grid-white.png';
import { useFirebase } from '../../context/Firebase';
// import { Formik, Form, Field,  } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import AOS from 'aos';
import 'aos/dist/aos.css';
const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;

const EnquirySchema = Yup.object().shape({
  name: Yup.string().required('Information is required*'),
  phone: Yup.string()
    .matches(phoneRegex, 'Invalid phone number')
    .required('Information is required*'),
  email: Yup.string()
    .email('Invalid email address')
    .matches(emailReg, 'mail is not valid'),
  // .required('Information is required*'),
  model: Yup.string().required('Information is required*'),
});

const EnquirForm = () => {
  const Firebase = useFirebase();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
        }}
        validationSchema={EnquirySchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          // Firebase.putData('ModelEnquiry', values);
          Firebase.writeData(values);
        }}
      >
        {({ isSubmitting }) => (
          <section
            className=' mt-2  bg-[#edede6] '
            // style={{ backgroundImage: `url(${patternBoxSvg})` }}
            style={{ backgroundImage: `url(${patternWhite})` }}
          >
            <div className='px-8 py-8 lg:px-16'>
              <div data-aos='zoom-in' className='text-h2 text-[#505bfe]'>
                Enquire Now
              </div>
              <Form>
                <div className='my-4 grid gap-x-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-4 xl:grid-cols-5'>
                  <div className='mb-2 lg:mb-4'>
                    <ErrorMessage
                      name='name'
                      component='div'
                      className=' -mt-5 text-right text-sm text-red-700'
                    />
                    <Field
                      className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed placeholder:text-gray-800 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Name'
                      required
                    />

                    {/* <Field
                      required
                      className='mb-6 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none'
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Name'
                    /> */}
                  </div>
                  <div className='mb-2 lg:mb-4'>
                    <ErrorMessage
                      name='email'
                      component='div'
                      className=' -mt-5 text-right text-sm text-red-700'
                    />
                    <Field
                      type='email'
                      className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed placeholder:text-gray-800 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
                      name='email'
                      id='email'
                      placeholder='Email'
                    />
                  </div>
                  <div className='mb-2 lg:mb-4'>
                    <ErrorMessage
                      name='phone'
                      component='div'
                      className=' -mt-5 text-right text-sm text-red-700'
                    />
                    <Field
                      type='number'
                      className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed placeholder:text-gray-800 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
                      name='phone'
                      id='phone'
                      placeholder='Phone Number'
                      required
                    />
                  </div>
                  <div className='mb-2 lg:mb-4'>
                    <ErrorMessage
                      name='model'
                      component='div'
                      className=' -mt-5 text-right text-sm text-red-700'
                    />
                    <Field
                      required
                      as='select'
                      className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed  focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
                      name='model'
                      id='model'
                    >
                      <option className='text-sm text-gray-500' value=''>
                        Select Model
                      </option>
                      <option className='bg-gray-100 ' value='Switch E1'>
                        Switch E1
                      </option>
                      <option
                        className='bg-gray-100 '
                        value='Switch Metrodecker'
                      >
                        Switch Metrodecker
                      </option>
                      <option className='bg-gray-100 ' value='Switch Metrocity'>
                        Switch Metrocity
                      </option>
                      <option className='bg-gray-100 ' value='Switch Solo'>
                        Switch Solo
                      </option>
                    </Field>
                  </div>

                  <div
                    className='justify-center lg:w-full xl:flex'
                    data-aos='zoom-in'
                  >
                    <button
                      type='submit'
                      className='group relative h-min overflow-hidden border-[2px]  border-indigo-700 px-6 py-2 text-xl font-medium text-indigo-500 shadow-inner'
                      // disabled={isSubmitting}
                    >
                      <span className='border-t-1 ease absolute left-0 top-0 h-0 w-0 border-indigo-400 transition-all duration-200 group-hover:w-full'></span>
                      <span className='border-b-1 ease absolute bottom-0 right-0 h-0 w-0 border-indigo-400 transition-all duration-200 group-hover:w-full'></span>
                      <span className='ease absolute left-0 top-0 h-0 w-full bg-indigo-400 transition-all delay-200 duration-300 group-hover:h-full'></span>
                      <span className='ease absolute bottom-0 left-0 h-0 w-full bg-indigo-400 transition-all delay-200 duration-300 group-hover:h-full'></span>
                      <span className='absolute inset-0 h-full w-full bg-indigo-700  opacity-0 delay-300 duration-300 group-hover:opacity-100'></span>
                      <span className='ease relative transition-colors delay-200 duration-300 group-hover:text-white'>
                        SUBMIT
                      </span>
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </section>
        )}
      </Formik>
    </>
  );
};

export default EnquirForm;
