import React, { useState, useEffect, useRef } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon, PaperClipIcon } from '@heroicons/react/24/outline';
import apiClient from '../services/apiClient';

const BOT_NAME = 'SavvyTie Assistant';

const INITIAL_MESSAGES = [
  { sender: 'bot', text: 'Hello 👋 Welcome to Savvy Tie.' },
  { sender: 'bot', text: 'Are you looking to:\n1️⃣ Hire Talent (Employer)\n2️⃣ Apply for a Job (Candidate)\n3️⃣ Ask a Question\n\nPlease select an option below.' }
];

const QUICK_REPLIES = [
  { id: 'hire', label: 'Hire Talent' },
  { id: 'job', label: 'Apply for Job' },
  { id: 'faq', label: 'Ask a Question' }
];

const SERVICE_TYPES = [
  'Virtual Assistant',
  'Software Developer',
  'Customer Support',
  'Graphic Designer',
  'Digital Marketer',
  'Other'
];

const FAQ_QUESTIONS = [
  'What is the cost?',
  'Where are you located?',
  'How does the process work?',
  'How quickly can I hire?',
  'What roles can I hire for?',
  'Do you offer trial periods?'
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  
  // Flow States
  const [currentFlow, setCurrentFlow] = useState(null); // 'employer', 'candidate', 'faq'
  const [step, setStep] = useState(0);
  
  // Data Collection
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);
  const [inputMessage, setInputMessage] = useState('');

  const messagesEndRef = useRef(null);
  const inactiveTimerRef = useRef(null);
  const hasSentInactiveRef = useRef(false);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startChat();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const startChat = () => {
    setMessages(INITIAL_MESSAGES);
    resetInactivityTimer();
  };

  const resetInactivityTimer = () => {
    if (inactiveTimerRef.current) clearTimeout(inactiveTimerRef.current);
    if (!hasSentInactiveRef.current && currentFlow) {
      inactiveTimerRef.current = setTimeout(() => {
        addBotMessage('Still there? I can help you find the right match.');
        hasSentInactiveRef.current = true;
      }, 60000); // 1 minute of inactivity
    }
  };

  const addBotMessage = (text, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text }]);
      setIsTyping(false);
    }, delay);
  };

  const handleUserInput = (text) => {
    if (!text.trim() && !file) return;
    
    setMessages(prev => [...prev, { sender: 'user', text: file ? `[File attached: ${file.name}]` : text }]);
    setInputMessage('');
    resetInactivityTimer();
    
    if (currentFlow === 'employer') {
      handleEmployerStep(text);
    } else if (currentFlow === 'candidate') {
      handleCandidateStep(text);
    } else if (currentFlow === 'faq') {
      handleFaqInput(text);
    } else {
      // Main menu generic handler or redirect
      handleFaqInput(text);
    }
  };

  const handleQuickReply = (id, label) => {
    setMessages(prev => [...prev, { sender: 'user', text: label }]);
    resetInactivityTimer();
    setFormData({});
    setFile(null);
    setStep(1);
    
    if (id === 'hire') {
      setCurrentFlow('employer');
      addBotMessage('Great! We help UK & European businesses hire skilled virtual assistants.\n\nMay I collect a few details to assist you better?\n\n1️⃣ Please enter your Company Name:');
    } else if (id === 'job') {
      setCurrentFlow('candidate');
      addBotMessage("Wonderful! We're always looking for talented professionals.\n\n1️⃣ Please enter your Full Name:");
    } else if (id === 'faq') {
      setCurrentFlow('faq');
      addBotMessage("I'm here to help! What would you like to know?");
    }
  };

  // ----- FLOW 1: EMPLOYER -----
  const handleEmployerStep = async (text) => {
    const updatedData = { ...formData };
    
    switch (step) {
      case 1:
        updatedData.companyName = text;
        setFormData(updatedData);
        setStep(2);
        addBotMessage(`Thanks! Next, 2️⃣ Contact Person Name:`);
        break;
      case 2:
        updatedData.contactName = text;
        setFormData(updatedData);
        setStep(3);
        addBotMessage(`Nice to meet you, ${text}!\n\n3️⃣ Email Address:`);
        break;
      case 3:
        if (!/\S+@\S+\.\S+/.test(text)) {
          addBotMessage(`Please enter a valid email address.`);
          return;
        }
        updatedData.email = text;
        setFormData(updatedData);
        setStep(4);
        addBotMessage(`Got it.\n\n4️⃣ Phone Number:`);
        break;
      case 4:
        updatedData.phone = text;
        setFormData(updatedData);
        setStep(5);
        addBotMessage(`5️⃣ Type of Service Needed (e.g. Virtual Assistant, Customer Support):`);
        break;
      case 5:
        updatedData.serviceType = text;
        setFormData(updatedData);
        setStep(6);
        addBotMessage(`6️⃣ Brief Requirement Description:`);
        break;
      case 6:
        updatedData.description = text;
        setFormData(updatedData);
        setStep(7);
        await submitEmployer(updatedData);
        break;
      default:
        break;
    }
  };

  const submitEmployer = async (data) => {
    addBotMessage('Submitting your details...');
    try {
      const response = await apiClient.post('/employers/register', {
        company: data.companyName,
        name: data.contactName,
        email: data.email,
        phone: data.phone,
        roleNeeded: data.serviceType,
        description: data.description
      });
      
      if (response.success) {
        addBotMessage('Thank you! 🎉\n\nOur team will review your request and contact you shortly.\n\nYou can also schedule a call here:\n[Schedule Call](/schedule-call)', 1500);
      } else {
        addBotMessage(response.message || 'Oops, looks like there was an issue submitting your details.');
      }
      setCurrentFlow(null);
    } catch (error) {
      addBotMessage('Oops, looks like there was an issue submitting your details or you are already registered. Please contact support.');
      setCurrentFlow(null);
    }
  };

  // ----- FLOW 2: CANDIDATE -----
  const handleCandidateStep = async (text) => {
    const updatedData = { ...formData };
    
    switch (step) {
      case 1:
        updatedData.fullName = text;
        setFormData(updatedData);
        setStep(2);
        addBotMessage(`Thanks, ${text}!\n\n2️⃣ Email Address:`);
        break;
      case 2:
        if (!/\S+@\S+\.\S+/.test(text)) {
          addBotMessage(`Please enter a valid email address.`);
          return;
        }
        updatedData.email = text;
        setFormData(updatedData);
        setStep(3);
        addBotMessage(`3️⃣ Phone Number:`);
        break;
      case 3:
        updatedData.phone = text;
        setFormData(updatedData);
        setStep(4);
        addBotMessage(`4️⃣ Role Applying For:`);
        break;
      case 4:
        updatedData.role = text;
        setFormData(updatedData);
        setStep(5);
        addBotMessage(`5️⃣ Years of Experience:`);
        break;
      case 5:
        updatedData.experience = text;
        setFormData(updatedData);
        setStep(6);
        addBotMessage(`6️⃣ Please upload your CV using the paperclip icon below.`);
        break;
      case 6:
        if (!file) {
          addBotMessage(`Please attach your CV before submitting.`);
          return;
        }
        setStep(7);
        await submitCandidate(updatedData);
        break;
      default:
        break;
    }
  };

  const submitCandidate = async (data) => {
    addBotMessage('Uploading your application...');
    try {
      const formDataObj = new FormData();
      formDataObj.append('name', data.fullName);
      formDataObj.append('email', data.email);
      formDataObj.append('phone', data.phone);
      formDataObj.append('profession', data.role);
      formDataObj.append('experience', data.experience);
      if (file) {
        formDataObj.append('cv', file);
      }
      
      // Let apiClient handle headers for FormData (it deletes Content-Type)
      const response = await apiClient.post('/candidates/register', formDataObj);
      
      if (response.success) {
        addBotMessage('Thank you for applying! 📩\n\nOur recruitment team will review your profile and contact you if shortlisted.', 1500);
      } else {
        addBotMessage(response.message || 'Oops, looks like there was an issue submitting your application.');
      }
      
      setCurrentFlow(null);
      setFile(null);
    } catch (error) {
      addBotMessage('Oops, looks like there was an issue submitting your application or you are already registered. Please contact support.');
      setCurrentFlow(null);
      setFile(null);
    }
  };

  // ----- FLOW 3: FAQ -----
  const handleFaqInput = (text) => {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('price') || lowerText.includes('cost')) {
      addBotMessage('Our pricing depends on role and hours required.\nPlease schedule a call for a tailored quote.');
    } else if (lowerText.includes('where') || lowerText.includes('located') || lowerText.includes('location')) {
      addBotMessage('We connect UK & European businesses with skilled professionals from India and across Asia.');
    } else if (lowerText.includes('how does it work') || lowerText.includes('process')) {
      addBotMessage('You tell us your requirement, we match you with suitable candidates, and you interview before hiring.');
    } else if (lowerText.includes('urgent') || lowerText.includes('fast') || lowerText.includes('quickly') || lowerText.includes('quick')) {
      addBotMessage('We can fast-track urgent requirements and typically place candidates within 72 hours depending on the role.');
    } else if (lowerText.includes('roles') || lowerText.includes('types')) {
      addBotMessage('We provide Virtual Assistants, Software Developers, Customer Support, Digital Marketers, Graphic Designers, Data Entry pros, and more!');
    } else if (lowerText.includes('trial')) {
      addBotMessage('Yes! We want you to be confident in your hire. Please schedule a call to discuss flexible trial period options tailored to your needs.');
    } else {
      addBotMessage('I’d be happy to help 😊\n\nAre you looking to hire talent or apply for a role?');
      setCurrentFlow(null); // Reset back to main options
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleUserInput(inputMessage);
    }
  };

  const renderText = (text) => {
    return text.split('\n').map((str, index) => {
      // Handle the schedule call link parsing
      if (str.includes('[Schedule Call]')) {
        const parts = str.split(/\[Schedule Call\]\(\/schedule-call\)/);
        return (
          <React.Fragment key={index}>
            {parts[0]}
            <a href="/schedule-call" className="font-bold text-yellow-500 underline">Schedule Call</a>
            {parts[1]}
            <br />
          </React.Fragment>
        );
      }
      return <React.Fragment key={index}>{str}<br /></React.Fragment>;
    });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 left-5.5 w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 z-[9999] ${isOpen ? 'hidden' : 'block'}`}
      >
        <ChatBubbleLeftRightIcon className="w-8 h-8" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 sm:left-6 w-[calc(100vw-32px)] sm:w-[380px] h-[75vh] sm:h-[600px] max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-[10000] animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 flex items-center justify-between text-white shadow-md">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">{BOT_NAME}</h3>
                <p className="text-xs text-yellow-100 font-medium">Online | Smart Assistant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 hide-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-auto">
                    🤖
                  </div>
                )}
                <div 
                  className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                    msg.sender === 'user' 
                      ? 'bg-yellow-400 text-slate-800 rounded-br-sm shadow-md font-medium' 
                      : 'bg-white text-gray-700 border border-gray-100 rounded-bl-sm shadow-sm'
                  }`}
                  style={{ wordBreak: 'break-word' }}
                >
                  <p className="text-[14.5px] leading-relaxed relative">
                    {renderText(msg.text)}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-sm mr-2 mt-auto">🤖</div>
                <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm flex space-x-1.5 items-center h-10 w-16">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}

            {/* Quick Replies - Only show at main menu if currentFlow is null and not typing */}
            {!currentFlow && !isTyping && messages.length >= 2 && messages[messages.length-1].sender === 'bot' && (
              <div className="flex flex-col space-y-2 mt-4 items-end animate-fade-in-up">
                {QUICK_REPLIES.map(reply => (
                  <button
                    key={reply.id}
                    onClick={() => handleQuickReply(reply.id, reply.label)}
                    className="px-4 py-2 border-2 border-yellow-400 text-yellow-600 font-semibold text-sm rounded-full hover:bg-yellow-400 hover:text-white transition-all duration-300"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Service Types (For Employer Flow Step 5) */}
          {currentFlow === 'employer' && step === 5 && !isTyping && (
            <div className="px-4 py-2 border-t border-gray-100 bg-white flex overflow-x-auto hide-scrollbar space-x-2">
              {SERVICE_TYPES.map(type => (
                <button
                  key={type}
                  onClick={() => {
                    setInputMessage(type);
                    handleUserInput(type);
                  }}
                  className="whitespace-nowrap px-3 py-1.5 bg-gray-100 hover:bg-yellow-100 focus:bg-yellow-100 text-gray-700 font-medium text-xs rounded-full transition-colors border border-gray-200"
                >
                  {type}
                </button>
              ))}
            </div>
          )}

          {/* File Upload Info (For Candidate Flow) */}
          {currentFlow === 'candidate' && step === 6 && file && (
            <div className="px-4 py-2 bg-yellow-50 text-xs font-semibold text-yellow-800 flex justify-between items-center border-t border-yellow-100">
              <span className="truncate flex-1">{file.name} ({(file.size/1024/1024).toFixed(2)}MB)</span>
              <button 
                onClick={() => setFile(null)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Suggested FAQ Questions (For FAQ Flow) */}
          {currentFlow === 'faq' && !isTyping && (
            <div className="px-4 py-3 border-t border-gray-100 bg-white flex flex-wrap gap-2 hide-scrollbar">
              {FAQ_QUESTIONS.map(q => (
                <button
                  key={q}
                  onClick={() => {
                    setInputMessage('');
                    handleUserInput(q);
                  }}
                  className="text-left px-3 py-1.5 bg-gray-50 hover:bg-yellow-100 focus:bg-yellow-100 text-gray-700 font-medium text-xs rounded-xl transition-colors border border-gray-200 shadow-sm"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 rounded-b-2xl">
            <div className="flex items-end space-x-2 bg-gray-50 p-1.5 rounded-xl border border-gray-200 focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-400/20 transition-all">
              
              {/* File Attachment Button (Only active in Candidate Step 6) */}
              <div className="relative flex items-center justify-center p-2 mb-0.5">
                <input 
                  type="file" 
                  id="bot-file-upload" 
                  className="hidden" 
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFile(e.target.files[0]);
                      if (currentFlow === 'candidate' && step === 6) {
                        // Immediately submit file when user attaches it if in step 6
                        handleUserInput(''); 
                      }
                    }
                  }}
                  disabled={currentFlow !== 'candidate' || step !== 6}
                />
                <label 
                  htmlFor="bot-file-upload" 
                  className={`cursor-pointer ${currentFlow === 'candidate' && step === 6 ? 'text-gray-500 hover:text-yellow-500' : 'text-gray-300'}`}
                >
                  <PaperClipIcon className="w-5 h-5" />
                </label>
              </div>

              <input
                type="text"
                placeholder={
                  isTyping ? "Bot is typing..." 
                  : (currentFlow === 'candidate' && step === 6) ? "Select file or type ready" 
                  : "Type your message..."
                }
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isTyping}
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 px-1 text-gray-700 outline-none"
              />
              <button
                onClick={() => handleUserInput(inputMessage)}
                disabled={isTyping || (!inputMessage.trim() && !file) || (currentFlow === 'candidate' && step === 6 && !file)}
                className={`p-2 rounded-lg mb-0.5 transition-colors ${
                  isTyping || (!inputMessage.trim() && !file) || (currentFlow === 'candidate' && step === 6 && !file)
                    ? 'bg-gray-200 text-gray-400' 
                    : 'bg-yellow-400 text-white hover:bg-yellow-500 shadow-md shadow-yellow-400/30'
                }`}
              >
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-2 text-center flex justify-center items-center space-x-1">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold flex items-center">
                Powered by Savvy AI
              </span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}
