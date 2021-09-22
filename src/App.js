import "./styles.css";
import { useState } from "react";

var zodiacDictionary = {
  "♊": "Gemini",
  "♑": "Capricon",
  "♉": "Taurus",
  "♐": "Sagittarius",
  "♌": "Leo",
  "♎": "Libra",
  "♓": "Pisces",
  "♋": "Cancer",
  "♒": "Aquarius",
  "♈": "Aries",
  "♍": "Virgo",
  "♏": "Scorpio"
};

var zodiacNatureDictionary = {
  "♊":
    "Have you ever been so busy that you wished you could clone yourself just to get everything done? That’s the Gemini experience in a nutshell. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself.",
  "♑":
    "The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.",
  "♉":
    "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.",
  "♐":
    "Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.",
  "♌":
    "Roll out the red carpet because Leo has arrived. Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves.",
  "♎":
    "Libra is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life.",
  "♓":
    "Pisces, a water sign, is the last constellation of the zodiac. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs.",
  "♋":
    "Cancer is a cardinal water sign. Represented by the crab, this crustacean seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces: For instance, Cancers can effortlessly pick up the energies in a room.",
  "♒":
    "Despite the “aqua” in its name, Aquarius is actually the last air sign of the zodiac. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign.",
  "♈":
    "Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations.",
  "♍":
    "Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.",
  "♏":
    "Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm."
};

var zodiacWeHave = Object.keys(zodiacDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  var [nature, setNature] = useState("");

  function zodiacClickHandler(zodiac) {
    var meaning = zodiacDictionary[zodiac];
    var nature = zodiacNatureDictionary[zodiac];

    setMeaning(meaning);
    setNature(nature);
  }

  return (
    <div className="App">
      <h1>know zodiac nature</h1>
      <h2>click on any zodiac sign to see its nature</h2>

      <div>
        <h3>
          {zodiacWeHave.map((zodiac) => {
            return (
              <span onClick={() => zodiacClickHandler(zodiac)} key={zodiac}>
                {zodiac}
              </span>
            );
          })}
        </h3>
        <h2>{meaning}</h2>
        <p>{nature}</p>
      </div>
    </div>
  );
}
