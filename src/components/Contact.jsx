import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCircleCheck, faCircleExclamation, faCheck } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Form status states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
    const [errors, setErrors] = useState({});

    // Toast notification state
    const [showToast, setShowToast] = useState(false);
    const [toastClass, setToastClass] = useState('animate-slide-in');

    // Effect to handle toast animation
    useEffect(() => {
        if (showToast) {
            setToastClass('animate-slide-in');
        } else {
            setToastClass('animate-slide-out');
        }
    }, [showToast]);

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));

        // Clear error for this field when user types
        if (errors[id]) {
            setErrors(prev => ({
                ...prev,
                [id]: ''
            }));
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset submission status
        setSubmitStatus(null);
        setShowToast(false);

        // Validate form
        if (!validateForm()) {
            return;
        }

        // Start submission
        setIsSubmitting(true);

        // Prepare template parameters for EmailJS
        const templateParams = {
            name: formData.name, // Using standard name for template
            email: formData.email, // User's email will be used for reply-to
            message: formData.message,
            time: new Date().toLocaleString(), // Add current time for the template
            subject: `New Contact from Portfolio: ${formData.name}`
        };



        // Send email using EmailJS
        emailjs.send(
            import.meta.env.EMAILJS_SERVICE_ID,  // EmailJS service ID from env
            import.meta.env.EMAILJS_TEMPLATE_ID,  // EmailJS template ID from env
            templateParams,
            import.meta.env.EMAILJS_USER_ID  // EmailJS public key from env
        ).then((response) => {
            // Handle success
            console.log('EmailJS SUCCESS!', response.status, response.text);
            console.log('Email sent with parameters:', templateParams);
            console.log('Check your inbox and also your spam folder');

            setIsSubmitting(false);
            setSubmitStatus('success');
            setShowToast(true);

            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });

            // Hide toast after 5 seconds
            setTimeout(() => {
                setShowToast(false);
                // Clear success message after toast disappears
                setTimeout(() => setSubmitStatus(null), 300);
            }, 5000);
        })
            .catch((error) => {
                // Handle error
                console.error('EmailJS error:', error);
                setIsSubmitting(false);
                setSubmitStatus('error');

                // Clear error message after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    return (
        <div id="contact" className="container mx-auto px-4 py-8 md:py-12 relative">
            {/* Toast Notification */}
            {(showToast || toastClass === 'animate-slide-out') && (
                <div className={`fixed top-5 right-5 z-50 bg-black/80 text-white px-4 py-3 rounded-lg flex items-center gap-3 shadow-lg ${toastClass}`}>
                    <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                    </div>
                    <span className="font-medium">Message sent 👌</span>
                </div>
            )}

            <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Get In Touch</h2>
                <p className="text-base text-gray-400 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Let's talk!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 gap-3 content-start">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-900/10 transition-colors bg-gradient-to-br from-[#111827] to-[#0f172a] border border-cyan-500/30">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/30">
                            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1 text-white">Email</h3>
                            <a href="mailto:vdeepak.me@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">vdeepak.me@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-900/10 transition-colors bg-gradient-to-br from-[#111827] to-[#0f172a] border border-cyan-500/30">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/30">
                            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1 text-white">LinkedIn</h3>
                            <a href='https://www.linkedin.com/in/deepakvi18/' rel="noopener noreferrer" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Connect with me</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-900/10 transition-colors bg-gradient-to-br from-[#111827] to-[#0f172a] border border-cyan-500/30">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/30">
                            <FontAwesomeIcon icon={faGithub} className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1 text-white">Github</h3>
                            <a href='https://github.com/deepak-vm' rel="noopener noreferrer" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">View my code</a>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#111827] to-[#0f172a] p-4 rounded-xl border border-cyan-500/30 shadow-lg">
                    {/* Status messages - only show error message inline, success shows as toast */}
                    {submitStatus === 'error' && (
                        <div className="mb-4 p-2 rounded-lg bg-red-900/20 border border-red-500/30 flex items-center gap-2">
                            <FontAwesomeIcon icon={faCircleExclamation} className="text-red-400" />
                            <p className="text-red-200 text-sm">Failed to send message. Please try again later or email me directly.</p>
                        </div>
                    )}

                    <form className="grid gap-4" onSubmit={handleSubmit}>
                        <div className="grid gap-1">
                            <label htmlFor="name" className="text-sm font-medium text-gray-300">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 bg-[#0a0e17] border ${errors.name ? 'border-red-500/50' : 'border-cyan-500/30'} rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all`}
                                placeholder="Your name"
                            />
                            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                        </div>

                        <div className="grid gap-1">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 bg-[#0a0e17] border ${errors.email ? 'border-red-500/50' : 'border-cyan-500/30'} rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all`}
                                placeholder="Your email"
                            />
                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div className="grid gap-1">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 bg-[#0a0e17] border ${errors.message ? 'border-red-500/50' : 'border-cyan-500/30'} rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all resize-none`}
                                placeholder="Your message"
                            ></textarea>
                            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-gradient-to-r from-cyan-600 to-blue-600 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-cyan-700 hover:to-blue-700'} text-white py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex justify-center items-center`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
