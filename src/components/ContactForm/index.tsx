'use client';

import { SectionHeading } from '@/components/SectionHeading';
import { InputField } from './components/InputField';
import { TextAreaField } from './components/TextAreaField';
import { useContactForm } from './hooks/useContactForm';
import { Locale } from '@/types';
import { getDictionary } from '@/utils';

interface Props {
  locale: Locale
}

export const ContactForm: React.FC<Props> = ({ locale }) => {
  const { formData, status, handleChange, handleSubmit } = useContactForm();
  const t = getDictionary(locale);

  return (
    <section id='contact' className='bg-secondary py-20'>
      <div className='max-w-2xl w-full mx-auto px-4'>
        <SectionHeading index={4} title={t.contact.title} subtitle={t.contact.subtitle} />

        <form
          name='contact'
          method='POST'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          onSubmit={handleSubmit}
          className='hud-frame flex flex-col gap-5 p-6 sm:p-8 bg-main/60 border border-neon-cyan/15'
        >
          <input type='hidden' name='form-name' value='contact' />
          <p className='hidden'><input name='bot-field' /></p>

          <InputField id='name' type='text' name='name' label={t.contact.nameLabel} value={formData.name} onChange={handleChange} placeholder={t.contact.namePlaceholder} required />
          <InputField id='email' type='email' name='email' label={t.contact.emailLabel} value={formData.email} onChange={handleChange} placeholder={t.contact.emailPlaceholder} required />
          <TextAreaField id='message' name='message' label={t.contact.messageLabel} value={formData.message} onChange={handleChange} placeholder={t.contact.messagePlaceholder} required rows={5} />

          {status === 'invalid' && (
            <p className='font-mono text-neon-pink text-sm text-center'>
              {t.contact.invalid}
            </p>
          )}
          {status === 'success' && (
            <p className='font-mono text-neon-green text-sm text-center'>
              {t.contact.success}
            </p>
          )}
          {status === 'error' && (
            <p className='font-mono text-neon-pink text-sm text-center'>
              {t.contact.error}
            </p>
          )}

          <button
            type='submit'
            disabled={status === 'sending'}
            className='btn-neon mt-2'
          >
            {status === 'sending' ? t.contact.sending : t.contact.submit}
          </button>
        </form>
      </div>
    </section>
  );
};
