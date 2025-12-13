import React from 'react'
import ScrollingText from './ScrollingText'

const Projects = () => {
    return (
        <div>
            <h1>Nadkoda Jewellers Saidabad, Hyderabad</h1>
            <div className='container mt-4'>
                <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
                    <div
                        className="border-border flex flex-col overflow-clip rounded-xl border"
                    >
                        <img
                            src="/images/nakoda/n-1.jpeg"
                            className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
                        />
                        <div className="px-6 py-4 md:px-8 md:py-10 lg:px-10 lg:py-12">
                            
                            <p className="lg:text-lg">
                                day-1
                            </p>
                        </div>
                        

                        
                    </div>
                    <div
                        className="border-border flex flex-col overflow-clip rounded-xl border"
                    >
                        <img
                            src="/images/nakoda/n-2.jpeg"
                            className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
                        />
                        <div className="px-6 py-4 md:px-8 md:py-10 lg:px-10 lg:py-12">
                            
                            <p className="lg:text-lg">
                                day-2
                            </p>
                        </div>
                        
                    </div>
                    <div
                        className="border-border flex flex-col overflow-clip rounded-xl border"
                    >
                        <img
                            src="/images/nakoda/n-3.jpeg"
                            className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
                        />
                        <div className="px-6 py-4 md:px-8 md:py-10 lg:px-10 lg:py-12">
                            
                            <p className="lg:text-lg">
                                day-3
                            </p>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects