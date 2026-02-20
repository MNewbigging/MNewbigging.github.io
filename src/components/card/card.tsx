import "./card.scss";

export interface CardProps {
  title: string;
  description: string;
  ctaButtonType: "Play" | "Open";
  //githubLink: string;
}

export function Card({ title, description, ctaButtonType }: CardProps) {
  return (
    <div className="card">
      <div className="image-preview"></div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="tags"></div>
      <div className="buttons">
        <div className="cta-button">{ctaButtonType}</div>
        <div className="github-link"></div>
      </div>
    </div>
  );
}
