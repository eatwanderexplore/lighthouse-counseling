import React from 'react';

function BioSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-blue-900 text-white py-16 px-6 md:px-20">
      {/* Profile Image */}
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
        <img 
          src="./src/assets/Paul-Negrulescu-2019.jpg" 
          alt="Therapist"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bio Text */}
      <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left max-w-2xl">
        <h2 className="text-3xl text-gray-300 font-bold">Paul Negrulescu</h2>
        <p className="mt-4 text-lg leading-relaxed">
          My primary type of therapy is <strong>Systemic Therapy</strong>, which includes narrative therapy, 
          solution-focused therapy, emotion-focused therapy, and cognitive behavioural techniques as required. 
          My background is in <strong>Clinical Psychology</strong> (recognised in NZ by NZQA) and <strong>Psychotherapy</strong>. 
          I work with individuals (adults) and couples. One area of significant focus and passion in my work is 
          single-event or prolonged trauma. I am <strong>ACC registered</strong>.
        </p>
      </div>
    </section>
  );
}

export default BioSection;
