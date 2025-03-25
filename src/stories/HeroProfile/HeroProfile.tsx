import Typewriter from "typewriter-effect";
import profilePictureHero from "../../img/profile-picture.jpg";
import "./HeroProfile.css";

import { useTheme } from "../../context/ThemeContext";

interface HeroProfileprops {}

export const HeroProfile = ({ ...props }: HeroProfileprops) => {
  const { activeTheme } = useTheme();
  return (
    <>
      <div className="hero-profile-container">
        <div className="hero-profile">
          <img src={profilePictureHero} alt="Sijan Panta Profile" />
          <p>Hey there I'm,</p>
          <h1>Sijan Panta</h1>
          <Typewriter
            options={{
              strings: ["Frontend Developer", "Student", "Gamer"],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="hero-profile-tagline">
            What I excel at is creating  websites, and learning.
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=100011465675718"
            target="_blank"
            rel="noopener noreferrer"
            className={
              activeTheme === "light"
                ? "hero-profile-button-light-theme"
                : "hero-profile-button-dark-theme"
            }
          >
            Find me on social media
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroProfile;
