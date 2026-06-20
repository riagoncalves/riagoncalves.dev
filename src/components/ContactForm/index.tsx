'use client';

import { InputField } from './components/InputField';
import { TextAreaField } from './components/TextAreaField';
import { useContactForm } from './hooks/useContactForm';

export const ContactForm = () => {
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  return (
    <section id='contact' className='bg-secondary py-20'>
      <div className='max-w-2xl w-full mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4'>Get in Touch</h2>
          <p className='text-gray-400'>Have a project in mind or just want to say hi?</p>
        </div>

        <form
          name='contact'
          method='POST'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          onSubmit={handleSubmit}
          className='flex flex-col gap-5'
        >
          <input type='hidden' name='form-name' value='contact' />
          <p className='hidden'><input name='bot-field' /></p>

          <InputField id='name' type='text' name='name' label='Name' value={formData.name} onChange={handleChange} placeholder='Ricardo Gonçalves' required />
          <InputField id='email' type='email' name='email' label='Email' value={formData.email} onChange={handleChange} placeholder='hello@example.com' required />
          <TextAreaField id='message' name='message' label='Message' value={formData.message} onChange={handleChange} placeholder="What's on your mind?" required rows={5} />

          {status === 'success' && (
            <p className='text-emerald-400 text-sm text-center'>
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className='text-red-400 text-sm text-center'>
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type='submit'
            disabled={status === 'sending'}
            className='mt-2 px-6 py-3 bg-white text-black font-bold hover:bg-blue-400 hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};
