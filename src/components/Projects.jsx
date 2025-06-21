import React from 'react'
import Project1 from "../assets/Project1.png"
import { BsWindowSidebar } from 'react-icons/bs'
// import Project2 from "../assets/Project2.png"   
// import Project3 from "../assets/Project3.png"

function Projects() {
    return (
        <div id="projects" className="bg-[#0d1219] py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Featured Projects</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Check out some of my recent work and personal projects
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project Card 1 */}
                    <div className="bg-gradient-to-br from-[#111827] to-[#0f172a] rounded-xl overflow-hidden border border-cyan-500/30 group hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                        <div className="relative h-48 overflow-hidden">
                            <img src={Project1} alt="Learnsphere" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2 rounded-lg text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-105" onClick={() => window.open('https://learnsphere-lms.vercel.app/')}>
                                    View Live Demo
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">LearnSphere</h3>
                            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                "LearnSphere" integrates the best ERP systems and LMS to efficiently address the diverse needs of educational institutions and Students.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 text-xs rounded-full">React</span>
                                <span className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 text-xs rounded-full">Node.js</span>
                                <span className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 text-xs rounded-full">PostgreSQL</span>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="bg-gradient-to-br from-[#111827] to-[#0f172a] rounded-xl overflow-hidden border border-cyan-500/30 group hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                        <div className="relative h-48 overflow-hidden">
                            {/* Use placeholder image until Project2.png is available */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:from-cyan-900/50 group-hover:to-blue-900/50 transition-all duration-300">
                                <span className="text-2xl font-bold text-gray-400 group-hover:text-cyan-300">NFT Market</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button onClick={() => window.open('https://github.com/Deepak-vm/Decentralised_nft_marketplace')} className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2 rounded-lg text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                                    View Code
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">NFT Market</h3>
                            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                It is decentralized NFT marketplace that enables users to create, buy, sell NFTs in a decentralized environment.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 text-xs rounded-full">Next.js</span>
                                <span className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 text-xs rounded-full">Solidity</span>
                                <span className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 text-xs rounded-full">Hardhat</span>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="bg-gradient-to-br from-[#111827] to-[#0f172a] rounded-xl overflow-hidden border border-cyan-500/30 group hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                        <div className="relative h-48 overflow-hidden">
                            {/* Use placeholder image until Project3.png is available */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:from-cyan-900/50 group-hover:to-blue-900/50 transition-all duration-300">
                                <span className="text-lg font-bold text-gray-400 group-hover:text-cyan-300 text-center px-4">Movie Recommendation</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2 rounded-lg text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-105" onClick={() => window.open('https://github.com/Deepak-vm/movie_recommendation_project')}>
                                    View Code
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">Movie Recommendation System</h3>
                            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                This project implements a content-based filtering approach to recommend movies. It analyzes features such as genres, cast, and plot summaries to determine similarities between movies.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 text-xs rounded-full">Python</span>
                                <span className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 text-xs rounded-full">sklearn</span>
                                <span className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 text-xs rounded-full">Pandas</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <button
                        className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25" onClick={() => window.open('https://github.com/Deepak-vm/')}>
                        View All Projects →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects