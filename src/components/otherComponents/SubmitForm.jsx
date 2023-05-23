import React from 'react';

const SubmitForm = () => {
  return (
    <div>
      <h3 className='my-6 hidden text-3xl text-[#505bfe] md:block'>
        Contact Us
      </h3>

      <form id='signupForm' className=''>
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
            We only use your personal information to provide the information you
            requested from us.
          </p>
          <p className='mb-4 text-sm'>
            For more information on how to unsubscribe, our privacy practices,
            and how we are committed to protecting and respecting your privacy,
            please review our Privacy Policy .
          </p>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
