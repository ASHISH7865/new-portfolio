import Layout from "@/components/PageComponents/Projects/ProjectLayout";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const projectDetail = async () => {
 
    return (
        <div>
          <Head>
            <title>Interactive Portfolio | Project Name</title>
          </Head>
    
          <div className="container mx-auto mt-8">
            <header className="text-center">
              <h1 className="text-4xl font-bold mb-4">Interactive Portfolio Website</h1>
              <p className="text-gray-600">A dynamic and engaging experience for visitors.</p>
            </header>
    
            <Image
              src="https://images.unsplash.com/photo-1702318429205-c13c15278ea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8" // replace with your image path
              alt="Project Header"
              className="w-full h-64 object-cover rounded mb-8"
              width={500}
                height={500}
            />
    
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p>
                Welcome to my interactive portfolio website, designed to provide a dynamic and engaging experience for visitors. This project aimed to go beyond a traditional portfolio by incorporating interactive elements to enhance user engagement.
              </p>
            </section>
    
            {/* Continue with other sections as needed, such as Details, Process, Challenges, etc. */}
    
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Call-to-Action</h2>
              <p>
                Interested in collaborating or learning more? Feel free to <a href="#" className="text-blue-500">contact me</a> or explore more of my <a href="#projects" className="text-blue-500">projects</a>.
              </p>
            </section>
          </div>
        </div>
        );

};

export default projectDetail;

