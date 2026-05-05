'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Sanitize and format data
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim() || 'Not provided';
    const service = formData.service;
    const message = formData.message.trim();

    // Map service value to readable text
    const serviceMap: Record<string, string> = {
      // eCommerce Core
      'ecommerce-development': 'eCommerce Development',
      'custom-ecommerce': 'Custom eCommerce Development',
      'shopify-development': 'Shopify Development',
      'woocommerce-development': 'WooCommerce Development',
      
      // Account Management
      'account-management': 'eCommerce Account Management',
      'amazon-management': 'Amazon Account Management',
      'flipkart-management': 'Flipkart Account Management',
      'meesho-management': 'Meesho Account Management',
      
      // Digital Marketing
      'digital-marketing': 'Digital Marketing',
      'seo': 'SEO Services',
      'google-ads': 'Google Ads',
      'meta-ads': 'Meta Ads (Facebook & Instagram)',
      'social-media': 'Social Media Handling',
      'content-marketing': 'Content Marketing',
      
      // Web Services
      'web-services': 'Web Services',
      'web-development': 'Website Development',
      'web-hosting': 'Website Hosting',
      'devops': 'DevOps & Deployment',
      
      // Other
      'business-consulting': 'Business Consulting',
    };
    const serviceName = serviceMap[service] || service;

    // Create WhatsApp message format
    const whatsappMessage = `*New Consultation Request*
---------------------------------
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Service Required:* ${serviceName}
---------------------------------
*Message:*
${message}`;

    // Encode text for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/916355183655?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-widest uppercase text-primary/70 block px-1">Full Name *</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="Your full name"
            type="text"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-widest uppercase text-primary/70 block px-1">Email Address *</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="you@example.com"
            type="email"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-widest uppercase text-primary/70 block px-1">Phone Number</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="+91 XXXXX XXXXX"
            type="tel"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-widest uppercase text-primary/70 block px-1">Service Required *</label>
          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none pr-10"
              required
            >
              <option value="" disabled>Select a service…</option>
              
              <optgroup label="eCommerce Development">
                <option value="ecommerce-development">eCommerce Development</option>
                <option value="custom-ecommerce">Custom eCommerce Development</option>
                <option value="shopify-development">Shopify Development</option>
                <option value="woocommerce-development">WooCommerce Development</option>
              </optgroup>

              <optgroup label="Marketplace Management">
                <option value="account-management">eCommerce Account Management</option>
                <option value="amazon-management">Amazon Account Management</option>
                <option value="flipkart-management">Flipkart Account Management</option>
                <option value="meesho-management">Meesho Account Management</option>
              </optgroup>

              <optgroup label="Digital Marketing">
                <option value="digital-marketing">Digital Marketing (Full Suite)</option>
                <option value="seo">SEO Services</option>
                <option value="google-ads">Google Ads</option>
                <option value="meta-ads">Meta Ads (Facebook & Instagram)</option>
                <option value="social-media">Social Media Handling</option>
                <option value="content-marketing">Content Marketing</option>
              </optgroup>

              <optgroup label="Web Services">
                <option value="web-services">Web Services (Full Suite)</option>
                <option value="web-development">Website Development</option>
                <option value="web-hosting">Website Hosting</option>
                <option value="devops">DevOps & Deployment</option>
              </optgroup>

              <optgroup label="Consulting">
                <option value="business-consulting">Business Consulting</option>
              </optgroup>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-[18px]">expand_more</span>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-semibold tracking-widest uppercase text-primary/70 block px-1">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
          placeholder="Tell us about your project, goals, and any specific requirements…"
          rows={5}
          required
        />
      </div>
      <p className="text-on-surface-variant/60 text-xs">We respect your time. Expect clear communication, fast response, and practical solutions.</p>
      <button
        className="w-full py-5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold text-base tracking-wide hover:shadow-[0_10px_30px_rgba(79,142,255,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        type="submit"
      >
        <span className="material-symbols-outlined text-[20px]">send</span>
        Get Free Consultation
      </button>
    </form>
  );
}
