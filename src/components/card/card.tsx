import "./card.scss";

export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  ctaButtonType: "Play" | "Open";
  appLinkPath: string;
  //githubLink: string;
}

export function Card({
  imageSrc,
  title,
  description,
  ctaButtonType,
  appLinkPath,
}: CardProps) {
  const appLinkBase = "https://mnewbigging.github.io/";
  const appLink = appLinkBase + appLinkPath;

  return (
    <div className="card">
      <div className="image-preview">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="tags"></div>
      <div className="buttons">
        <div className="cta-button">
          <a href={appLink} target={"_blank"}>
            {ctaButtonType}
          </a>
        </div>
        <div className="github-link-button">
          <GithubIcon />
          <span>GitHub</span>
        </div>
      </div>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48
        0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.1-1.49-1.1-1.49
        -.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.33 1.12
        2.9.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07
        0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71
        0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85.004 1.7.12
        2.5.36 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72
        1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92
        0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.48A10.02 10.02 0 0 0 22
        12.26C22 6.58 17.52 2 12 2z"
      />
    </svg>
  );
}
