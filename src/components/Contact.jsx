import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div id="contact" className="container mx-auto px-4 py-20 md:py-32">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-16">
                Have a project in mind or want to collaborate? Let's talk!
            </p>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center shrink-0">
                            <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-gray-400">18vdeepak@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center shrink-0">
                            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/deepakvi18/' rel="noopener noreferrer" target="_blank" className="text-xl font-bold mb-2">LinkedIn</a>

                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center shrink-0">
                            <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <a href='https://github.com/deepak-vm' rel="noopener noreferrer" target="_blank" className="text-xl font-bold mb-2">Github</a>
                        </div>
                    </div>

                </div>

                <div className="bg-[#111827] p-8 rounded-lg border border-purple-500/20">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="w-full px-4 py-3 bg-[#0a0e17] border border-purple-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full px-4 py-3 bg-[#0a0e17] border border-purple-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Your email"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-4 py-3 bg-[#0a0e17] border border-purple-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Your message"
                            ></textarea>
                        </div>

                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact  