import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call - replace with your actual form submission logic
    try {
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated delay
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="py-40 px-6 md:px-12 max-w-4xl mx-auto border-t swiss-border mb-20 flex flex-col items-center">
      
      {/* Centered Editorial Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-editorial uppercase text-6xl md:text-8xl text-white tracking-tighter leading-[0.85] fade-in drop-shadow-lg">
          Connect <span className="text-[#A0151E]">With Me</span>
        </h2>
        <p className="text-white/80 font-mono-system text-[10px] md:text-xs uppercase tracking-[0.6em] font-bold fade-in [animation-delay:200ms] drop-shadow-sm">
          Feel free to send a message
        </p>
      </div>

      {/* Centered Curved Architectural Container */}
      <div className="w-full bg-[#121212]/95 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group/card fade-in [animation-delay:400ms]">
        {/* Subtle decorative glow */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#A0151E]/20 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#A0151E]/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
        
        <form className="space-y-12 relative z-10" onSubmit={handleSubmit}>
          
          {/* Field: Identity */}
          <div className="group relative">
            <div className="flex justify-between items-end mb-2">
              <label 
                htmlFor="name"
                className="text-[11px] uppercase tracking-[0.4em] text-white group-focus-within:text-[#A0151E] transition-colors font-mono-system font-bold"
              >
                01 // Name
              </label>
              {errors.name && (
                <span className="text-[10px] text-[#A0151E] animate-pulse">{errors.name}</span>
              )}
            </div>
            <input 
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/30 py-5 text-xl md:text-3xl font-editorial uppercase tracking-tight text-white focus:outline-none focus:border-[#A0151E] transition-all placeholder:text-white/30"
              placeholder="Name / Organization"
              disabled={isSubmitting}
            />
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A0151E] group-focus-within:w-full transition-all duration-700 ease-out" />
          </div>

          {/* Field: Communication Line */}
          <div className="group relative">
            <div className="flex justify-between items-end mb-2">
              <label 
                htmlFor="email"
                className="text-[11px] uppercase tracking-[0.4em] text-white group-focus-within:text-[#A0151E] transition-colors font-mono-system font-bold"
              >
                02 // Email Address
              </label>
              {errors.email && (
                <span className="text-[10px] text-[#A0151E] animate-pulse">{errors.email}</span>
              )}
            </div>
            <input 
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/30 py-5 text-xl md:text-3xl font-editorial uppercase tracking-tight text-white focus:outline-none focus:border-[#A0151E] transition-all placeholder:text-white/30"
              placeholder="Email Address"
              disabled={isSubmitting}
            />
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A0151E] group-focus-within:w-full transition-all duration-700 ease-out" />
          </div>

          {/* Field: Brief */}
          <div className="group relative">
            <div className="flex justify-between items-end mb-2">
              <label 
                htmlFor="message"
                className="text-[11px] uppercase tracking-[0.4em] text-white group-focus-within:text-[#A0151E] transition-colors font-mono-system font-bold"
              >
                03 // Message
              </label>
              {errors.message && (
                <span className="text-[10px] text-[#A0151E] animate-pulse">{errors.message}</span>
              )}
            </div>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={2}
              className="w-full bg-transparent border-b border-white/30 py-5 text-xl md:text-2xl font-editorial uppercase tracking-tight text-white focus:outline-none focus:border-[#A0151E] transition-all resize-none placeholder:text-white/30"
              placeholder="Message"
              disabled={isSubmitting}
            />
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A0151E] group-focus-within:w-full transition-all duration-700 ease-out" />
          </div>

          {/* Submit Mechanism */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-10">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-[#A0151E] text-white font-editorial uppercase text-lg tracking-[0.6em] px-16 py-7 
                         rounded-full transition-all duration-500 ease-in-out transform relative overflow-hidden group/btn
                         hover:bg-[#801118] hover:scale-[0.98] active:scale-95 shadow-xl shadow-black/40
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
            </button>
            
            <div className="flex gap-10 text-[10px] uppercase tracking-[0.5em] text-white/80 font-mono-system">
              <a href="https://www.linkedin.com/in/akhilan-a-7b31b825a/" target="_blank" rel="noopener noreferrer" className="hover:text-[#A0151E] transition-colors border-b border-transparent hover:border-[#A0151E] pb-1">LinkedIn</a>
              <a href="https://github.com/Akhilan5327" target="_blank" rel="noopener noreferrer" className="hover:text-[#A0151E] transition-colors border-b border-transparent hover:border-[#A0151E] pb-1">GitHub</a>
            </div>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-8 p-6 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
              <p className="text-green-400 font-mono-system text-sm uppercase tracking-wider">
                Message sent successfully!
              </p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mt-8 p-6 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
              <p className="text-red-400 font-mono-system text-sm uppercase tracking-wider">
                Failed to send message. Please try again.
              </p>
            </div>
          )}
        </form>
      </div>

      {/* Decorative vertical line to continue the flow */}
      <div className="mt-20 w-[1px] h-20 bg-gradient-to-b from-[#A0151E] to-transparent opacity-60"></div>
    </section>
  );
};