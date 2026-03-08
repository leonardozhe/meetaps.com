'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { useState } from 'react';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  companyName: z.string().min(1, { message: 'Company name is required.' }),
  companySize: z.string().min(1, { message: 'Please select your company size.' }),
  serviceInterest: z.array(z.string()).min(1, { message: 'Please select at least one service.' }),
  description: z.string().max(500, { message: 'Description must not exceed 500 characters.' }),
  heardFrom: z.string().min(1, { message: 'Please select how you heard about us.' }),
  privacyAgreement: z.boolean().refine(val => val === true, { message: 'You must agree to the Privacy Policy.' }),
});

type FormData = z.infer<typeof formSchema>;

const companySizes = [
  { value: '1-50', label: '1-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-1000', label: '201-1000 employees' },
  { value: '1000+', label: '1000+ employees' },
];

const services = [
  { value: 'ai-compute', label: 'AI Compute Tokens' },
  { value: 'ecommerce', label: 'Cross-Border E-Commerce' },
  { value: 'geo', label: 'GEO Optimization' },
  { value: 'openclaw', label: 'OpenClaw Customization' },
  { value: 'ai-consulting', label: 'AI Architecture Consulting' },
];

const heardFromOptions = [
  { value: 'search', label: 'Search Engine' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'referral', label: 'Referral' },
  { value: 'social', label: 'Social Media' },
  { value: 'other', label: 'Other' },
];

export default function ConsultationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      companyName: '',
      companySize: '',
      serviceInterest: [],
      description: '',
      heardFrom: '',
      privacyAgreement: false,
    },
  });

  async function onSubmit(data: FormData) {
    console.log(data);

    try {
      // Send form data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        // Reset form after successful submission
        form.reset();
      } else {
        console.error('Submission error:', result.message);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <div className="bg-[--color-surface] rounded-lg p-8">
          <div className="text-[--color-accent] text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p className="text-[--color-text-secondary] mb-6">
            Your consultation request has been submitted successfully. We will contact you shortly.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="mx-auto"
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Book Your Free Consultation</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      className="w-full px-3 py-2 bg-[--color-surface] border border-[--color-border] rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-accent] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Email *</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      type="email"
                      className="w-full px-3 py-2 bg-[--color-surface] border border-[--color-border] rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-accent] focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name *</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="w-full px-3 py-2 bg-[--color-surface] border border-[--color-border] rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-accent] focus:border-transparent"
                    placeholder="Company Inc."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="companySize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Size *</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full px-3 py-2 bg-[--color-surface] border border-[--color-border] rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-accent] focus:border-transparent"
                    >
                      <option value="">Select size</option>
                      {companySizes.map((size) => (
                        <option key={size.value} value={size.value}>
                          {size.label}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="heardFrom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you hear about us? *</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full px-3 py-2 bg-[--color-surface] border border-[--color-border] rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-accent] focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      {heardFromOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="serviceInterest"
            render={() => (
              <FormItem>
                <FormLabel>Service Interest *</FormLabel>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {services.map((service) => (
                    <FormField
                      key={service.value}
                      control={form.control}
                      name="serviceInterest"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={service.value}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <input
                                type="checkbox"
                                className="mt-1 h-4 w-4 rounded border-[--color-border] bg-[--color-surface] text-[--color-accent] focus:ring-[--color-accent] focus:ring-offset-0"
                                checked={field.value?.includes(service.value)}
                                onChange={(e) => {
                                  const newValue = e.target.checked
                                    ? [...field.value, service.value]
                                    : field.value.filter((value) => value !== service.value);
                                  field.onChange(newValue);
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {service.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brief Description</FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    rows={4}
                    className="w-full px-3 py-2 bg-[--color-surface] border border-[--color-border] rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-accent] focus:border-transparent resize-none"
                    placeholder="Tell us about your project or goals..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="privacyAgreement"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-[--color-border] bg-[--color-surface] text-[--color-accent] focus:ring-[--color-accent] focus:ring-offset-0"
                    checked={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-sm font-normal">
                  I agree to the <a href="/legal/privacy-policy" className="text-[--color-accent] hover:underline">Privacy Policy</a> *
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" size="lg">
            Submit Request
          </Button>
        </form>
      </Form>
    </div>
  );
}