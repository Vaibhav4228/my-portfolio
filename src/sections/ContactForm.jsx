import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";
import emailjs from "@emailjs/browser";
import CalendlyWidget from "../components/CalendlyWidget";

const CALENDLY_URL = "https://calendly.com/vaibhavsharma88890/lets-connect-to-resolve-your-problem";

// ============================================
// EMAILJS CONFIGURATION - REQUIRED SETUP
// ============================================
// 
// WHY EMAILJS IS NOT CONFIGURED:
// EmailJS requires API keys to send emails. These keys are unique to your account
// and must be obtained from your EmailJS dashboard. Without these keys, the form
// cannot send emails directly to your inbox.
//
// WHAT IS EMAILJS?
// EmailJS is a free email service (200 emails/month) that allows you to send emails
// directly from your website's contact form without needing a backend server.
// It's secure, reliable, and perfect for portfolio sites.
//
// HOW TO SET UP (5 MINUTES):
// 
// STEP 1: Sign Up (Free)
//   → Go to: https://www.emailjs.com/
//   → Click "Sign Up" and create a free account
//   → Free plan includes 200 emails per month
//
// STEP 2: Add Gmail Service
//   → Login to dashboard: https://dashboard.emailjs.com/admin
//   → Go to "Email Services" → "Add New Service"
//   → Select "Gmail" → Click "Connect Account"
//   → Authorize EmailJS to access your Gmail
//   → Copy the "Service ID" (looks like: service_xxxxx)
//
// STEP 3: Create Email Template
//   → Go to "Email Templates" → "Create New Template"
//   → Template Name: "Contact Form"
//   → Subject: {{subject}}
//   → Content:
//      New Contact Form Submission
//      
//      From: {{from_name}}
//      Email: {{from_email}}
//      Phone: {{phone}}
//      
//      Project Type: {{project_type}}
//      Budget: {{budget}}
//      Timeline: {{timeline}}
//      
//      Message:
//      {{message}}
//   → Click "Save"
//   → Copy the "Template ID" (looks like: template_xxxxx)
//
// STEP 4: Get Public Key
//   → Go to "Account" → "General"
//   → Find "Public Key" section
//   → Copy your Public Key
//
// STEP 5: Update This File
//   → Replace the three values below with your actual keys
//   → Save the file
//   → Test the form!
//
// ============================================

const EMAILJS_PUBLIC_KEY = "-c22pf-igtoIWExGG"; // ✅ Your Public Key
const EMAILJS_SERVICE_ID = "service_lxn7xy8"; // ✅ Your Service ID
const EMAILJS_TEMPLATE_ID_CONTACT = "YOUR_CONTACT_TEMPLATE_ID"; // ⚠️ NEEDED: Create "Contact Form" template for messages to you
const EMAILJS_TEMPLATE_ID_AUTO_REPLY = "template_lzjf43f"; // ✅ Your Auto-Reply Template ID
const RECIPIENT_EMAIL = "vaibhav200345@gmail.com"; // ✅ Already set to your email

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const projectTypes = [
    "Full-Stack Web Application",
    "AI/ML Integration",
    "E-Commerce Platform",
    "Landing Page",
    "Mobile App",
    "API Development",
    "Code Review/Audit",
    "Consulting",
    "Other",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Let's Discuss",
  ];

  const timelines = [
    "ASAP",
    "1-2 weeks",
    "1 month",
    "2-3 months",
    "3-6 months",
    "Flexible",
  ];

  useGSAP(() => {
    gsap.from(".form-element", {
      y: 50,
      opacity: 0,
      delay: 0.3,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 80%",
      },
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check if EmailJS is configured
    if (EMAILJS_TEMPLATE_ID_CONTACT === "YOUR_CONTACT_TEMPLATE_ID") {
      setIsSubmitting(false);
      setSubmitStatus("not_configured");
      setTimeout(() => setSubmitStatus(null), 8000);
      return;
    }

    try {
      // Prepare email template parameters for message to you
      const contactTemplateParams = {
        to_email: RECIPIENT_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        project_type: formData.projectType || "Not specified",
        budget: formData.budget || "Not specified",
        timeline: formData.timeline || "Not specified",
        message: formData.message,
        subject: `Project Inquiry: ${formData.projectType || "General Inquiry"}`,
        title: formData.projectType || "General Inquiry", // For auto-reply template
      };

      // Prepare auto-reply template parameters for user
      const autoReplyTemplateParams = {
        to_email: formData.email, // Send to the user who submitted the form
        name: formData.name,
        email: formData.email,
        title: formData.projectType || "General Inquiry",
        message: formData.message,
      };

      // Send both emails in parallel
      await Promise.all([
        // Email 1: Send message to you
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_CONTACT,
          contactTemplateParams,
          EMAILJS_PUBLIC_KEY
        ),
        // Email 2: Send auto-reply to user
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_AUTO_REPLY,
          autoReplyTemplateParams,
          EMAILJS_PUBLIC_KEY
        ),
      ]);

      // Success - show success message
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      // Error handling
      console.error("Email sending failed:", error);
      setIsSubmitting(false);
      setSubmitStatus("error");
      
      // Hide error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="relative z-20 contact-form px-10 py-12 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-4 text-3xl font-light tracking-wider text-white uppercase lg:text-4xl form-element">
          Get in Touch
        </h2>
        <p className="mb-8 text-lg text-white/60 lg:text-xl form-element">
          Fill out the form below and I'll get back to you within 24 hours.
        </p>
        
        {/* EmailJS Setup Notice (only show if not configured) */}
        {(EMAILJS_TEMPLATE_ID_CONTACT === "YOUR_CONTACT_TEMPLATE_ID") && (
          <div className="mb-6 p-4 text-sm text-white bg-blue-500/20 border border-blue-500/50 rounded-lg form-element">
            <div className="flex items-start gap-3">
              <Icon
                icon="material-symbols:info"
                className="flex-shrink-0 mt-0.5"
                width={20}
                height={20}
              />
              <div className="flex-1">
                <p className="font-medium mb-1">📧 EmailJS Setup Required</p>
                <p className="text-white/80 text-xs">
                  To enable email sending, configure EmailJS keys in <code className="bg-black/30 px-1 rounded">ContactForm.jsx</code>. 
                  See detailed instructions in the code comments (lines 10-60). 
                  <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline ml-1">
                    Get started →
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name and Email Row */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="form-element">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-light tracking-widest text-white uppercase"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 text-white bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-white/40"
                placeholder="Your name"
              />
            </div>
            <div className="form-element">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-light tracking-widest text-white uppercase"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-white bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-white/40"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="form-element">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-light tracking-widest text-white uppercase"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 text-white bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-white/40"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          {/* Project Type */}
          <div className="form-element">
            <label
              htmlFor="projectType"
              className="block mb-2 text-sm font-light tracking-widest text-white uppercase"
            >
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 text-white bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
            >
              <option value="">Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type} className="bg-black">
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Budget and Timeline Row */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="form-element">
              <label
                htmlFor="budget"
                className="block mb-2 text-sm font-light tracking-widest text-white uppercase"
              >
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 text-white bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range} className="bg-black">
                    {range}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-element">
              <label
                htmlFor="timeline"
                className="block mb-2 text-sm font-light tracking-widest text-white uppercase"
              >
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 text-white bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
              >
                <option value="">Select timeline</option>
                {timelines.map((timeline) => (
                  <option key={timeline} value={timeline} className="bg-black">
                    {timeline}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="form-element">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-light tracking-widest text-white uppercase"
            >
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 text-white bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-white transition-colors duration-300 resize-none placeholder:text-white/40"
              placeholder="Tell me about your project, goals, and any specific requirements..."
            />
          </div>

          {/* Submit Button */}
          <div className="form-element">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 text-sm font-light tracking-widest text-black uppercase transition-all duration-300 bg-white rounded-full hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Icon
                    icon="svg-spinners:ring-resize"
                    width={20}
                    height={20}
                  />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="p-4 text-sm text-center text-white bg-green-500/20 border border-green-500/50 rounded-lg form-element">
              <Icon
                icon="material-symbols:check-circle"
                className="inline-block mr-2"
                width={20}
                height={20}
              />
              Your message has been successfully sent! I'll get back to you within 24 hours.
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="p-4 text-sm text-center text-white bg-red-500/20 border border-red-500/50 rounded-lg form-element">
              <Icon
                icon="material-symbols:error"
                className="inline-block mr-2"
                width={20}
                height={20}
              />
              Failed to send message. Please try again or contact me directly at vaibhav200345@gmail.com
            </div>
          )}

          {/* Not Configured Message */}
          {submitStatus === "not_configured" && (
            <div className="p-6 text-sm text-left text-white bg-yellow-500/20 border border-yellow-500/50 rounded-lg form-element space-y-3">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Icon
                  icon="material-symbols:warning"
                  className="inline-block"
                  width={24}
                  height={24}
                />
                <span className="font-semibold text-base">EmailJS Not Configured</span>
              </div>
              
              <div className="space-y-2 text-white/90">
                <p className="font-medium">Why is this showing?</p>
                <p className="text-white/70">
                  The contact form needs EmailJS API keys to send emails directly to your inbox. 
                  Currently, the form has placeholder values instead of real API keys.
                </p>
                
                <p className="font-medium mt-4">What is EmailJS?</p>
                <p className="text-white/70">
                  EmailJS is a <strong className="text-white">free service</strong> (200 emails/month) 
                  that lets your website send emails without a backend server. It's secure, reliable, 
                  and perfect for portfolio contact forms.
                </p>
                
                <p className="font-medium mt-4">Quick Setup (5 minutes):</p>
                <ol className="list-decimal list-inside space-y-1 text-white/70 ml-2">
                  <li>Sign up at <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-yellow-300">emailjs.com</a> (free)</li>
                  <li>Connect your Gmail account in Email Services</li>
                  <li>Create an email template</li>
                  <li>Copy your Public Key, Service ID, and Template ID</li>
                  <li>Update the code in <code className="bg-black/30 px-1 rounded">src/sections/ContactForm.jsx</code> (lines 16-18)</li>
                </ol>
                
                <p className="font-medium mt-4">Need Help?</p>
                <p className="text-white/70">
                  Check the detailed comments at the top of <code className="bg-black/30 px-1 rounded">ContactForm.jsx</code> 
                  or visit{" "}
                  <a href="https://www.emailjs.com/docs/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-yellow-300">
                    EmailJS Documentation
                  </a>
                </p>
                
                <div className="pt-3 mt-4 border-t border-yellow-500/30">
                  <p className="text-white/70">
                    <strong className="text-white">For now:</strong> You can contact me directly at{" "}
                    <a href="mailto:vaibhav200345@gmail.com" className="text-white underline hover:text-yellow-300">
                      vaibhav200345@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </form>

        {/* Alternative Contact Methods */}
        <div className="mt-8 pt-8 border-t border-white/30 form-element">
          <p className="mb-4 text-sm font-light tracking-widest text-white/60 uppercase">
            Or reach out directly
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:gap-6 mb-6">
            <a
              href="mailto:vaibhav200345@gmail.com"
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-300"
            >
              <Icon icon="ic:baseline-email" width={20} height={20} />
              <span>vaibhav200345@gmail.com</span>
            </a>
            <a
              href="tel:+916268111086"
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-300"
            >
              <Icon icon="ic:baseline-phone" width={20} height={20} />
              <span>+91 6268111086</span>
            </a>
          </div>
          
          {/* Schedule Meeting Button */}
          <div>
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-light tracking-widest text-black uppercase transition-all duration-300 bg-white rounded-full hover:bg-white/90"
            >
              <Icon icon="material-symbols:calendar-month" width={20} height={20} />
              <span>Schedule a Meeting</span>
            </button>
          </div>
        </div>
      </div>

      {/* Calendly Widget */}
      <CalendlyWidget
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url={CALENDLY_URL}
      />
    </div>
  );
};

export default ContactForm;
