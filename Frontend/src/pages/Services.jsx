import React from "react";

function Services() {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-4">Our Services</h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Comprehensive AI-powered solutions for your career advancement
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* AI Resume Generation */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="card-title text-base-content justify-center">AI Resume Generation</h2>
              <p className="text-base-content/70 text-center">
                Transform your basic information into a professionally structured resume using advanced AI algorithms.
              </p>
              <div className="card-actions justify-center mt-4">
                <div className="badge badge-primary badge-outline">Gemini API</div>
                <div className="badge badge-primary badge-outline">OpenAI API</div>
              </div>
            </div>
          </div>

          {/* Live Preview & Editing */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="bg-secondary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h2 className="card-title text-base-content justify-center">Live Preview & Editing</h2>
              <p className="text-base-content/70 text-center">
                Real-time preview with editable fields to customize your resume exactly how you want it.
              </p>
              <div className="card-actions justify-center mt-4">
                <div className="badge badge-secondary badge-outline">React JS</div>
                <div className="badge badge-secondary badge-outline">Live Updates</div>
              </div>
            </div>
          </div>

          {/* PDF Download */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="bg-success/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="card-title text-base-content justify-center">PDF Download</h2>
              <p className="text-base-content/70 text-center">
                Download your professionally formatted resume as a high-quality PDF ready for job applications.
              </p>
              <div className="card-actions justify-center mt-4">
                <div className="badge badge-success badge-outline">react-to-print</div>
                <div className="badge badge-success badge-outline">High Quality</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="card bg-base-100 shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-base-content mb-6 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-base-content mb-4">Frontend</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-base-content/70">React.js - Dynamic user interface</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-base-content/70">DaisyUI - Modern component library</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-base-content/70">React Router - Navigation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-base-content/70">react-to-print - PDF generation</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-base-content mb-4">Backend</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  <span className="text-base-content/70">Spring Boot - Robust backend framework</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  <span className="text-base-content/70">Gemini API - Google's AI model</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  <span className="text-base-content/70">OpenAI API - GPT-powered generation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  <span className="text-base-content/70">RESTful APIs - Seamless communication</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="card bg-base-100 shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-base-content mb-6 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-accent/10 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-base-content">Smart Content Generation</h3>
                  <p className="text-base-content/70 text-sm">AI analyzes your input and creates relevant, professional content</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-accent/10 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-base-content">Structured Data Processing</h3>
                  <p className="text-base-content/70 text-sm">Organized sections for skills, experience, education, and projects</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-accent/10 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-base-content">Skill Level Assessment</h3>
                  <p className="text-base-content/70 text-sm">Automatic skill categorization with proficiency levels</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-accent/10 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-base-content">Real-time Editing</h3>
                  <p className="text-base-content/70 text-sm">Edit generated content with live preview updates</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-accent/10 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-base-content">Professional Formatting</h3>
                  <p className="text-base-content/70 text-sm">Industry-standard layout and typography</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-accent/10 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-base-content">Instant PDF Export</h3>
                  <p className="text-base-content/70 text-sm">One-click download of your finished resume</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;