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
            With a remarkable history of delivering critical operational success
            and accomplishing time-sensitive missions, I bring an extensive
            background in problem-solving and project management. As a trusted
            confidant to the esteemed Center Director, I managed pivotal
            workstreams with guidance, ensuring flawless execution of recurring
            events and fostering fruitful collaborations with government
            entities. Motivated by my recent completion of the SCTP in Software
            Engineering under NTU PaCE, I am eager to forge a path in the tech
            industry as a software engineer. I am genuinely thrilled to make
            impactful contributions to groundbreaking software development
            projects, harnessing my adaptability, keen attention to detail, and
            unwavering commitment to excellence.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
