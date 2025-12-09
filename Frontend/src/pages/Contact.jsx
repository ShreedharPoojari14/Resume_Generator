import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-4">Contact Us</h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Get in touch with our team for support, feedback, or business inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-base-content mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Your full name" 
                    className="input input-bordered w-full" 
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="input input-bordered w-full" 
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <select className="select select-bordered w-full">
                    <option disabled selected>Select a topic</option>
                    <option>General Support</option>
                    <option>Technical Issue</option>
                    <option>Feature Request</option>
                    <option>Business Inquiry</option>
                    <option>Bug Report</option>
                  </select>
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea 
                    className="textarea textarea-bordered h-32" 
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <div className="form-control mt-6">
                  <button className="btn btn-primary w-full">Send Message</button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-base-content mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-base-content">Email</h3>
                      <p className="text-base-content/70">support@airesume.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-secondary/10 rounded-full p-3 mr-4">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-base-content">Phone</h3>
                      <p className="text-base-content/70">91+ 95357482965</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-success/10 rounded-full p-3 mr-4">
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-base-content">Office</h3>
                      <p className="text-base-content/70">123 AI Street, Mumbai City, India 12345</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-base-content mb-4">Support Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-base-content/70">Monday - Friday</span>
                    <span className="text-base-content">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base-content/70">Saturday</span>
                    <span className="text-base-content">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base-content/70">Sunday</span>
                    <span className="text-base-content">Closed</span>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="alert alert-info">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>We typically respond within 24 hours</span>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-base-content mb-4">Quick Help</h2>
                <div className="space-y-2">
                  <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="faq-accordion" /> 
                    <div className="collapse-title text-base-content font-medium">
                      How does AI resume generation work?
                    </div>
                    <div className="collapse-content"> 
                      <p className="text-base-content/70">Our AI analyzes your input and uses advanced algorithms to create structured, professional resume content tailored to your experience and skills.</p>
                    </div>
                  </div>
                  
                  <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="faq-accordion" /> 
                    <div className="collapse-title text-base-content font-medium">
                      Can I edit the generated resume?
                    </div>
                    <div className="collapse-content"> 
                      <p className="text-base-content/70">Yes! After generation, you can edit all fields with live preview updates before downloading your final PDF.</p>
                    </div>
                  </div>
                  
                  <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="faq-accordion" /> 
                    <div className="collapse-title text-base-content font-medium">
                      Is my data secure?
                    </div>
                    <div className="collapse-content"> 
                      <p className="text-base-content/70">We prioritize your privacy and security. Your data is processed securely and we don't store personal information unnecessarily.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;