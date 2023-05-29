import React, { useState } from 'react';
// import patternBoxSvg from '../../assets/other/pattern-box.svg';

import bolt from '../../assets/other/bolt.gif';

import { useFirebase } from '../../context/Firebase';
// import { Formik, Form, Field,  } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

const SubmitForm = () => {
  const Firebase = useFirebase();

  const [sub, setSub] = useState(true);

  return (
    <div>
      {/* <h3 className='my-6 hidden text-3xl text-[#505bfe] md:block'>
        Contact Us
      </h3> */}
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
          Firebase.writeData('EnquiryForm', values);
          setSub(false);
        }}
      >
        {({ isSubmitting }) => (
          <div className='px-8 pb-6 pt-4 md:py-8 lg:px-16'>
            {sub ? (
              <>
                <div className='text-h2 text-[#505bfe]'>Enquire Now</div>
                <Form>
                  <div className='my-2 pb-2 lg:mb-4'>
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
                  </div>
                  <div className='my-2 pb-2 lg:mb-4'>
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
                  <div className='my-2 pb-2 lg:mb-4'>
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
                  <div className='my-2 pb-2 lg:mb-4'>
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

                  {/* <div className='relative mb-2 block '>
                      <input
                        type='checkbox'
                        name='subscribe_newsletter'
                        id='subscribeCheck'
                        className='mr-2 h-6 w-6'
                      />
                      <label className=' text-lg' htmlFor='subscribeCheck'>
                        Subscribe to news and updates from SWITCH
                      </label>
                    </div> */}

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
                  <div className='my-2 text-[10px] text-indigo-500'>
                    <span className=' '>
                      SWITCH Mobility is committed to protecting and respecting
                      your privacy.
                      <br />
                      We only use your personal information to provide the
                      information you requested from us.
                    </span>
                    <br />
                    <span className='mb-4 '>
                      For more information on how to unsubscribe, our privacy
                      practices, and how we are committed to protecting and
                      respecting your privacy, please review our Privacy Policy
                      .
                    </span>
                  </div>
                </Form>
              </>
            ) : (
              <div className='flex flex-col items-center md:flex-row '>
                <img src={bolt} alt='' className='mx-4 h-28' />
                <div className='text-h3 text-[#505bfe] lg:text-h2  '>
                  Thank you for your interest. Our team will contact you soon.{' '}
                  <span className='text-h6'>
                    <br />
                    We understand the importance of your inquiry and our
                    dedicated team is working diligently to provide you with a
                    prompt response.
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
        {/* <form id='signupForm' className=''>
          <div className='mb-4'>
            <input
              type='email'
              className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed focus:border-indigo-500 focus:ring-2  focus:ring-indigo-300  '
              name='newsletteryouremail'
              id='emailAddress'
              placeholder='Enter your email address here'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed focus:border-indigo-500 focus:ring-2  focus:ring-indigo-200  '
              id='fullName'
              maxlength='150'
              name='newsletteryourname'
              placeholder='Full name'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed focus:border-indigo-500 focus:ring-2  focus:ring-indigo-200  '
              id='jobtitle'
              maxlength='150'
              name='jobtitle'
              placeholder='Job title'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed focus:border-indigo-500 focus:ring-2  focus:ring-indigo-200  '
              id='company'
              maxlength='150'
              name='newslettercompanyname'
              placeholder='Company'
            />
          </div>
          <div className='mb-4'>
            <select
              className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed focus:border-indigo-500 focus:ring-2  focus:ring-indigo-200  '
              id='interest'
              name='newsletterinterest'
            >
              <option value>Interest</option>
              <option value='Aftersales / Parts'>Aftersales / Parts</option>
              <option value='Customer - private'>Customer - private</option>
              <option value='Customer - public'>Customer - public</option>
              <option value='Enthusiast'>Enthusiast</option>
              <option value='Investor'>Investor</option>
              <option value='Local authority'>Local authority</option>
              <option value='Media'>Media</option>
              <option value='Policy maker'>Policy maker</option>
              <option value='Recruitment'>Recruitment</option>
              <option value='Supplier'>Supplier</option>
              <option value='Other'>Other</option>
            </select>
          </div>
          <div className='mb-4'>
            <div className='flex justify-between'>
              <div className='relative mb-2 block '>
                <input
                  type='checkbox'
                  name='subscribe_newsletter'
                  id='subscribeCheck'
                  className='mr-2 h-6 w-6'
                />
                <label className=' text-lg' htmlFor='subscribeCheck'>
                  Subscribe to news and updates from SWITCH
                </label>
              </div>
              <button
                type='submit'
                id='signupSubmit'
                className='whitespace-no-wrap rounded-full  border-2 border-indigo-500  px-1  py-1 text-center align-middle font-medium no-underline hover:shadow-lg hover:shadow-indigo-500 '
              >
                Submit
              </button>
            </div>
          </div>
          <div className='display-def-9'>
            <p className='mb-2 text-sm'>
              SWITCH Mobility is committed to protecting and respecting your
              privacy.
              <br />
              We only use your personal information to provide the information
              you requested from us.
            </p>
            <p className='mb-4 text-sm'>
              For more information on how to unsubscribe, our privacy practices,
              and how we are committed to protecting and respecting your
              privacy, please review our Privacy Policy .
            </p>
          </div>
        </form> */}
      </Formik>
    </div>
  );
};

export default SubmitForm;
