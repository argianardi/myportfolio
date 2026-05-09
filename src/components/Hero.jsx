import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="max-w-3xl" data-aos="fade-up">
          {/* Greeting & Description */}
          <div>
            <p className="font-mono text-accent text-sm md:text-base mb-5">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-light mb-3">
              Argian Ardi Prasetya.
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate mb-6">
              I build things for the web.
            </h2>
            <div className="font-mono text-accent text-sm md:text-base mb-6 flex items-center gap-2">
              <span className="text-slate">{'>'}</span>
              <TypeAnimation
                sequence={['Frontend Developer', 2000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </div>
            <p className="text-slate text-base md:text-lg max-w-xl mb-10 leading-relaxed">
              A Frontend Web Developer with 3 years of experience in designing
              and building modern web interfaces. Proficient in modern frontend
              technologies. Passionate about creating elegant, responsive
              designs and delivering high-quality user experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-80}
              className="btn-filled cursor-pointer"
            >
              View My Work
              <FiArrowRight />
            </Link>
            <a
              href="https://drive.google.com/file/d/1rywqIL3epOaElZtRfjvSdHuW1CXhYoW2/view"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <FiDownload />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
