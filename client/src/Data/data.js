import AVATAR1 from "../assets/avatar1.png";
import AVATAR2 from "../assets/avatar1.png";
import GUARANTEE from "../assets/guarantee.png";
import SPEED from "../assets/speed.png";
import TEAM from "../assets/team.png";
import TRUCK from "../assets/truck.png";
import ANUALSERVICE from "../assets/anualService.png";
import MAJORSERVICE from "../assets/majorService.png";
import REPAIR from "../assets/repair.png";
import MAJORREPAIR from "../assets/majorRepair.png";

export const services = [
  {
    _id: 1,
    name: "Anual Service",
    price: 120,
    homeIcon: ANUALSERVICE,
    img: "https://irepair.true-emotions.studio/v2/wp-content/uploads/sites/2/2021/12/Smiling4-1536x1024.jpg",
    icon: "https://irepair.true-emotions.studio/v2/wp-content/uploads/sites/2/2021/11/safety-seat.svg",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius, nisi vel bibendum feugiat, mi tortor posuere risus, at vulputate ligula diam eget lectus...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius, nisi vel bibendum feugiat, mi tortor posuere risus, at vulputate ligula diam eget lectus. Phasellus quis porttitor eros. Proin cursus ipsum id diam euismod ultrices ut id nisl. Sed at cursus odio, in consectetur dolor. Proin eget velit lorem. Etiam diam arcu, ultricies quis suscipit sit amet, tincidunt ut sem. Vivamus lorem neque, ornare vel tempus in, auctor nec dui.",
  },
  {
    _id: 2,
    name: "Major Service",
    price: 190,
    homeIcon: MAJORSERVICE,
    img: "https://irepair.true-emotions.studio/v2/wp-content/uploads/sites/2/2021/11/Carrying-1536x1025.jpg",
    icon: "https://irepair.true-emotions.studio/v2/wp-content/uploads/sites/2/2021/11/brake.svg",
    shortDescription:
      "Cras efficitur rhoncus felis, ac pretium ex malesuada sit amet. Donec porttitor nulla sed nisl vestibulum, in eleifend mauris consectetur. Sed bibendum sem non orci feugiat condimentum...",
    description:
      "Cras efficitur rhoncus felis, ac pretium ex malesuada sit amet. Donec porttitor nulla sed nisl vestibulum, in eleifend mauris consectetur. Sed bibendum sem non orci feugiat condimentum. Phasellus eu malesuada nisl. Maecenas feugiat, neque a aliquet fermentum, dolor justo tempus neque, ac iaculis enim felis eget nunc. Ut vel facilisis nisl. Vestibulum fermentum justo ut metus rutrum iaculis. Vestibulum aliquet efficitur risus, nec pharetra ex fermentum id. Nulla facilisi. Aenean sollicitudin quam vitae sodales feugiat. Aliquam facilisis neque in risus pharetra, vel auctor nisi tristique.",
  },
  {
    _id: 3,
    name: "Repair / Fault",
    price: 90,
    homeIcon: REPAIR,
    img: "https://irepair.true-emotions.studio/v2/wp-content/uploads/sites/2/2021/12/motor-1536x1024.jpg",
    icon: "https://irepair.true-emotions.studio/v2/wp-content/uploads/sites/2/2021/11/wheel-2.svg",
    shortDescription:
      "Aliquam lobortis ut ex et tempus. Sed sit amet malesuada magna, eu laoreet ligula. Nunc a metus venenatis, pharetra ligula a, lobortis dui. Donec eget libero erat. Maecenas fermentum tempus tincidunt...",
    description:
      "Aliquam lobortis ut ex et tempus. Sed sit amet malesuada magna, eu laoreet ligula. Nunc a metus venenatis, pharetra ligula a, lobortis dui. Donec eget libero erat. Maecenas fermentum tempus tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit ornare mauris, aliquam sollicitudin lorem vestibulum iaculis. Nullam rutrum dui odio, sed vestibulum tellus fringilla sed. Donec molestie, mi a fermentum porttitor, magna nisi efficitur libero, vitae sodales nisl nisl nec mauris. Etiam a libero ac ipsum gravida maximus. Nunc elementum libero ac purus lobortis, ut posuere tellus hendrerit. Cras vitae gravida nulla.",
  },
  {
    _id: 4,
    name: "Major Repair",
    price: 210,
    homeIcon: MAJORREPAIR,
    img: "https://irepair.true-emotions.studio/v2/wp-content/uploads/sites/2/2021/11/laptop-1536x1025.jpg",
    icon: "https://irepair.true-emotions.studio/v2/wp-content/uploads/sites/2/2021/11/voltage.svg",
    shortDescription:
      "Curabitur mattis, tortor eu commodo vestibulum, turpis ipsum congue orci, non ultricies libero diam at odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet ultrices ligula at sodales...",
    description:
      "Curabitur mattis, tortor eu commodo vestibulum, turpis ipsum congue orci, non ultricies libero diam at odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet ultrices ligula at sodales. Sed ac nisi elit. Pellentesque sed felis eu arcu ultrices lacinia. Aliquam est felis, euismod id elit sit amet, ornare luctus velit. Nam mollis purus eu tincidunt facilisis. Nunc cursus leo ac consectetur molestie. Cras tempor imperdiet tellus et egestas. Sed velit ipsum, porta id sollicitudin a, interdum ut metus. Cras maximus tortor non semper ornare. Sed dolor nunc, mattis et laoreet vel, sollicitudin vel turpis. Aenean nec orci condimentum, luctus tellus at, tempor sem.",
  },
];

export const banner = [
  {
    id: 1,
    img: "https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U9651/IMG_71532-large.jpg",
    title: "CHECK OUT OUR SERVICES",
    desc: "ENJOY OUR ACCESSORIES AVAILABLE AND TRANSFORM YOUR CAR NOW. ",
    button: "SCHEDUELE NOW",
    bg: "fcf1ed",
  },
];

export const advantages = [
  {
    _id: 1,
    img: GUARANTEE,
    title: "Official Guarantee",
    desc: "We give a one-year guarantee for all work. Two years of official warranty for spare parts from our online store.",
  },
  {
    _id: 2,
    img: SPEED,
    title: "Auto Parts Store",
    desc: "Own online store of original auto parts with delivery. 15% discount on spare parts when repairing your car.",
  },
  {
    _id: 3,
    img: TEAM,
    title: "Professional Team",
    desc: "We employ only professional specialists with extensive experience in car services. Guarantee for all works.",
  },
  {
    _id: 4,
    img: TRUCK,
    title: "Own Tow Truck",
    desc: "If your car breaks down and does not go. We can quickly deliver it to our car service with our tow truck.",
  },
];

export const sliderItems = [
  {
    id: 1,
    img: "http://cdn.carbuzz.com/gallery-images/1600/940000/300/940330.jpg",
    // img: "https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U9651/IMG_71532-large.jpg",
    title: "CHECK OUT OUR SERVICES",
    desc: "DON'T COMPROMISE ON YOUR SECURITY! GET YOUR CAR SERVICED NOW.",
    button: "SCHEDUELE NOW",
    bg: "fcf1ed",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/originals/80/f9/8f/80f98fb11a2de14c45f663308904ee6c.jpg",
    // img: "https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U9651/IMG_71532-large.jpg",
    title: "MODERN AUTO PARTS",
    desc: "DON'T COMPROMISE ON FEATURES! GET NEW ACCESSORIES NOW.",
    button: "SHOP NOW",
    bg: "f5fafd",
  },
];

export const categories = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "SHIRT STYLE!",
    cat: "women",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "LOUNGEWEAR LOVE",
    cat: "man",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "LIGHT JACKETS",
    cat: "Skirt",
  },
];

export const products = [
  {
    _id: 1,
    name: "Spark Plug",
    price: 25,
    img: "https://slidesigma.nyc/templatemonster/react/tezzla/assets/img/products/7.png",
  },
  {
    _id: 2,
    name: "Gears",
    price: 30,
    img: "https://slidesigma.nyc/templatemonster/react/tezzla/assets/img/products/8.png",
  },
  {
    _id: 3,
    name: "Car Engine",
    price: 80,
    img: "https://slidesigma.nyc/templatemonster/react/tezzla/assets/img/products/9.png",
  },
  {
    _id: 4,
    name: "Tyres",
    price: 40,
    img: "https://slidesigma.nyc/templatemonster/react/tezzla/assets/img/products/10.png",
  },
  {
    _id: 5,
    name: "Engines",
    price: 57,
    img: "https://slidesigma.nyc/templatemonster/react/tezzla/assets/img/products/11.png",
  },
  {
    _id: 6,
    name: "Gears",
    price: 30,
    img: "https://slidesigma.nyc/templatemonster/react/tezzla/assets/img/products/8.png",
  },
];

export const data = [
  {
    image: AVATAR1,
    name: "Junio Xavier",
    review:
      "It really improved my workflow, as I don't have to worry about scheduling my clients, and I reaceive every appointment by Email and also on the app which gives me my agenda organized the way I please, It even helped me to get more clients. Every day one of my clients praises me about my Website. I'm really happy about it.",
  },
  {
    image: AVATAR2,
    name: "Debora Garcia",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore possimus reiciendis, voluptatibus ad impedit delectus odio deleniti error aspernatur tempora reprehenderit omnis dolor voluptate earum accusamus vitae eaque. Exercitationem, atque.",
  },
];
