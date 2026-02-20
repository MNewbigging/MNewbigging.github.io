import "./app.scss";
import { Card } from "./card/card";

export function App() {
  return (
    <div className="app">
      <Card
        title="BoxCross"
        description="Frogger clone - play as a cardboard box trying to cross as many roads as possible without getting flattened!"
        ctaButtonType="Play"
      />
    </div>
  );
}
