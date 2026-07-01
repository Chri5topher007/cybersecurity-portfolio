interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
}

const Button = ({ text, className, id }: ButtonProps) => (
  <a
    href={id ? `#${id}` : "#"}
    onClick={(e) => {
      if (!id) return;
      e.preventDefault();
      const target = document.getElementById(id);
      if (target) {
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }}
    className={`${className ?? ""} cta-wrapper`}
  >
    <div className="cta-button group">
      <div className="bg-circle" />
      <p className="text">{text}</p>
      <div className="arrow-wrapper">
        <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </div>
  </a>
);

export default Button;
