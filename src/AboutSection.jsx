import React from 'react';

const AboutSection = () => {
  return (
    // Main Container: Dark theme, full screen height, centered content
    <div className="h-screen bg-[#171717] text-white flex items-center px-8">
      
      {/* Max-width container with a flex layout for the two main columns */}
      <div className="max-w-7xl mx-auto w-full flex items-start gap-12">
        
        {/* --- Column 1: "ABOUT ME /" Label --- */}
        {/* This is the "plane" section on the far left. 'pt-1.5' helps align it with the heading. */}
        <div className="pt-1.5"> 
          <p 
            className="text-m font-semibold text-white/60 tracking-[0.2em] uppercase whitespace-nowrap"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            ABOUT ME /
          </p>
        </div>

        {/* --- Column 2: Main Content --- */}
        {/* This container takes the remaining space */}
        <div className="flex-1">
          
          <h2 
            className="text-5xl font-black leading-tight mb-8" 
            style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.02em' }}
          >
            EVERY GREAT DESIGN BEGINS WITH AN EVEN BETTER STORY
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
              src="profile.jpg"
              alt="Hugo Vicario"
              className="w-44 h-44 rounded-full object-cover float-right mr-6 mb-4 ml-8 shape-outside-circle"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg width="192" height="192" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="96" cy="96" r="96" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%239CA3AF" font-size="16" dy=".3em"%3EProfile%3C/text%3E%3C/svg%3E';
              }}
            />
            
            {/* Paragraph Text: This will automatically wrap around the floated image above. */}
            <p 
              className="text-base leading-relaxed text-white/80"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              HELLO, I AM HUGO VICARIO A DIGITAL DESIGNER BASED IN MADRID. I HAVE A DEEP PASSION FOR ALL ASPECTS OF DIGITAL DESIGN AND ART DIRECTION. I TAKE PLEASURE IN COLLABORATING WITH AGENCIES AND LIKE-MINDED INDIVIDUALS WHO ARE DRIVEN TO TACKLE CHALLENGES THROUGH THE CREATION OF STUNNING DESIGNS AND EXCEPTIONAL EXPERIENCES. 
            </p>
          </div>
          
          {/* Button: Placed after the wrapping content. 'clear-both' ensures it starts on a new line. */}
          
          <button 
            className="mt-10 px-8 py-3 border-2 border-white rounded-full text-xs font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-300 clear-both" 
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            MORE ABOUT ME
          </button>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;