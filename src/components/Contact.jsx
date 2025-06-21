import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div id="contact" className="container mx-auto px-4 py-8 md:py-12">
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
                            <a href="mailto:18vdeepak@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">18vdeepak@gmail.com</a>
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
                    <form className="grid gap-4">
                        <div className="grid gap-1">
                            <label htmlFor="name" className="text-sm font-medium text-gray-300">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="w-full px-3 py-2 bg-[#0a0e17] border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="grid gap-1">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full px-3 py-2 bg-[#0a0e17] border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all"
                                placeholder="Your email"
                            />
                        </div>

                        <div className="grid gap-1">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-3 py-2 bg-[#0a0e17] border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                                placeholder="Your message"
                            ></textarea>
                        </div>

                        <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact  