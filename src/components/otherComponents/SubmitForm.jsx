import React, { useState } from "react";
// import patternBoxSvg from '../../assets/other/pattern-box.svg';

// import { useFirebase } from '../../context/Firebase';
// import { Formik, Form, Field,  } from 'formik';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;

const EnquirySchema = Yup.object().shape({
  name: Yup.string().required("Information is required*"),
  phone: Yup.string()
    .matches(phoneRegex, "Invalid phone number")
    .required("Information is required*"),
  email: Yup.string()
    .email("Invalid email address")
    .matches(emailReg, "mail is not valid"),
  // .required('Information is required*'),
  model: Yup.string().required("Information is required*"),
});

const SubmitForm = () => {
  // const Firebase = useFirebase();

  const [sub, setSub] = useState(true);

  return (
    <div>
      {/* <h3 className='my-6 hidden text-3xl text-[#505bfe] md:block'>
        Contact Us
      </h3> */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        validationSchema={EnquirySchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          // Firebase.putData('ModelEnquiry', values);
          // Firebase.writeData('EnquiryForm', values);
          setSub(false);
        }}
      >
        {({ isSubmitting }) => (
          <div className="px-8 pt-4 pb-6 md:py-8 lg:px-16">
            {sub ? (
              <>
                <div className="text-h2 text-[#505bfe]">Enquire Now</div>
                <Form>
                  <div className="pb-2 my-2 lg:mb-4">
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="-mt-5 text-sm text-right text-red-700 "
                    />
                    <Field
                      className="block w-full px-2 py-2 mb-1 text-lg leading-relaxed border-2 border-indigo-700 placeholder:text-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 "
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="pb-2 my-2 lg:mb-4">
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="-mt-5 text-sm text-right text-red-700 "
                    />
                    <Field
                      type="email"
                      className="block w-full px-2 py-2 mb-1 text-lg leading-relaxed border-2 border-indigo-700 placeholder:text-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 "
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="pb-2 my-2 lg:mb-4">
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="-mt-5 text-sm text-right text-red-700 "
                    />
                    <Field
                      type="number"
                      className="block w-full px-2 py-2 mb-1 text-lg leading-relaxed border-2 border-indigo-700 placeholder:text-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 "
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="pb-2 my-2 lg:mb-4">
                    <ErrorMessage
                      name="model"
                      component="div"
                      className="-mt-5 text-sm text-right text-red-700 "
                    />
                    <Field
                      required
                      as="select"
                      className="block w-full px-2 py-2 mb-1 text-lg leading-relaxed border-2 border-indigo-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 "
                      name="model"
                      id="model"
                    >
                      <option className="text-sm text-gray-500" value="">
                        Select Model
                      </option>
                      <option className="bg-gray-100 " value="Switch E1">
                        Switch E1
                      </option>
                      <option
                        className="bg-gray-100 "
                        value="Switch Metrodecker"
                      >
                        Switch Metrodecker
                      </option>
                      <option className="bg-gray-100 " value="Switch Metrocity">
                        Switch Metrocity
                      </option>
                      <option className="bg-gray-100 " value="Switch Solo">
                        Switch Solo
                      </option>
                      <option className="bg-gray-100 " value="eLCV">
                        eLCV
                      </option>
                    </Field>
                  </div>

                  {/* <div className='relative block mb-2 '>
                      <input
                        type='checkbox'
                        name='subscribe_newsletter'
                        id='subscribeCheck'
                        className='w-6 h-6 mr-2'
                      />
                      <label className='text-lg ' htmlFor='subscribeCheck'>
                        Subscribe to news and updates from SWITCH
                      </label>
                    </div> */}

                  <button
                    type="submit"
                    className="group relative h-min overflow-hidden border-[2px]  border-indigo-700 px-6 py-2 text-xl font-medium text-indigo-500 shadow-inner"
                    // disabled={isSubmitting}
                  >
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-indigo-400 border-t-1 ease group-hover:w-full"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-indigo-400 border-b-1 ease group-hover:w-full"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-400 ease group-hover:h-full"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-400 ease group-hover:h-full"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-indigo-700 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 ease group-hover:text-white">
                      SUBMIT
                    </span>
                  </button>
                  <div className="my-2 text-[10px] text-indigo-500">
                    <span className="">
                      SWITCH Mobility is committed to protecting and respecting
                      your privacy.
                      <br />
                      We only use your personal information to provide the
                      information you requested from us.
                    </span>
                    <br />
                    <span className="mb-4 ">
                      For more information on how to unsubscribe, our privacy
                      practices, and how we are committed to protecting and
                      respecting your privacy, please review our Privacy Policy
                      .
                    </span>
                  </div>
                </Form>
              </>
            ) : (
              <div className="flex flex-col items-center md:flex-row ">
                <div className="text-h3 text-[#505bfe] lg:text-h2  ">
                  Thank you for your interest. Our team will contact you soon.{" "}
                  <span className="text-h6">
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
              className='block w-full px-2 py-2 mb-1 text-lg leading-relaxed border-2 border-indigo-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 '
              name='newsletteryouremail'
              id='emailAddress'
              placeholder='Enter your email address here'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              className='block w-full px-2 py-2 mb-1 text-lg leading-relaxed border-2 border-indigo-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 '
              id='fullName'
              maxlength='150'
              name='newsletteryourname'
              placeholder='Full name'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              className='block w-full px-2 py-2 mb-1 text-lg leading-relaxed border-2 border-indigo-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 '
              id='jobtitle'
              maxlength='150'
              name='jobtitle'
              placeholder='Job title'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              className='block w-full px-2 py-2 mb-1 text-lg leading-relaxed border-2 border-indigo-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 '
              id='company'
              maxlength='150'
              name='newslettercompanyname'
              placeholder='Company'
            />
          </div>
          <div className='mb-4'>
            <select
              className='block w-full px-2 py-2 mb-1 text-lg leading-relaxed border-2 border-indigo-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 '
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
              <div className='relative block mb-2 '>
                <input
                  type='checkbox'
                  name='subscribe_newsletter'
                  id='subscribeCheck'
                  className='w-6 h-6 mr-2'
                />
                <label className='text-lg ' htmlFor='subscribeCheck'>
                  Subscribe to news and updates from SWITCH
                </label>
              </div>
              <button
                type='submit'
                id='signupSubmit'
                className='px-1 py-1 font-medium text-center no-underline whitespace-no-wrap align-middle border-2 border-indigo-500 rounded-full hover:shadow-lg hover:shadow-indigo-500 '
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
