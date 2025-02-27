import Jane from "../assets/Jane.jpeg"
import Dostoevsky from "../assets/fyodor.png"
import Tolestoy from "../assets/Leo.png"
import Camus from "../assets/camus.png"
import Emily from "../assets/emily.png"
import Gibran from "../assets/Gibran.png"

// Books Images

import Emma from "../assets/emma.jpg"
import PrideAndPrejudice from "../assets/pride.jpg"
import SenseAndSensibility from "../assets/sense.jpg"

import Demons from "../assets/demons.jpg"
import CrimeAndPunishment from "../assets/crime_n_punishment.jpg"
import TheBrothersKaramazov from "../assets/the_brother_karamazov.jpg"

import AnnaKarenina from "../assets/anna_karenina.jpg"
import WarAndPeace from "../assets/war.jpg"
import Childhood from "../assets/childhood.jpg"

import TheStranger from "../assets/the_stranger.jpg"
import TheFall from "../assets/the_fall.jpg"
import TheMythOfSisyphus from "../assets/the_myth.jpg"

import WutheringHeights from "../assets/wuthering_heights.jpg"
import PoemsOfEmily from "../assets/poems of emily.jpg"
import NocowardSoul from "../assets/noCoward.jpg"

import TheProphet from "../assets/the_prophet.jpg"
import TheMadMan from "../assets/madman.jpg"
import TheBrokenWings from "../assets/brokenwings.jpg"


const biography = [
     {
          id: 1,
          name: 'Jane Austen',
          pronoun: "Her",
          proPic: Jane,
          lifetime: '1775-1817',
          bio: 'She was born in 1775 and grew up in the small Hampshire village of Steventon, where her father was a Church of England clergyman.',
          works: {
               first: PrideAndPrejudice,
               second: Emma,
               third: SenseAndSensibility
          },
     },
     {
          id: 2,
          name: 'Fyodor Dostoevsky',
          pronoun: "His",
          proPic: Dostoevsky,
          lifetime: '1821-1881',
          bio: "He was a Russian novelist, short story writer, essayist and journalist. Numerous literary critics regard him as one of the greatest novelists in all of world literature, as many of his works are considered highly influential masterpieces.",
          works: {
               first: Demons,
               second: CrimeAndPunishment,
               third: TheBrothersKaramazov
          },          
     },
     {
          id: 3,
          name: 'Leo Tolstoy',
          pronoun: "His",
          proPic: Tolestoy,
          lifetime: '1828-1910',
          bio: 'He was a Russian writer, best known for his epic novels. Born into an aristocratic Russian family, Tolstoy wrote realist fiction and semi- autobiographical novels before shifting into more moral and spiritual works.',
          works: {
               first: AnnaKarenina,
               second: WarAndPeace,
               third: Childhood
          },           
     },
     {
          id: 4,
          name: 'Albert Camus',
          pronoun: "His",
          proPic: Camus,
          lifetime: '1913-1960',
          bio: 'He was a French philosopher, author, dramatist, journalist, world federalist, and political activist. He was the recipient of the 1957 Nobel Prize in Literature at the age of 44, the second-youngest recipient in history. ',
          works: {
               first: TheFall,
               second: TheStranger,
               third: TheMythOfSisyphus
          },           
     },
     {
          id: 5,
          name: 'Emily Brontë',
          pronoun: "Her",
          proPic: Emily,
          lifetime: '1818-1848',
          bio: 'Her was born in Thornton, England, on July 30, 1818. She and her five siblings grew up in Haworth, where their father, the Rev. Patrick Brontë, was the church curate. Emily and her sisters were raised in their aunt’s home in Haworth.',
          works: {
               first: NocowardSoul,
               second: WutheringHeights,
               third: PoemsOfEmily
          },           
     },
     {
          id: 6,
          name: 'Kahlil Gibran',
          pronoun: "His",
          proPic: Gibran,
          lifetime: '1883-1931',
          bio: 'He was a Lebanese-American writer, poet and visual artist; he was also considered a philosopher. Gibran was born in the town of Bsharri in the Mount Lebanon Mutasarrifate, Ottoman Empire, to Khalil Gibran and Kamila Gibran.',
          works: {
               first: TheBrokenWings,
               second: TheMadMan,
               third: TheProphet 
          },           
     }
]

export default biography