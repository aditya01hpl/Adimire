import React from 'react';

const AboutSection = () => {
  return (
    // Main Container: Dark theme, full screen height, centered content
    <div className="h-screen bg-black text-white flex items-center px-8">

      {/* Max-width container with a flex layout for the two main columns */}
      <div className="max-w-7xl mx-auto w-full flex items-start gap-40">

        {/* --- Column 1: "ABOUT ME /" Label --- */}
        {/* This is the "plane" section on the far left. 'pt-1.5' helps align it with the heading. */}
        <div className="pt-1.5">
          <p
            className="text-m font-semibold text-[#8A8A8A] tracking-[0.2em] uppercase whitespace-nowrap"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            ABOUT ME /
          </p>
        </div>

        {/* --- Column 2: Main Content --- */}
        {/* This container takes the remaining space */}
        <div className="flex-1">

          <h2
            className="text-5xl font-black leading-tight mb-8 text-white"
            style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.02em' }}
          >
            GREAT AI ISN’T MAGIC, IT’S GOOD ENGINEERING DONE WELL.
          </h2>

          {/* Container for the floating image and wrapping text */}
          <div>
            {/* Floating Image:
              - Smaller size: w-48 h-48
              - float-left: Pushes the image to the left, allowing text to wrap on its right.
              - mr-8 mb-4: Adds margin (space) to the right and bottom of the image.
              - shape-outside-circle: Makes the text wrap in a curve around the image.
            */}
            <img
              src="profile4.jpeg"
              alt="Hugo Vicario"
              className="w-44 h-44 rounded-full object-cover float-right mr-6 mb-4 ml-8 shape-outside-circle border-2 border-[#8A8A8A]"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg width="192" height="192" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="96" cy="96" r="96" fill="%231A1A1A"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%238A8A8A" font-size="16" dy=".3em"%3EProfile%3C/text%3E%3C/svg%3E';
              }}
            />

            {/* Paragraph Text: This will automatically wrap around the floated image above. */}
            <p
              className="text-base leading-relaxed text-white "
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Hello, I’m Aditya Mishra an AI Engineer who builds smart, reliable systems that go beyond models and hype. With a couple of years of experience under my belt, I’ve worked on end-to-end stacks where data, architecture and automation come together. 
              <br></br> <br></br> I also write - mostly about the stuff I’m exploring in AI/ML, MLOps, System Design Compnents. Sometime personal thoughts as well. Writing keeps me honest, it helps me to take more deeper dive into things also reflect my thinking.
            </p>
          </div>

          {/* Button: Placed after the wrapping content. 'clear-both' ensures it starts on a new line. */}

          <button
            className="mt-10 px-8 py-3 border-2 border-white text-white rounded-full text-xs font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-300 clear-both"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            onClick={() => window.open('https://www.linkedin.com/in/theadityainsight/', '_blank')}
          >
            MORE ABOUT ME
          </button>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;