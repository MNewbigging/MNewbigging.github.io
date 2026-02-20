import "./app.scss";
import { Card } from "./card/card";

export function App() {
  return (
    <div className="app">
      <Card
        imageSrc="/boxCross.JPG"
        title="Box Cross"
        description="Frogger clone - play as a cardboard box trying to cross as many roads as possible without getting flattened!"
        ctaButtonType="Play"
      />
    </div>
  );
}
