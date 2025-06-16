import tourImg01 from "../image/Travel-img1.jpg";
import tourImg02 from "../image/Travel-img2.jpg";
import tourImg03 from "../image/Travel-img3.jpg";
import tourImg04 from "../image/Travel-img4.jpg";
import tourImg05 from "../image/Travel-img5.jpg";
import tourImg06 from "../image/Travel-img6.jpg";
import tourImg07 from "../image/Travel-img7.jpg";
import tourImg08 from "../image/Travel-img8.jpg";


const tours = [
  {
    id: "01",
    title: "Victoria Memorial",
    city: "Kolkata",
    address: 'Maidan, Kolkata',
    price: 30,
    desc: "The Victoria Memorial is a large marble monument dedicated to Queen Victoria, the Empress of India (1876-1901) facing the Queens Way on the Maidan in Central Kolkata. It was built between 1906 and 1921 by the British Raj. It is the largest monument to a monarch anywhere in the world. It stands at 64 acres of gardens and is now a museum under the control of the Ministry of Culture, Government of India.Possessing prominent features of the Indo-Saracenic architecture, it has evolved into one of the most popular attractions in the city.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
         name: "Karle Bone",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Indian Museum",
    city: "Kolkata",  
    address: 'Esplanade, Kolkata',
    price: 70,
    desc: "The Indian Museum is a massive museum in Central Kolkata, West Bengal, India. It is the ninth oldest museum in the world and the oldest and largest museum in India and Asia, by size of collection.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Science-city",
    city: "Kolkata",
    address: 'New-Town,West Bengal',
    price: 80,
    desc: "The Science City, one of its kind in India, inaugurated on 1st July,1997 has been developed as a major attraction for the residents’ of Kolkata as well as for the national and international visitors to the metropolis.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "M.P Birla",
    city: "Kolkata",
    address: 'Kolkata, West Bengal',
    price: 20,
    desc: "The Birla Planetarium in Kolkata, West Bengal, India, is a single-storeyed circular structure designed in the typical Indian style, whose architecture is loosely styled on the Buddhist Stupa at Sanchi.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Jorasanko Thakur Bari",
    city: "Kolkata",
    address: 'Rabindra Sarani, West Bengal',
    price: 20,
    desc: "The Jorasanko Thakur Bari was built in the 18th century in Jorasanko in the north of Kolkata. The land on which this ancestral home stands today was donated by the famous Sett family (not to be confused with Seth) of Burrabazar to Prince Dwarkanath Tagore, who was the grandfather of Rabindranath Tagore.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Eco-Park",
    city: "Kolkata",
    address: 'New-Town,Kolkata',
    price: 30,
    desc: "Eco Park (or Prakriti Tirtha) is an urban park in New Town, Greater Kolkata, India.[2] With an area of 480 acres (190 ha) (including a 104 acres (42 ha) waterbody with an island in the middle), Eco Park is the largest urban park in India.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Nicco-Park",
    city: "Kolkata",
    address: 'Bidhannagar, West Bengal',
    price: 50,
    desc: "Nicco Park is an amusement park located in Jheel Meel, Sector - IV of Bidhannagar, West Bengal, India. The park was created to attract tourists to the state by providing family-friendly recreation as well as educative entertainment. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Alipore-Zoo",
    city: "Kolkata",
    address: 'Alipore, Kolkata',
    price:50 ,
    desc: "The Zoological Garden, Alipore (also informally called the Alipore Zoo or Kolkata Zoo) is India's oldest formally stated zoological park (as opposed to royal and British menageries) and a big tourist attraction in Kolkata, West Bengal. ",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
  
];

export default tours;
