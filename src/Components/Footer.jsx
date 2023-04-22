import { StyledFooter } from "../Styled Components/StyledFooter";

export function Footer() {
  return (
    <StyledFooter>
      <div>
        Made from <i className="fa-solid fa-heart heart"></i> by Stefan Anevski
      </div>
      <ul className="social-links">
        <li>
          <a
            href="https://github.com/anevski-stefan"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/stefan-anevski-ab4712177"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/anevskis/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="mailto:anevskistefan11@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-sharp fa-solid fa-reply"></i>
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
}
