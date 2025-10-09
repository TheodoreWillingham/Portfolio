import { useState, useEffect } from "react";

//structure of star
type Star = {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
};

type Meteor = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: string;
  animationDuration: number;
};

export const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    // handles resizing 
    const handleResize = () => {
        generateStars();
    }

    //adds event listener for resizoing of window
    window.addEventListener('resize', handleResize);

    //removes the even listener when the component unmounts, change pages
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  //Generates stars
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerHeight * window.innerWidth) / 10000
    );

    const newStars: Star[] = [];

    //creates all the stars
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, //size 1 - 4
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5, //opacity 0.5 - 1
        animationDuration: Math.random() * 4 + 2, //duration 2 - 6
      });
    }

    setStars(newStars);
  };

  // Generate Meteor
  const generateMeteors = () => {
    const numberOfMeteors = 5;

    const newMeteor: Meteor[] = [];

    //creates all the stars
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteor.push({
        id: i,
        size: Math.random() * 2 + 1, //size 1 - 3
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15 + "",
        animationDuration: Math.random() * 3 + 3, //duration 3 - 6
      });
    }

    setMeteors(newMeteor);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 16 + "px",
            height: meteor.size  + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
