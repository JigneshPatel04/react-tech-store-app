import React from 'react';
import Title from '../Title';

export default function Contact() {
  return (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <Title title='contact us' />
          <form
            className='mt-5'
            action='https://formspree.io/decodetest123@gmail.com'
            method='POST'
          >
            {/* first */}
            <div className='form-group'>
              <input
                type='text'
                name='firstName'
                className='form-control'
                placeholder='Lori Tonny'
              />
            </div>

            {/* email */}
            <div className='form-group'>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='loritonny@email.com'
              />
            </div>

            {/* subject */}
            <div className='form-group'>
              <input
                type='text'
                name='subject'
                className='form-control'
                placeholder='subject!!!'
              />
            </div>

            {/* message */}
            <div className='form-group'>
              <textarea
                name='message'
                className='form-control'
                rows='10'
                placeholder='Hello Lori Tonny'
              />
            </div>

            {/* submit */}
            <div className='form-group mt-3'>
              <input type='submit' value='Send' className='form-control bg-primary text-white' />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
