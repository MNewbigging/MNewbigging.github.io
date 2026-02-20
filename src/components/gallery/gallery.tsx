import { Card } from "../card/card";
import "./gallery.scss";

export function Gallery() {
  return (
    <div className="gallery">
      <div className="card-grid">
        <Card
          imageSrc="/boxCross.JPG"
          title="Box Cross"
          description="Frogger clone - play as a cardboard box trying to cross as many roads as possible without getting flattened!"
          ctaButtonType="Play"
        />

        <Card
          imageSrc="/boxCross.JPG"
          title="Box Cross"
          description="Frogger clone - play as a cardboard box trying to cross as many roads as possible without getting flattened!"
          ctaButtonType="Play"
        />

        <Card
          imageSrc="/boxCross.JPG"
          title="Box Cross"
          description="Frogger clone - play as a cardboard box trying to cross as many roads as possible without getting flattened!"
          ctaButtonType="Play"
        />

        <Card
          imageSrc="/boxCross.JPG"
          title="Box Cross"
          description="Frogger clone - play as a cardboard box trying to cross as many roads as possible without getting flattened!"
          ctaButtonType="Play"
        />
      </div>
    </div>
  );
}
