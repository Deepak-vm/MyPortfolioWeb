import React from 'react'

function Projects() {
    return (
        <div id="projects" className="bg-[#0d1219] py-20 md:py-32">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-4">Featured Projects</h2>
                <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Check out some of my recent work and personal projects
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project Card 1 */}
                    <div className="bg-[#111827] rounded-lg overflow-hidden border border-purple-500/20 group">
                        <div className="relative h-48">
                            {/* <Image src="/placeholder.svg?height=200&width=400" alt="Project 1" fill className="object-cover" /> */}
                            <div className="absolute inset-0 bg-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button variant="outline" className="border-white text-white hover:bg-white/20">
                                    View Project
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">LearnSphere</h3>
                            <p className="text-gray-400 mb-4">
                                "LearnSphere" integrates the best ERP systems and LMS to efficiently address the diverse needs of educational institutions and Students.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-xs rounded">React</span>
                                <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-xs rounded">Node.js</span>
                                <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-xs rounded">PostgreSQL</span>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="bg-[#111827] rounded-lg overflow-hidden border border-purple-500/20 group">
                        <div className="relative h-48">
                            {/* <Image src="/placeholder.svg?height=200&width=400" alt="Project 2" fill className="object-cover" /> */}
                            <div className="absolute inset-0 bg-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button variant="outline" className="border-white text-white hover:bg-white/20">
                                    View Project
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Nft Market</h3>
                            <p className="text-gray-400 mb-4">It is decentralized NFT marketplace that enables users to create, buy, sell  NFTs in a decentralized environment.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-xs rounded">Next.js</span>
                                <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-xs rounded">Solidity</span>
                                <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-xs rounded">Hardhat</span>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="bg-[#111827] rounded-lg overflow-hidden border border-purple-500/20 group">
                        <div className="relative h-48">
                            {/* <Image src="/placeholder.svg?height=200&width=400" alt="Project 3" fill className="object-cover" /> */}
                            <div className="absolute inset-0 bg-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button variant="outline" className="border-white text-white hover:bg-white/20">
                                    View Project
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Movie Recommendation System</h3>
                            <p className="text-gray-400 mb-4">
                                This project implements a content-based filtering approach to recommend movies. It analyzes features such as genres, cast, and plot summaries to determine similarities between movies.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-xs rounded">Python</span>
                                <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-xs rounded">sklearn</span>
                                <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-xs rounded">Pandas</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <button
                        variant="outline"
                        className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold bg-black border border-purple-500 rounded-md hover:bg-purple-500/20 transition-all ">
                        View All Projects
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects
