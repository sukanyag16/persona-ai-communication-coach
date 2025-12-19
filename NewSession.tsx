import React, { useState } from 'react';
    import { ArrowLeft } from 'lucide-react';
    import { Link } from 'react-router-dom';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import SessionTypeSelector from '../components/SessionTypeSelector';
    import VideoRecorder from '../components/VideoRecorder';
    import AnalysisResults from '../components/AnalysisResults';

    const NewSession: React.FC = () => {
      const [currentStep, setCurrentStep] = useState<'select' | 'record' | 'analyze'>('select');
      const [selectedType, setSelectedType] = useState('');
      const [recordingBlob, setRecordingBlob] = useState<Blob | null>(null);
      const [sessionDuration, setSessionDuration] = useState(0);

      const handleTypeSelect = (type: string) => {
        setSelectedType(type);
      };

      const handleStartRecording = () => {
        if (selectedType) {
          setCurrentStep('record');
        }
      };

      const handleRecordingComplete = (blob: Blob, duration: number) => {
        setRecordingBlob(blob);
        setSessionDuration(duration);
        
        // Simulate processing time
        setTimeout(() => {
          setCurrentStep('analyze');
        }, 2000);
      };

      const getSessionTypeName = (type: string) => {
        const types: { [key: string]: string } = {
          ted: 'TED Talk',
          pitch: 'Business Pitch',
          interview: 'Job Interview',
          general: 'General Practice',
        };
        return types[type] || type;
      };

      // Mock analysis results
      const mockAnalysisResults = {
        overallScore: 78,
        scores: [
          {
            category: 'Voice Quality Assessment',
            score: 85,
            feedback: 'Excellent articulation and minimal filler words detected.',
            improvement: 'Try to vary your pace more to maintain audience engagement.',
            trend: 'up' as const,
          },
          {
            category: 'Body Language Evaluation',
            score: 72,
            feedback: 'Good posture maintained throughout most of the session.',
            improvement: 'Use more hand gestures to emphasize key points.',
            trend: 'stable' as const,
          },
          {
            category: 'Facial Expression Analysis',
            score: 80,
            feedback: 'Consistent eye contact with camera, showing confidence.',
            improvement: 'Occasionally look at different areas to simulate audience engagement.',
            trend: 'up' as const,
          },
          {
            category: 'Content Analysis',
            score: 75,
            feedback: 'Logical structure with clear transitions between topics.',
            improvement: 'Consider adding more storytelling elements to increase engagement.',
            trend: 'stable' as const,
          },
          {
            category: 'Emotional Engagement',
            score: 70,
            feedback: 'Appropriate emotional expression for the content type.',
            improvement: 'Show more enthusiasm during key moments to captivate audience.',
            trend: 'down' as const,
          },
          {
            category: 'Micro-expressions',
            score: 82,
            feedback: 'Natural and appropriate facial expressions throughout.',
            improvement: 'Maintain consistent energy levels from start to finish.',
            trend: 'up' as const,
          },
        ],
      };

      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Back Navigation */}
            <div className="mb-6">
              <Link
                to="/sessions"
                className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Sessions
              </Link>
            </div>

            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-4">
                <div className={`flex items-center ${currentStep === 'select' ? 'text-violet-600' : currentStep === 'record' || currentStep === 'analyze' ? 'text-green-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep === 'select' ? 'bg-violet-100 text-violet-600' : currentStep === 'record' || currentStep === 'analyze' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                    1
                  </div>
                  <span className="ml-2 font-medium">Select Type</span>
                </div>
                <div className={`w-8 h-0.5 ${currentStep === 'record' || currentStep === 'analyze' ? 'bg-green-600' : 'bg-gray-300'}`}></div>
                <div className={`flex items-center ${currentStep === 'record' ? 'text-violet-600' : currentStep === 'analyze' ? 'text-green-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep === 'record' ? 'bg-violet-100 text-violet-600' : currentStep === 'analyze' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                    2
                  </div>
                  <span className="ml-2 font-medium">Record</span>
                </div>
                <div className={`w-8 h-0.5 ${currentStep === 'analyze' ? 'bg-green-600' : 'bg-gray-300'}`}></div>
                <div className={`flex items-center ${currentStep === 'analyze' ? 'text-violet-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep === 'analyze' ? 'bg-violet-100 text-violet-600' : 'bg-gray-100 text-gray-400'}`}>
                    3
                  </div>
                  <span className="ml-2 font-medium">Analyze</span>
                </div>
              </div>
            </div>

            {/* Step Content */}
            {currentStep === 'select' && (
              <div className="space-y-6">
                <SessionTypeSelector
                  selectedType={selectedType}
                  onTypeSelect={handleTypeSelect}
                />
                {selectedType && (
                  <div className="text-center">
                    <button
                      onClick={handleStartRecording}
                      className="px-8 py-4 bg-violet-600 text-white text-lg font-semibold rounded-lg hover:bg-violet-700 transition-colors shadow-lg"
                    >
                      Start Recording Session
                    </button>
                  </div>
                )}
              </div>
            )}

            {currentStep === 'record' && (
              <VideoRecorder
                sessionType={getSessionTypeName(selectedType)}
                onRecordingComplete={handleRecordingComplete}
              />
            )}

            {currentStep === 'analyze' && (
              <div className="space-y-6">
                <AnalysisResults
                  overallScore={mockAnalysisResults.overallScore}
                  scores={mockAnalysisResults.scores}
                  sessionType={getSessionTypeName(selectedType)}
                  duration={sessionDuration}
                />
                
                {/* Technical Implementation Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    🔧 Technical Implementation Ready
                  </h3>
                  <p className="text-blue-800 mb-4">
                    This frontend interface is ready for backend integration. The following AI analysis features are designed to work with:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
                    <div>
                      <strong>Voice Analysis:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Vosk offline STT for transcription</li>
                        <li>Librosa for tone/pitch analysis</li>
                        <li>Custom NLP for filler word detection</li>
                        <li>NLTK/TextBlob for content analysis</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Visual Analysis:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>MediaPipe for pose estimation</li>
                        <li>FER for emotion detection</li>
                        <li>Face Mesh for eye contact tracking</li>
                        <li>Real-time processing in chunks</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-blue-800 mt-4 font-medium">
                    Please connect the Flask backend with the specified ML models to enable full functionality.
                  </p>
                </div>
              </div>
            )}
          </main>

          <Footer />
        </div>
      );
    };

    export default NewSession;