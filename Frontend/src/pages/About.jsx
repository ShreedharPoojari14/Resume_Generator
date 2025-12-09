import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-4">About AI Resume Builder</h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Revolutionizing resume creation with the power of artificial intelligence
          </p>
        </div>

        {/* Main Content */}
        <div className="card bg-base-100 shadow-xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-base-content mb-4">Our Mission</h2>
              <p className="text-base-content/70 mb-4">
                We believe that everyone deserves a professional, well-crafted resume that showcases their unique skills and experiences. Our AI-powered platform eliminates the guesswork and formatting challenges, allowing you to focus on what matters most – your career.
              </p>
              <p className="text-base-content/70">
                By leveraging advanced AI technology including Gemini and OpenAI APIs, we transform your basic information into a compelling, professionally formatted resume that stands out to employers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-8 inline-block">
                <svg className="w-24 h-24 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="card bg-base-100 shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-base-content mb-6 text-center">Why Choose AI Resume Builder?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-success/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-base-content mb-2">Lightning Fast</h3>
              <p className="text-base-content/70">Create a professional resume in minutes, not hours</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-base-content mb-2">AI-Powered</h3>
              <p className="text-base-content/70">Smart algorithms optimize your resume content</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-base-content mb-2">Professional</h3>
              <p className="text-base-content/70">Industry-standard formatting and design</p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="card bg-base-100 shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-base-content mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary text-primary-content rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-lg font-semibold">1</div>
              <h3 className="font-medium text-base-content mb-2">Enter Details</h3>
              <p className="text-base-content/70 text-sm">Provide your basic information through our simple form</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-content rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-lg font-semibold">2</div>
              <h3 className="font-medium text-base-content mb-2">AI Processing</h3>
              <p className="text-base-content/70 text-sm">Our AI analyzes and structures your information</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-content rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-lg font-semibold">3</div>
              <h3 className="font-medium text-base-content mb-2">Edit & Preview</h3>
              <p className="text-base-content/70 text-sm">Review and customize your generated resume</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-content rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-lg font-semibold">4</div>
              <h3 className="font-medium text-base-content mb-2">Download PDF</h3>
              <p className="text-base-content/70 text-sm">Get your professional resume as a PDF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About