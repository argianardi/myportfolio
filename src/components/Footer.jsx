import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-8 border-t border-navy-800">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/argianardi"
              target="_blank"
              rel="noreferrer"
              className="text-slate hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/argianardiprasetya"
              target="_blank"
              rel="noreferrer"
              className="text-slate hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
          <p className="font-mono text-slate-dark text-xs text-center">
            Designed & Built by Argian Ardi Prasetya
          </p>
          <p className="font-mono text-slate-dark text-xs">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
