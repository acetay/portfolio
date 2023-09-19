import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='about me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            I am currently based in Singapore and have been working in the field
            of charity and non-governmental organizations. While I have a
            background in this sector, I am passionate about transitioning into
            a career as a full stack developer. I am in the early stages of my
            coding journey, focusing on languages like Java, JavaScript, React,
            and Springboot. My goal is to gain expertise in these areas so that
            I can contribute to the world of software development and create
            meaningful technology solutions.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
