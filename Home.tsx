import React from 'react';
    import { Link } from 'react-router-dom';
    import { Play, Mic, BarChart3, Award, ArrowRight, CheckCircle, Zap, Shield, DollarSign, Users, Eye, Volume2, FileText, User } from 'lucide-react';
    import Header from '../components/Header';
    import Footer from '../components/Footer';

    const Home: React.FC = () => {
      const features = [
        {
          icon: Mic,
          title: 'Voice Analysis',
          description: 'Advanced speech-to-text with filler word detection, tone analysis, and clarity scoring using Vosk and Librosa.',
        },
        {
          icon: Play,
          title: 'Body Language Detection',
          description: 'Real-time posture and gesture analysis using MediaPipe pose estimation with 33 body landmarks.',
        },
        {
          icon: BarChart3,
          title: 'Facial Expression Analysis',
          description: 'Emotion detection and eye contact monitoring using FER models and MediaPipe Face Mesh.',
        },
        {
          icon: Award,
          title: 'Personalized Feedback',
          description: 'Domain-specific scoring for TED talks, pitches, and interviews with progressive difficulty.',
        },
      ];

      const benefits = [
        'Real-time AI feedback during practice sessions',
        'Offline processing with local ML models',
        'Comprehensive progress tracking and analytics',
        'Export detailed reports in PDF and CSV formats',
        'Specialized coaching for different presentation types',
        'Privacy-focused with all data processed locally',
      ];

      const howItWorksSteps = [
        {
          step: 1,
          title: 'Choose Your Session Type',
          description: 'Select from TED Talk, Business Pitch, Job Interview, or General Practice to tailor your coaching experience.',
          icon: Users,
        },
        {
          step: 2,
          title: 'Record Your Presentation',
          description: 'Use your webcam and microphone to record yourself in a comfortable environment with real-time AI analysis.',
          icon: Play,
        },
        {
          step: 3,
          title: 'Receive Instant Feedback',
          description: 'Get comprehensive analysis on voice quality, body language, facial expressions, and content coherence.',
          icon: BarChart3,
        },
        {
          step: 4,
          title: 'Track Your Progress',
          description: 'Review detailed reports, track improvements over time, and unlock achievements as you advance.',
          icon: Award,
        },
      ];

      const technologyFeatures = [
        {
          icon: Eye,
          title: 'Facial Expression Analysis',
          description: 'Advanced emotion detection, eye contact tracking, and micro-expression analysis powered by computer vision AI.',
        },
        {
          icon: Volume2,
          title: 'Voice Quality Assessment',
          description: 'Real-time analysis of tone, pace, volume, clarity, and filler word detection for professional speech delivery.',
        },
        {
          icon: FileText,
          title: 'Content Analysis',
          description: 'Evaluate speech coherence, keyword usage, and engagement metrics using natural language processing.',
        },
        {
          icon: User,
          title: 'Body Language Evaluation',
          description: 'Track posture, gestures, and movement patterns to enhance your non-verbal communication skills.',
        },
      ];

      return (
        <div className="min-h-screen bg-white">
          <Header />
          
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Master Your
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    {' '}Communication Skills
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  AI-powered coaching platform that analyzes your speech, body language, and presentation skills 
                  in real-time to help you become a confident and engaging speaker.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/sessions"
                    className="inline-flex items-center px-8 py-4 bg-violet-600 text-white text-lg font-semibold rounded-lg hover:bg-violet-700 transition-colors shadow-lg"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start New Session
                  </Link>
                  <Link
                    to="/analytics"
                    className="inline-flex items-center px-8 py-4 bg-white text-violet-600 text-lg font-semibold rounded-lg border-2 border-violet-600 hover:bg-violet-50 transition-colors"
                  >
                    <BarChart3 className="w-5 h-5 mr-2" />
                    View Analytics
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How It Works
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Four simple steps to transform your presentation skills with AI-powered coaching
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {howItWorksSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Advanced AI Analysis
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our platform uses cutting-edge machine learning models to provide comprehensive 
                  feedback on every aspect of your presentation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Powered by Cutting-Edge Technology Section */}
          <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Powered by Cutting-Edge Technology
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Enterprise-level AI capabilities using open-source technologies for complete privacy and cost efficiency
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {technologyFeatures.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-violet-100 p-8 group hover:shadow-lg transition-shadow duration-200">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {tech.title}
                          </h3>
                          <p className="text-gray-600">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-white rounded-xl shadow-sm border border-violet-100 p-6">
                  <Zap className="w-8 h-8 text-violet-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Enterprise-Level AI</h4>
                  <p className="text-gray-600">Advanced machine learning models for accurate analysis</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-violet-100 p-6">
                  <Shield className="w-8 h-8 text-violet-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Complete Privacy</h4>
                  <p className="text-gray-600">All processing happens locally on your device</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-violet-100 p-6">
                  <DollarSign className="w-8 h-8 text-violet-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Cost Efficiency</h4>
                  <p className="text-gray-600">Open-source technologies reduce operational costs</p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Why Choose Aura Coach?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our platform combines the latest in AI technology with proven coaching methodologies 
                    to deliver personalized feedback that helps you improve faster.
                  </p>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional presenting"
                    className="rounded-xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-purple-500/20 rounded-xl"></div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Communication?
              </h2>
              <p className="text-xl text-violet-100 mb-8">
                Join thousands of professionals who have improved their presentation skills with AI-powered coaching.
              </p>
              <Link
                to="/sessions"
                className="inline-flex items-center px-8 py-4 bg-white text-violet-600 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </section>

          <Footer />
        </div>
      );
    };

    export default Home;