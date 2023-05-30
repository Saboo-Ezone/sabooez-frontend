import React from 'react';
import patternWhite from '../assets/other/pattern-grid-white.png';
import bannerCotact from '../assets/other/banner-careers.jpg';

import { useFirebase } from '../context/Firebase';
// import { Formik, Form, Field,  } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;

const jobSchema = Yup.object().shape({
  name: Yup.string().required('Information is required*'),
  role: Yup.string().required('Information is required*'),
  // phone: Yup.string()
  //   .matches(phoneRegex, 'Invalid phone number')
  //   .required('Information is required*'),
  email: Yup.string()
    .email('Invalid email address')
    .matches(emailReg, 'mail is not valid')
    .required('Information is required*'),
});

const Careers = () => {
  const Firebase = useFirebase();

  return (
    <>
      <section
        className='bg-[#edede6] '
        style={{ backgroundImage: `url(${patternWhite})` }}
      >
        <div className='flex  flex-col justify-between  md:flex-row xl:h-[80%]'>
          <div className='py-10 font-roboto md:w-1/2 md:pr-2'>
            <div className='pb-4  pl-8 pr-2 pt-12 text-left text-4xl md:pl-16 lg:pb-8 lg:pl-20'>
              SWITCH up your career
            </div>
            <div className='type-of-block'>
              <div className=' pl-8 md:pl-16 lg:pl-20'>
                <div className='pb-8 text-xl text-[#505bfe]'>
                  We're always on the lookout for like-minded talent.
                </div>
                <div className='pb-8 text-xl text-[#505bfe]'>
                  If you're interested in helping us build cleaner, smarter,
                  better cities – we want to hear from you email
                  <a
                    className='italic text-black hover:font-medium'
                    href='mailto:sabooezone@gmail.com'
                  >
                    {' '}
                    sabooezone@gmail.com
                  </a>
                </div>

                <div className=' pb-2 text-xl '>Be part of a global family</div>
                <div className='text-sm text-[#505bfe]'>
                  <span>
                    From our engineers to our apprentices, it's our people who
                    drive us forward.
                  </span>
                  <br />
                  <span>
                    The SWITCH team is made up of diverse individuals with a
                    shared passion for innovation. Together, we create, develop
                    and deliver market-leading electric vehicles in the UK,
                    India and across the world.
                  </span>
                  <ul className='list-disc pl-6 font-mono'>
                    {/* <li>Global network across 40+ countries</li> */}
                    <li>Exciting opportunities in the mobility sector</li>
                    <li>Comprehensive apprenticeship programmes</li>
                    <li>Competitive remuneration and benefits</li>
                    <li>Opportunity to make a real difference</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className='h-[40vh] w-full bg-cover bg-center bg-no-repeat md:h-auto md:w-1/2'
            style={{ backgroundImage: `url(${bannerCotact})` }}
          ></div>
        </div>
      </section>
      <section className='my-10 px-8 md:my-16 lg:px-16 '>
        <Formik
          initialValues={{
            name: '',
            email: '',
            role: '',
          }}
          validationSchema={jobSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            // Firebase.putData('ModelEnquiry', values);
            Firebase.writeData('ApplicantsData', values);
          }}
        >
          {({ isSubmitting }) => (
            <>
              <div className='text-h2 text-[#505bfe]'>Apply for Job</div>
              <Form>
                <div className='my-4 grid gap-x-2 sm:grid-cols-2 md:gap-y-2 md:gap-x-4  xl:grid-cols-4'>
                  <div className='my-2 pb-2 lg:mb-4'>
                    <ErrorMessage
                      name='name'
                      component='div'
                      className=' -mt-5 text-right text-sm text-red-700'
                    />
                    <Field
                      className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
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
                      className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed  focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
                      name='email'
                      id='email'
                      placeholder='Email'
                    />
                  </div>
                  <div className='my-2 pb-2 lg:mb-4'>
                    <ErrorMessage
                      name='role'
                      component='div'
                      className=' -mt-5 text-right text-sm text-red-700'
                    />
                    <Field
                      className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
                      type='text'
                      name='role'
                      id='role'
                      placeholder='Role you wanted to apply'
                      required
                    />
                  </div>

                  <div className='my-2 pb-2 lg:mb-4'>
                    <Field
                      type='file'
                      className='mb-1 block w-full border-2 border-indigo-700 px-2 py-1 text-lg leading-relaxed text-slate-500 file:mr-4 file:rounded-full  file:border-0  file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 '
                      name='resume' // Provide a valid name for the file input
                      id='resume' // Provide a valid ID for the file input
                      placeholder='Resume'
                      required
                    ></Field>
            
                  </div>
                </div>
                <button
                  type='submit'
                  className='group relative h-min overflow-hidden border-[2px]  border-indigo-700 px-6 py-2 text-xl font-medium text-indigo-500 shadow-inner'
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
              </Form>
            </>
          )}
        </Formik>
      </section>
    </>
  );
};

export default Careers;
