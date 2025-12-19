import React, { useRef, useState, useEffect } from 'react';
    import { Button } from '@radix-ui/themes'; // Assuming Radix UI is used for buttons
    import { Eye, Volume2, FileText, User, Play, Square } from 'lucide-react';

    interface VideoRecorderProps {
      sessionType: string;
      onRecordingComplete: (blob: Blob, duration: number) => void;
    }

    const VideoRecorder: React.FC<VideoRecorderProps> = ({ sessionType, onRecordingComplete }) => {
      const videoRef = useRef<HTMLVideoElement>(null);
      const [isRecording, setIsRecording] = useState(false);
      const [error, setError] = useState<string | null>(null);
      const [stream, setStream] = useState<MediaStream | null>(null);
      const [recordingTime, setRecordingTime] = useState(0);
      const [realTimeFeedback, setRealTimeFeedback] = useState({
        facialExpression: 'Neutral',
        voiceQuality: 'Clear',
        bodyLanguage: 'Good posture',
        contentFlow: 'Coherent',
      });

      useEffect(() => {
        const getMedia = async () => {
          try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setStream(mediaStream);
            if (videoRef.current) {
              videoRef.current.srcObject = mediaStream;
            }
          } catch (err) {
            if (err instanceof Error) {
              if (err.name === 'NotAllowedError') {
                setError('Camera and microphone access denied. Please allow permissions in your browser settings.');
              } else {
                setError(`Error accessing media devices: ${err.message}`);
              }
            }
          }
        };

        getMedia();

        return () => {
          if (stream) {
            stream.getTracks().forEach(track => track.stop());
          }
        };
      }, []);

      useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRecording) {
          interval = setInterval(() => {
            setRecordingTime(prev => prev + 1);
            // Simulate real-time feedback updates
            setRealTimeFeedback({
              facialExpression: Math.random() > 0.5 ? 'Confident' : 'Neutral',
              voiceQuality: Math.random() > 0.5 ? 'Clear' : 'Good',
              bodyLanguage: Math.random() > 0.5 ? 'Engaged' : 'Good posture',
              contentFlow: Math.random() > 0.5 ? 'Coherent' : 'Structured',
            });
          }, 1000);
        }
        return () => clearInterval(interval);
      }, [isRecording]);

      const startRecording = () => {
        if (stream) {
          // Implement recording logic here (e.g., using MediaRecorder)
          setIsRecording(true);
          setRecordingTime(0);
        }
      };

      const stopRecording = () => {
        setIsRecording(false);
        // Stop recording logic and create blob
        const mockBlob = new Blob(['mock recording data'], { type: 'video/webm' });
        onRecordingComplete(mockBlob, recordingTime);
      };

      const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
      };

      if (error) {
        return <div className="error-message">{error}</div>;
      }

      return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Recording Session</h2>
            <p className="text-gray-600">Session Type: <span className="font-medium text-violet-600">{sessionType}</span></p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Video Feed */}
            <div className="lg:col-span-2">
              <div className="relative bg-black rounded-lg overflow-hidden">
                <video ref={videoRef} autoPlay muted className="w-full h-96 object-cover" />
                {isRecording && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    REC {formatTime(recordingTime)}
                  </div>
                )}
              </div>
              <div className="mt-4 flex justify-center">
                <Button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`px-6 py-3 text-white font-semibold rounded-lg shadow-lg ${
                    isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-violet-600 hover:bg-violet-700'
                  }`}
                >
                  {isRecording ? (
                    <>
                      <Square className="w-5 h-5 mr-2" />
                      Stop Recording
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Start Recording
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Real-Time Analysis */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Real-Time Analysis</h3>
              
              <div className="bg-violet-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Eye className="w-5 h-5 text-violet-600" />
                  <span className="font-medium text-gray-900">Facial Expression Analysis</span>
                </div>
                <p className="text-sm text-gray-600">{realTimeFeedback.facialExpression}</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Volume2 className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Voice Quality Assessment</span>
                </div>
                <p className="text-sm text-gray-600">{realTimeFeedback.voiceQuality}</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <User className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-900">Body Language Evaluation</span>
                </div>
                <p className="text-sm text-gray-600">{realTimeFeedback.bodyLanguage}</p>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <FileText className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium text-gray-900">Content Analysis</span>
                </div>
                <p className="text-sm text-gray-600">{realTimeFeedback.contentFlow}</p>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> Real-time analysis is simulated. Connect to Flask backend with ML models for actual detection.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default VideoRecorder;