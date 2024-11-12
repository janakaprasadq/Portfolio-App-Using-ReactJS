function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Janaka Prasad. All rights reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:email@example.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
