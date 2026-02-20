import { Card } from "../card/card";
import "./gallery.scss";

export function Gallery() {
  return (
    <div className="gallery">
      <div className="card-grid">
        <Card
          imageSrc="/shootHoops.png"
          title="Shoot Hoops"
          description="Shoot some hoops in the gym"
          tags={["Game", "Physics", "ThreeJs"]}
          ctaButtonType="Play"
          linkPath="shoot-hoops"
        />
        <Card
          imageSrc="/shootingRange.png"
          title="Shooting Range"
          description="A first person shooting range - knock down all the targets in the quickest time!"
          tags={["Game", "Blender", "ThreeJs"]}
          ctaButtonType="Play"
          linkPath="shooting-range"
        />
        <Card
          imageSrc="/boxCross.JPG"
          title="Box Cross"
          description="Cross as many roads as possible without getting flattened!"
          tags={["Game", "ThreeJs"]}
          ctaButtonType="Play"
          linkPath="boxcross"
        />
        <Card
          imageSrc="/lootBox.PNG"
          title="Loot Box"
          description="See what sort of loot you can get!"
          tags={["Animation", "ThreeJs"]}
          ctaButtonType="Open"
          linkPath="loot-box"
        />
        <Card
          imageSrc="/astar.PNG"
          title="A* Pathfinder"
          description="Demonstration of the a-star pathfinding method"
          tags={["Algorithm", "ThreeJs"]}
          ctaButtonType="Open"
          linkPath="a-star"
        />
        <Card
          imageSrc="/keyboardist.JPG"
          title="Keyboardist"
          description="Play my handmade keyboard (press power button to turn it on)"
          tags={["Blender", "ToneJs", "ThreeJs"]}
          ctaButtonType="Open"
          linkPath="keyboardist"
        />
        <Card
          imageSrc="/trafficScene.PNG"
          title="Traffic Sim"
          description="Watch the cars drive by in this small-town traffic simulation"
          tags={["Simulation", "ThreeJs"]}
          ctaButtonType="Open"
          linkPath="traffic-scene"
        />
        <Card
          imageSrc="/homeSt.JPG"
          title="Home St"
          description="Walk around my old house I modelled myself"
          tags={["Blender", "ThreeJs"]}
          ctaButtonType="Open"
          linkPath="home-st"
        />
        <Card
          imageSrc="/galaxy.JPG"
          title="Galaxy Gen"
          description="Generate your own spiral galaxy"
          tags={["Generator", "ThreeJs"]}
          ctaButtonType="Open"
          linkPath="galaxy"
        />
        <Card
          imageSrc="/gridPlanner.PNG"
          title="Grid Planner"
          description="Customise grid cells to create grid-based plans for anything"
          tags={["Tool", "React", "BlueprintJs"]}
          ctaButtonType="Open"
          linkPath="grid-planner"
        />
        <Card
          imageSrc="/blether.PNG"
          title="Blether"
          description="Online web messenger app - invite your friends for a blether!"
          tags={["App", "PeerJs", "React"]}
          ctaButtonType="Open"
          linkPath="blether"
        />
      </div>
    </div>
  );
}
