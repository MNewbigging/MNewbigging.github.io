import { ReactElement } from "react";
import { Card } from "../card/card";
import "./gallery.scss";

export function Gallery() {
  const cards: ReactElement[] = [];
  for (let i = 0; i < 12; i++) {
    cards.push(
      <Card
        imageSrc="/boxCross.JPG"
        title="Box Cross"
        description="Frogger clone - play as a cardboard box trying to cross as many roads as possible without getting flattened!"
        ctaButtonType="Play"
        appLinkPath="boxcross"
      />,
    );
  }

  return (
    <div className="gallery">
      <div className="card-grid">{cards}</div>
    </div>
  );
}
