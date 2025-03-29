import React from 'react';
import imgintro from '../image/image.png';
import history1 from '../image/img1.jpeg';
import history2 from '../image/img2.jpg';

const About = () => {
  return (
    <main className="p-4 bg-black">
      {/* Introduction Section */}
<section id="introduction" className="my-8">
  <h1 className="text-4xl font-bold relative text-white mb-8 after:absolute after:content-[''] after:w-44 after:h-2 after:bg-red-500 after:bottom-[-8px] after:left-0">
    INTRODUCTION
  </h1>
  <div className="flex items-start space-x-4">
    <p className="max-w-[70%] text-base font-sf leading-relaxed my-12 text-white">
    The Royal University of Phnom Penh (RUPP), founded in 1960, has undergone a series of transformations to become the leading national university in Cambodia. Other transformations are still happening. In the last five years, for example, Rupp has made considerable progresses in many areas including organizational structure, institutional governance, capacity building, infrastructure development, research, teaching and learning, curriculum development, and quality assurance. These achievements have encouraged RUPP management and faculty to strive harder to implement the institutional reform and achieve development goals.
    <br />
     Looking towards the future, Rupp will grasp opportunities and assume a key role in driving Cambodia’s socio-economic development through the creation of human capital and the provision of quality research, training and community service. Rupp aspires to contribute to the achievement of the 2030 and 2050 national development goals of the Royal Government of Cambodia as well as the higher education vision of the Ministry of Education, Youth, and Sport.
    <br />
    among other national universities in the ASEAN region as a center for intellectual and cultural development.
    <br />
    action plans accordingly. The strategic plan will move Rupp closer to assuming its place 
    <br />
    Against this backdrop, this Strategic Plan 2019-2023 has been developed to guide Rupp in realizing its development vision and goals for the next five years. It will serve as a roadmap for the university to orient its focus and for its sub-units to devise their own 
    
    </p>
    <img 
      src={imgintro}
      id="introduction-img"
      className="w-[30%] h-auto rounded shadow-lg ml-auto"
      alt="Introduction to the Royal University of Phnom Penh"
    />
  </div>
</section>


      {/* Vision Section */}
      <section id="vision" className="my-8">
        <h1 className="text-4xl text-white font-bold font-sf relative mb-10 after:absolute after:content-[''] after:w-20 after:h-2 after:bg-red-500 after:bottom-[-8px] after:left-0">
          VISION
        </h1>
        <p className="text-justify mb-8 text-white font-sf">
          To be Cambodia's flagship university with regional standing in teaching and learning, research and innovation, and social engagement.
        </p>
      </section>

      {/* Mission Section */}
      <section id="mission" className="my-8">
        <h1 className="text-4xl text-white font-sf font-bold relative mb-10 after:absolute after:content-[''] after:w-36 after:h-2 after:bg-red-500 after:bottom-[-8px] after:left-0">
          MISSION STATEMENT
        </h1>
        <ul className="list-disc text-white font-sf pl-6 space-y-2">
          <li>Responding to national and international knowledge, skills, values, and ethics, and thus contribute to the information and knowledge-based society.</li>
          <li>Providing high-quality research and innovation.</li>
          <li>Developing socially responsible citizens.</li>
        </ul>
      </section>

      {/* Goals Section */}
      <section id="goals" className="my-8">
        <h1 className="text-4xl font-bold relative font-sf mb-10 text-white after:absolute after:content-[''] after:w-36 after:h-2 after:bg-red-500 after:bottom-[-8px] after:left-0">
          GOALS
        </h1>
        <ul className="list-disc font-sf text-white pl-6 space-y-2">
          <li> <span className='font-bold'>Goal 1</span>: Enhance teaching and learning</li>
          <li> <span className='font-bold'>Goal 2</span>: Promote research and innovation</li>
          <li> <span className='font-bold'>Goal 3</span>: Develop skilled and effective leadership</li>
          <li> <span className='font-bold'>Goal 4</span>: Promote a sustainable environment and preserve Cambodian cultural and natural heritage</li>
          <li> <span className='font-bold'>Goal 5</span>: Inspire social engagement</li>
        </ul>
      </section>

      {/* Strategies Section */}
      <section id="strategies" className="my-8">
        <h1 className="text-4xl text-white font-sf font-bold relative mb-10 after:absolute after:content-[''] after:w-36 after:h-2 after:bg-red-500 after:bottom-[-8px] after:left-0">
          ENABLING STRATEGIES
        </h1>
        <ul className="grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li><span className="text-blue-600 font-sf">E1:</span> Enhance the university’s good governance.</li>
          <li><span className="text-blue-600 font-sf">E2:</span> Strengthen partnerships with stakeholders to improve our strategic visibility.</li>
          <li><span className="text-blue-600 font-sf">E3:</span> Enhance internal coordination, collaboration, and communication.</li>
          <li><span className="text-blue-600 font-sf">E4:</span> Further develop our research environment to ensure successful research outcomes.</li>
          <li><span className="text-blue-600 font-sf">E5:</span> Strengthen industry linkages.</li>
          <li><span className="text-blue-600 font-sf">E6:</span> Promote digitalization.</li>
        </ul>
      </section>

     {/* History Section */}
     <section id="history" className="my-8 bg-black text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold relative mb-10 after:absolute after:content-[''] after:w-36 after:h-2 after:bg-red-500 after:bottom-[-8px] after:left-0">
          HISTORY
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <p className="max-w-[80%] text-base leading-relaxed font-sf text-white">The Royal University of Phnom Penh first opened its doors as the Royal Khmer University on January 13, 1960, with a National Institute of Judicial and Economic Studies, a Royal School of Medicine, a National School of Commerce, a National Pedagogical Institute, a Faculty of Letters and Human Sciences, and a Faculty of Science and Technology. The language of instruction during this period was French.</p>
            <br />
            <p className='max-w-[80%] text-base leading-relaxed font-sf text-white'>With the establishment of the Khmer Republic, the Royal Khmer University became the Phnom Penh University. Between 1965 and 1975 the university consisted of the Ecole Normale Supérieure, the Faculties of Letters and Humanities, Science, Pharmacy, Law and Economics, Medicine and Dentistry, Commerce, Pedagogy and the Language Institute.</p>
            <br />
            <p className='max-w-[78%] text-base leading-relaxed font-sf text-white'>Between 1975 and 1979, the Khmer Rouge regime forced the cessation of formal education. Schools and universities were closed and destroyed, and teaching services decimated. Along with all other educational institutions in Cambodia, Phnom Penh University ceased to function during this time. The Khmer Rouge targeted the educated, and many of the University’s faculty members were killed. Of the educated people who survived the regime, few chose to remain in Cambodia once its borders reopened. Deserted for almost five years, the campus became another victim of the grim period during the Pol Pot regime.</p>
            <br />
            <p className='max-w-[85%] text-base leading-relaxed font-sf text-white'>In 1980, the Ecole Normale Supérieure reopened, again teaching predominantly in French. The following year saw the opening of the Institute of Foreign Languages (IFL), initially training students to become Vietnamese and Russian language teachers. Both colleges focused on training students to become teachers, thus rebuilding the education system within Cambodia.</p>
            <br />
            <p className='max-w-[100%] text-base leading-relaxed font-sf text-white'>In 1988, the Ecole Normale Supérieure merged with the IFL to create Phnom Penh University. In 1996, the university underwent its final change of name, becoming the Royal University of Phnom Penh.</p>
            <br />
            <p className='max-w-[100%] text-base leading-relaxed font-sf text-white'>During the past decade, the University has continued to grow and now includes the Faculty of Science, Faculty of Social Sciences and Humanities, and the Institute of Foreign Languages. New departments and degree programs are developed regularly to keep up with the changing needs of Cambodian society. In keeping with its commitment to higher education, RUPP began to develop postgraduate degrees at a Masters level since 2001.</p>

          </div>
          <div className="relative lg:w-1/3 flex flex-col gap-5">
  {/* First Image */}
  <img
    src={history1}
    id="history-img1"
    className="rounded-2xl shadow-lg w-full h-auto absolute top-24 right-60 z-10"
    alt="Historical photo of the Royal University of Phnom Penh"
  />
  
  {/* Second Image */}
  <img
    src={history2}
    id="history-img2"
    className="rounded-2xl shadow-lg w-full h-auto relative z-10 ml-auto mt-80"
    alt="Historical event at Royal University of Phnom Penh"
  />
</div>

        </div>
      </section>

    </main>
  );
};

export default About;
