import React, { useState, useEffect } from "react";
import { ChevronDown, Award, Users, BookOpen, Target, Star, CheckCircle, TrendingUp, Zap } from "lucide-react";

export default function GoogleLanding() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  useEffect(() => {
    const consent = sessionStorage.getItem('googleAdsConsent');
    if (!consent) {
      setTimeout(() => setShowCookieConsent(true), 1000);
    } else {
      setConsentGiven(true);
    }
  }, []);

  const handleAcceptAll = () => {
    sessionStorage.setItem('googleAdsConsent', 'accepted');
    setShowCookieConsent(false);
    setConsentGiven(true);
  };

  const handleRejectAll = () => {
    sessionStorage.setItem('googleAdsConsent', 'rejected');
    setShowCookieConsent(false);
  };

  const courses = [
    {
      title: "Artificial Intelligence & ML",
      description: "We're not just another training institute. We're a community of passionate educators, industry professionals, and career counselors dedicated to helping you succeed in the rapidly evolving field of AI.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Full-Stack Development",
      description: "We're not just another training institute. We're a community of passionate educators, industry professionals, and career counselors dedicated to helping you master modern web technologies.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Science with Python",
      description: "We're not just another training institute. We're a community of passionate educators, industry professionals, and career counselors dedicated to transforming you into a data expert.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cybersecurity & Ethical Hacking",
      description: "We're not just another training institute. We're a community of passionate educators, industry professionals, and career counselors dedicated to building the next generation of security experts.",
      icon: <Award className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    },
  ];

  const instructors = [
    {
      name: "Mohammad Nayeem Ahmad",
      position: "Senior AI Engineer | 15+ Years Experience",
      description: "We're not just another training institute. We're a community of passionate educators, industry professionals, and career counselors dedicated to helping you succeed. Mohammad Nayeem Ahmad has worked with leading tech companies and published numerous research papers.",
      expertise: ["Machine Learning", "Deep Learning", "NLP"]
    },
    {
      name: "Sarah Johnson",
      position: "Full-Stack Architect | Tech Lead at Fortune 500",
      description: "We're not just another training institute. We're a community of passionate educators, industry professionals, and career counselors dedicated to helping you succeed. Sarah brings real-world enterprise development experience.",
      expertise: ["React", "Node.js", "Cloud Architecture"]
    },
    {
      name: "Michael Chen",
      position: "Data Science Lead | ML Engineer",
      description: "We're not just another training institute. We're a community of passionate educators, industry professionals, and career counselors dedicated to helping you succeed. Michael has led data science teams at top startups.",
      expertise: ["Python", "TensorFlow", "Big Data"]
    },
  ];

  const faqs = [
    {
      question: "What courses do you offer?",
      answer: "We offer comprehensive courses in AI/ML, Full-Stack Development, Data Science, Cybersecurity, Cloud Computing, DevOps, and more. Each course is designed with industry requirements in mind and includes hands-on projects, real-world scenarios, and interview preparation."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes! We provide 100% placement assistance including resume building, mock interviews, interview preparation, soft skills training, and direct connections with 200+ hiring companies. Our placement team works closely with you until you land your dream job."
    },
    {
      question: "What is the duration of the courses?",
      answer: "Course durations vary from 3 to 6 months depending on the program and your learning pace. We offer flexible schedules including weekday, weekend, and fast-track batches to accommodate working professionals and students."
    },
    {
      question: "Are the courses suitable for beginners?",
      answer: "Absolutely! Our courses are designed for all levels - from complete beginners to experienced professionals looking to upskill. We start with fundamentals and gradually progress to advanced topics with personalized mentorship."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, you'll receive an industry-recognized certificate upon successful completion of the course. Our certificates are valued by top companies and include verification features. You'll also get project certificates for all completed assignments."
    },
    {
      question: "What is the fee structure?",
      answer: "We offer competitive pricing with flexible payment options including EMI plans. Course fees vary by program. Contact us for detailed pricing and current discounts. We also offer scholarships for deserving students."
    }
  ];

  const stats = [
    { number: "400+", label: "Students Trained", icon: <Users className="w-8 h-8" /> },
    { number: "95%", label: "Placement Rate", icon: <CheckCircle className="w-8 h-8" /> },
    { number: "200+", label: "Hiring Partners", icon: <Award className="w-8 h-8" /> },
    { number: "50+", label: "Expert Instructors", icon: <Star className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 border-t-4 border-red-600 animate-slide-up">
          <div className="max-w-6xl mx-auto p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🍪</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">We value your privacy</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  We use cookies to personalize content, ads and analyze our traffic. By clicking "Accept All", 
                  you consent to our use of cookies for advertising purposes in accordance with Google's AdSense 
                  policies. You can manage your preferences anytime.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="px-6 py-2.5 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all text-sm font-medium hover:border-gray-400"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all text-sm font-semibold shadow-lg hover:shadow-xl"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <span className="text-xl font-bold text-gray-900">EEE Technologies</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#courses" className="text-gray-600 hover:text-red-600 transition-colors">Courses</a>
            <a href="#instructors" className="text-gray-600 hover:text-red-600 transition-colors">Instructors</a>
            <a href="#faq" className="text-gray-600 hover:text-red-600 transition-colors">FAQ</a>
          </nav>
          <button className="bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            🎓 Join 400+ Successful Students
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 leading-tight">
            Transform Your Tech Career
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            FutureSkillsSuccess with Expert Training
          </p>
          <p className="text-lg text-red-600 font-semibold mb-8">
            Join 400+ Students Who Changed Their Lives
          </p>

          {/* Video Placeholder */}
          {/* <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl aspect-video max-w-3xl mx-auto mb-4 flex items-center justify-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-red-600 border-b-8 border-b-transparent ml-1"></div>
              </div>
              <span className="text-white text-xl font-semibold">Watch Success Stories</span>
            </div>
          </div> */}
          <p className="text-sm text-gray-500 italic">"This training changed my career trajectory completely!" - Former Student</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-red-600 flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Space 1 */}
      {/* <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-dashed border-blue-300 rounded-xl p-8 text-center">
          <p className="text-sm text-gray-600 font-semibold mb-2">📢 ADVERTISEMENT</p>
          <div className="bg-white rounded-lg p-6 min-h-[100px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 font-mono text-sm">Google AdSense Ad Unit</p>
              <p className="text-xs text-gray-400 mt-1">728x90 or Responsive Ad</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Transforming Lives Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            Transforming Lives Through
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 leading-tight">
            Technology Education
          </h2>

          {/* Red Box with Image */}
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 md:p-12 mb-8 max-w-2xl mx-auto shadow-2xl transform hover:scale-105 transition-transform">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Why Choose Us?</h3>
            <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
              We're not just another training institute. We're a community of passionate educators, 
              industry professionals, and career counselors dedicated to your success.
            </p>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl aspect-video flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-2">🎯</div>
                <span className="text-gray-700 font-semibold">Your Success Story</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">Expert Instructors</h4>
              <p className="text-sm text-gray-600">Learn from industry professionals with 10+ years of experience</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💼</div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">100% Placement</h4>
              <p className="text-sm text-gray-600">Guaranteed job assistance with our 200+ hiring partners</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">Hands-on Projects</h4>
              <p className="text-sm text-gray-600">Build real-world applications to showcase in your portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* What EXACTLY will you Learn Section */}
      <section id="courses" className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            What EXACTLY will you Learn
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our comprehensive curriculum is designed to take you from beginner to job-ready professional
          </p>

          <div className="space-y-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="md:flex">
                  <div className="md:w-3/5 p-8">
                    <div className={`inline-block bg-gradient-to-r ${course.color} text-white p-3 rounded-lg mb-4`}>
                      {course.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{course.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Industry-relevant curriculum
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Real-world projects & assignments
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Lifetime access to course materials
                      </li>
                    </ul>
                    <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                      Learn More →
                    </button>
                  </div>
                  <div className="md:w-2/5 bg-gradient-to-br from-gray-300 to-gray-400 min-h-[250px] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-6xl mb-2">📚</div>
                      <span className="text-white font-semibold text-lg">Course Content</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Space 2 */}
      {/* <div className="max-w-5xl mx-auto px-4 py-12 bg-white">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-dashed border-green-300 rounded-xl p-8 text-center">
          <p className="text-sm text-gray-600 font-semibold mb-2">📢 ADVERTISEMENT</p>
          <div className="bg-white rounded-lg p-8 min-h-[120px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 font-mono text-sm">Google AdSense Responsive Ad Unit</p>
              <p className="text-xs text-gray-400 mt-1">Optimized for all devices</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Meet Your Instructor Section */}
      <section id="instructors" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Meet Your Instructors
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Learn from industry experts who have trained thousands of successful professionals
          </p>

          <div className="space-y-8">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className={`md:flex ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-2/5 bg-gradient-to-br from-gray-300 to-gray-400 min-h-[300px] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="relative z-10 text-center w-full h-full flex flex-col items-center justify-center p-4">
                      {instructor.name === "Mohammad Nayeem Ahmad" ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <img 
                            src="/assets/teamTwo.jpg" 
                            alt={instructor.name} 
                            className="w-full h-full object-contain max-h-[250px]"
                          />
                        </div>
                      ) : (
                        <>
                          <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-5xl shadow-lg">
                            👨‍🏫
                          </div>
                          <span className="text-white font-semibold text-lg">{instructor.name}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{instructor.name}</h3>
                    <p className="text-red-600 font-semibold mb-4 text-lg">{instructor.position}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{instructor.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Expertise:</p>
                      <div className="flex flex-wrap gap-2">
                        {instructor.expertise.map((skill, idx) => (
                          <span key={idx} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Certified Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Get Certified & Stand Out
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Earn an industry-recognized certificate that boosts your career prospects
          </p>
          
          <div className="md:flex items-center gap-8 bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Get Certified?</h3>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Industry Recognition:</strong> Valued by top companies worldwide</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Career Boost:</strong> Increase your resume credibility by 10x</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Lifetime Access:</strong> All course materials forever</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Alumni Network:</strong> Join our community of 400+ professionals</span>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
                Enroll Now & Get Certified →
              </button>
              <p className="text-sm text-gray-500 mt-3">✨ Limited seats available for this batch</p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-6 border-4 border-orange-400 shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
                <div className="bg-white rounded-xl aspect-[4/3] flex items-center justify-center p-8 shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏆</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Certificate of Completion</h4>
                    <p className="text-sm text-gray-600 mb-4">EEE Technologies</p>
                    <div className="border-t-2 border-gray-300 pt-4">
                      <p className="text-xs text-gray-500">Awarded to</p>
                      <p className="text-lg font-bold text-gray-900 my-2">Your Name Here</p>
                      <p className="text-xs text-gray-500">For successfully completing</p>
                      <p className="text-sm font-semibold text-gray-800 mt-1">Advanced Technology Program</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space 3 */}
      <div className="max-w-5xl mx-auto px-4 py-12 bg-white">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-dashed border-purple-300 rounded-xl p-8 text-center">
          <p className="text-sm text-gray-600 font-semibold mb-2">📢 ADVERTISEMENT</p>
          <div className="bg-white rounded-lg p-6 min-h-[250px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 font-mono text-sm">Google AdSense Ad Unit</p>
              <p className="text-xs text-gray-400 mt-1">300x250 or Responsive Ad</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Got questions? We've got answers!
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 pr-4 text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-red-600 flex-shrink-0 transition-transform ${
                      activeQuestion === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeQuestion === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Our admissions team is here to help you 24/7</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                📞 Call Us Now
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                💬 Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">Join 400+ students who have already started their journey</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
              Start Learning Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all">
              Download Brochure
            </button>
          </div>
          <p className="text-sm opacity-75">⏰ Next batch starts in 5 days - Limited seats!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  E
                </div>
                <span className="text-xl font-bold">EEE Technologies</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming careers through quality tech education since 2015. 
                Join thousands of successful graduates.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Popular Courses</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">AI & Machine Learning</li>
                <li className="hover:text-white transition-colors cursor-pointer">Data Science</li>
                <li className="hover:text-white transition-colors cursor-pointer">Full-Stack Development</li>
                <li className="hover:text-white transition-colors cursor-pointer">Cybersecurity</li>
                <li className="hover:text-white transition-colors cursor-pointer">Cloud Computing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
              <ul className="space-y-2 text-sm text-gray-400 mb-4">
                <li className="hover:text-white transition-colors cursor-pointer">📘 Facebook</li>
                <li className="hover:text-white transition-colors cursor-pointer">🐦 Twitter</li>
                <li className="hover:text-white transition-colors cursor-pointer">💼 LinkedIn</li>
                <li className="hover:text-white transition-colors cursor-pointer">📸 Instagram</li>
              </ul>
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">📧 info@eeetech.com</p>
                <p className="text-sm text-gray-400">📞 +91 9876543210</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-sm text-gray-400 space-y-2">
              <p>© 2024 EEE Technologies. All rights reserved.</p>
              <p className="text-xs">
                This site uses Google AdSense for advertising. Ads are personalized based on your interests with your consent. 
                We comply with GDPR and CCPA privacy regulations.
              </p>
              <div className="flex justify-center gap-4 mt-4 text-xs">
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Ad Choices</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Do Not Sell My Info</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 bg-gradient-to-r from-red-600 to-orange-600 text-white w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 flex items-center justify-center z-40">
        <span className="text-2xl">💬</span>
      </button>
    </div>
  );
}