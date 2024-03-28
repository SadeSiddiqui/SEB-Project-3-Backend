import mongoose from "mongoose";
import User from "../models/user";
import Animal from "../models/animals";

// Adding an admin user

const adminUser = [
  {
    username: "bert",
    email: "bert@bert.com",
    password: "Bertanimal12!",
  },
];

const animalData = [
  {
    name: "Lion",
    species: "P.Leo",
    image:
      "https://imagez.tmz.com/image/06/1by1/2015/07/29/06a9511471c156e4b3ab9d4be6e894ae_xl.jpg",
    type: "Land",
    topTip: "Don't feed them by hand",
    dietary: "Carnivore",
    continent: "Africa",
    funFact:
      "THE MAGNIFICENT MANES ON MALE LIONS TELL A STORY. Most male lions grow impressive manes the older they get. These manes grow up to 16cm long and are a sign of dominance. However, not all male lions have manes. ‘Maneless’ male lions are common in parts of Africa, such as Tsavo National Park in Kenya. This is thought to be an adaptation to the local climate, as manes can reduce heat loss.",
    conservation: "Vulnerable (VU)",
  },
  {
    name: "Eastern Grey Kangaroo",
    species: "Marsupial",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Macropus_giganteus_-_Brunkerville.jpg/1024px-Macropus_giganteus_-_Brunkerville.jpg",
    type: "Land",
    topTip:
      "The eastern grey kangaroo is the second largest and heaviest living marsupial ",
    dietary: "Herbivore",
    continent: "Australia",
    funFact:
      "Males can weigh twice as much as females and have more developed chests and forearms",
    conservation: "Least concerned (LC)",
  },
  {
    name: "Barn Owl",
    species: "Owl",
    image:
      "https://www.whitby-photography.com/wp-content/uploads/2018/06/Barn-Owl-Square-Full-Size-1-of-1-6.jpg",
    type: "Land",
    topTip:
      "Some owls have been reported to get caught up in sports nets, and soccer nets are the culprit most of the time. If you have sports nets in your backyard, it is best to put them away when not in use.",
    dietary: "Carnivore",
    continent: "Europe",
    funFact:
      "Owls have specialized feathers that enable them to fly silently. Unlike most birds whose feathers produce some noise during flight, owls have adapted their wing feathers to have fringes that break up turbulence, reducing noise.",
    conservation: "Least concerned (LC)",
  },
  {
    name: "Binturong (bear cat)",
    species: "A. Binturong",
    image:
      "https://i.natgeofe.com/k/7f3afbf5-27e2-42f6-a724-b0030c9ae7ec/binturong-update_square.jpg",
    type: "Land",
    topTip:
      "Restricted to areas with high forest coverage, this species is threatened by habitat loss More study is urgently needed to determine how the species can be conserved.",
    dietary: "Omnivore",
    continent: "Asia",
    funFact:
      "As they travel, binturongs rub a pungent substance produced in their scent glands onto branches and foliage. The animals use the odor to mark territory as well as to attract mates. The substance smells like buttery popcorn.",
    conservation: "Vulnerable (VU)",
  },
  {
    name: "Axolotl",
    species: "A. mexicanum",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWB6Bis2VIj67A1PtYaPky2TeAg4jCHNHKHGWWQKByw&s",
    type: "Water",
    topTip:
      "Reduce Environmental Impact: Minimize your ecological footprint to lessen overall environmental strain, indirectly benefiting axolotl habitats. Responsible Tourism: If visiting axolotl habitats, engage in eco-friendly tourism practices that do not harm their environment.",
    dietary: "Carnivore",
    continent: "America",
    funFact:
      "Axolotls hold cultural significance in Mexican folklore and indigenous mythology. They are considered a symbol of transformation and regeneration and are sometimes associated with deities and supernatural beings.",
    conservation: "Critically Endangered (CE)",
  },
  {
    name: "Northern Snake-necked Turtle",
    species: "Chelodina (freshwater turtle)",
    image:
      "https://i.natgeofe.com/n/f98db8dc-8e84-4d55-800b-2578d72e7df6/02_sea_turtle_square.jpg",
    type: "Water",
    topTip:
      "Conservation efforts, including habitat protection, monitoring, and research, are essential for ensuring their long-term survival",
    dietary: "Carnivore",
    continent: "Australia",
    funFact:
      "When Northern Snake-necked turtles are hiding from predators they use their long neck to breathe above the water but still stay hidden in underwater plants.",
    conservation: "Near Threatened (NT)",
  },
  {
    name: "Common Bottlenose Dolphin",
    species: "T. truncatus",
    image:
      "https://ars.els-cdn.com/content/image/3-s2.0-B9780128043271000728-f02-64-9780128043271.jpg",
    type: "Water",
    topTip:
      "Conservation efforts, including habitat protection, fisheries management, and public education, are essential for ensuring the survival of wild dolphin populations.",
    dietary: "Carnivore",
    continent: "Europe",
    funFact:
      "Bottlenose dolphins are among the most intelligent animals on Earth, exhibiting advanced problem-solving abilities, social cognition, and tool use. They have been observed using objects such as sponges to protect their rostrums (beaks) while foraging on the seafloor.",
    conservation: "Least Concerned (LC)",
  },
  {
    name: "Common Seahorse",
    species: "Hippocampus kuda",
    image:
      "https://www.monaconatureencyclopedia.com/wp-content/uploads/2022/04/v-Hippocampus-kuda.jpg",
    type: "Water",
    topTip:
      "Seahorses are flagship species, charismatic symbols of the seagrasses, mangroves, coral reefs, estuaries and seaweeds where they make their homes. Protecting seahorses means protecting these diverse habitats and all of the marine life that lives therein. Visit the seahorse trust https://www.theseahorsetrust.org to find out more",
    dietary: "Omnivore",
    continent: "Asia",
    funFact:
      "Unlike any other creature, it is the male instead of the female that becomes pregnant.",
    conservation: "Vulnerable (VU)",
  },
  {
    name: "Netherland Dwarf Rabbit",
    species: "Oryctolagus Cuniculus",
    image:
      "https://image.petmd.com/files/styles/863x625/public/2023-08/netherland.dwarf_.jpg",
    type: "Domestic",
    topTip:
      "While the Netherland Dwarf rabbit itself is not considered endangered or threatened, it is still essential for rabbit breeders and owners to prioritize responsible breeding practices, proper care, and responsible pet ownership to ensure the well-being of domestic rabbits as a whole. This includes providing adequate housing, nutrition, veterinary care, and socialization for pet rabbits.",
    dietary: "Herbivore",
    continent: "Europe",
    funFact:
      "As a popular breed of pet rabbit, Netherland Dwarfs are cherished for their small size, friendly personalities, and suitability for indoor living. They are often kept as companions and pets in households around the world.",
    conservation: "N/A",
  },
  {
    name: "Labrador",
    species: "Dog",
    image:
      "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/labrador-retriever-dog-breed-info.jpeg",
    type: "Domestic",
    topTip:
      "Owning a Labrador should be determined by your lifestyle. Find out more here https://www.barkingmad.uk.com/blog/dog-ownership/owning-a-labrador-guide/#:~:text=Labradors%20are%20known%20to%20thrive,appropriate%20care%20should%20be%20taken.",
    dietary: "Carnivore",
    continent: "Europe",
    funFact:
      "Labrador retrievers are made for the water, in fact, they're called “Labrador Retriever” because they were used as working/rescue dogs in the Labrador Sea.",
    conservation: "N/A",
  },
  {
    name: "British Shorthair",
    species: "Cat",
    image:
      "https://basepaws.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7hqiona4456t%2F6SRmODGVBJ1pM2OLLIQCgt%2F4fb6bca002aeeaa1ff4066895861cf26%2Fbritish-shorthair-cat__1_.jpg&w=1080&q=75",
    type: "Domestic",
    topTip:
      "While British Shorthairs are generally not as active as some other breeds, they still need regular exercise to maintain a healthy weight and prevent obesity. Engage them in playtime and provide toys to keep them active. Find out more here https://mylovelyfeline.com/en-gb/blogs/content/british-shorthair-cats-everything-you-need-to-know",
    dietary: "Carnivore",
    continent: "Europe",
    funFact:
      "In 2022, the British Shorthair was one of eight cats featured on a series of UK postage stamps issued by the Royal Mail",
    conservation: "N/A",
  },
  {
    name: "Pig",
    species: "Sus domesticus",
    image:
      "https://www.allthingswild.co.uk/wp-content/uploads/2021/09/DOMESTIC-PIG_03.jpg",
    type: "Domestic",
    topTip:
      "You'll need to make sure your pigs exercise regularly to avoid obesity and constipation and to stop their feet from becoming overgrown. They'll also need regular checks from a vet to make sure they're in good health. Find out more here https://www.rspca.org.uk/adviceandwelfare/farm/farmanimals/pigs/care#:~:text=Pig%20health%20and%20welfare,Dry%2C%20scaly%20skin",
    dietary: "Omnnivore",
    continent: "Asia",
    funFact:
      "Pigs can’t sweat “Sweating like a pig” is another misleading and commonly used phrase since pigs can’t sweat! Pigs don’t have many sweat glands, so they roll around and sleep in mud and swim in water to keep cool. A bonus to rolling in mud: it helps keep a pig’s skin from getting sunburned.",
    conservation: "N/A",
  },
  {
    name: "Shire Horse",
    species: "Horse",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Shire.jpg/1200px-Shire.jpg",
    type: "Domestic",
    topTip:
      "Find out more here https://animalife.co.uk/horse-breeds/shire-horse/",
    dietary: "Herbivore",
    continent: "Europe",
    funFact:
      "As well as being a working horse, Shire horses can also be ridden by all levels of horse rider, with an easygoing nature and a will to please. They are sometimes used as therapy horses, and are an intelligent breed of horse which will happily follow verbal queues.",
    conservation: "Endangered (EN)",
  },
  {
    name: "Platypus",
    species: "O. anatinus",
    image:
      "https://www.researchgate.net/publication/332670576/figure/fig1/AS:751810788741120@1556257068408/A-platypus-Ornithorhynchus-anatinus-returning-back-to-the-Upper-Tarago-River-in.ppm",
    type: "Water",
    topTip:
      "The platypus was hunted for its fur, but it has been a legally protected species in all states where it occurs since 1912. Head here https://www.acf.org.au/platypus to find out more",
    dietary: "Carnivore",
    continent: "Australia",
    funFact:
      "Together with the four species of echidna, it is one of the five extant species of monotremes, mammals that lay eggs instead of giving birth to live young",
    conservation: "Near Threatened (NT)",
  },
  {
    name: "Barbary Macaque",
    species: "M. sylvanus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Macaca_sylvanus.Mother_and_baby.jpg/640px-Macaca_sylvanus.Mother_and_baby.jpg",
    type: "Land",
    topTip:
      "A conservation tip to help protect Barbary macaques and other wildlife is to practice responsible tourism when visiting their habitats or areas where they are known to reside. Respect Wildlife: Observe Barbary macaques from a safe distance and avoid approaching or feeding them. Remember that they are wild animals and need their space to behave naturally.",
    dietary: "Omnivore",
    continent: "Africa",
    funFact:
      "Over time, Barbary macaques have become an iconic and culturally significant species in the regions where they are found, featuring in folklore, art, and local traditions. They are also known for their unique status as the only species of wild monkey found in Europe, with a population inhabiting the Rock of Gibraltar, a British Overseas Territory located at the southern tip of the Iberian Peninsula.",
    conservation: "Endangered (EN)",
  },
];

async function seed() {
  await mongoose.connect("mongodb://127.0.0.1:27017/animalsdb");
  console.log("Connected to the database! 🔥");

  await mongoose.connection.db.dropDatabase();
  console.log("Remove existing data.");

  // ! Before we seed movies, we want to seed a user.
  const users = await User.create(adminUser);
  const user = users[0];
  // ! Add the user to each movie. Now each movie has a user.
  animalData.forEach((animal: any) => (animal.user = user));
  console.log(animalData);

  const animals = await Animal.create(animalData);
  console.log("Here are the animals:");
  console.log(animals);

  console.log("Disconnecting 🤖..");
  await mongoose.disconnect();
}

seed();
