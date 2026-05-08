import { FiMail, FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const contactLinks = [
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    href: 'https://wa.me/6285768424797',
    color: 'hover:text-green-400',
  },
  {
    name: 'Email',
    icon: FiMail,
    href: 'mailto:argianardi14@gmail.com',
    color: 'hover:text-blue-400',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/argianardiprasetya',
    color: 'hover:text-blue-500',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/argianardi',
    color: 'hover:text-slate-light',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="h-[calc(100vh-80px)] py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <p className="font-mono text-accent text-sm mb-4">
            04. What&apos;s Next?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-light mb-6">
            Get In Touch
          </h2>
          <p className="text-slate text-base md:text-lg mb-10 leading-relaxed">
            I&apos;m currently open to new opportunities and collaborations.
            Whether you have a project in mind, a question, or just want to say
            hello — my inbox is always open. I&apos;ll do my best to get back to
            you!
          </p>

          {/* Main CTA */}
          <a
            href="mailto:argianardi14@gmail.com"
            className="btn-primary text-base mb-12 inline-flex"
          >
            <FiMail />
            Say Hello
            <FiArrowUpRight />
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`text-slate ${link.color} transition-all duration-300 hover:-translate-y-1`}
                aria-label={link.name}
              >
                <link.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
