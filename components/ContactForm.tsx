'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  // Honeypot field for spam protection
  website?: string;
}

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot field
    if (data.website && data.website.trim() !== '') {
      // Likely spam, silently ignore
      setSubmitStatus('success');
      reset();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-6 ${className}`}
      noValidate
    >
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters',
            },
            maxLength: {
              value: 100,
              message: 'Name must be less than 100 characters',
            },
          })}
          className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
            errors.name ? 'border-error' : 'border-border'
          }`}
          placeholder="Your full name"
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-error">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
            errors.email ? 'border-error' : 'border-border'
          }`}
          placeholder="your.email@example.com"
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-error">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          {...register('subject', {
            required: 'Subject is required',
            minLength: {
              value: 5,
              message: 'Subject must be at least 5 characters',
            },
            maxLength: {
              value: 200,
              message: 'Subject must be less than 200 characters',
            },
          })}
          className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
            errors.subject ? 'border-error' : 'border-border'
          }`}
          placeholder="What's this about?"
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-sm text-error">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters',
            },
            maxLength: {
              value: 2000,
              message: 'Message must be less than 2000 characters',
            },
          })}
          className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical ${
            errors.message ? 'border-error' : 'border-border'
          }`}
          placeholder="Tell me about your project or inquiry..."
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-error">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot Field (Hidden) */}
      <div className="hidden">
        <label htmlFor="website">Website (leave blank)</label>
        <input
          type="text"
          id="website"
          {...register('website')}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-background"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
          <p className="text-success font-medium">
            Thank you! Your message has been sent successfully.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-error/10 border border-error/20 rounded-lg">
          <p className="text-error font-medium">
            Sorry, there was an error sending your message. Please try again later.
          </p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;