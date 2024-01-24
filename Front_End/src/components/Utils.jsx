import DraftsIcon from "@mui/icons-material/Drafts";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PeopleIcon from "@mui/icons-material/People";
import image1 from '../assets/images/image.png';
import image2 from '../assets/images/image1.png';
import image3 from '../assets/images/image2.png';
import image4 from '../assets/images/image3.png';
import DashboardIcon from "@mui/icons-material/Dashboard";
import DvrIcon from "@mui/icons-material/Dvr";

export const menu = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/admin/dashboard",
  },
  {
    title: "Liste des hôtels",
    icon: <DvrIcon />,
    path: "/admin/hotels",
  },
];

export const cardsDash = [
  {
    title: "Formulaires",
    number: "125",
    description: "Je ne sais pas quoi mettre",
    icon: <DraftsIcon />,
    id: "icon1",
  },
  {
    title: "Messages",
    number: "40",
    description: "Je ne sais pas quoi mettre",
    icon: <LocalParkingIcon />,
    id: "icon2",
  },
  {
    title: "Utilisateurss",
    number: "600",
    description: "Je ne sais pas quoi mettre",
    icon: <PeopleIcon />,
    id: "icon3",
  },
  {
    title: "E-mails",
    number: "25",
    description: "Je ne sais pas quoi mettre",
    icon: <DraftsIcon />,
    id: "icon4",
  },
  {
    title: "Hotels",
    number: "40",
    description: "Je ne sais pas quoi mettre",
    icon: <LocalParkingIcon />,
    id: "icon5",
  },
  {
    title: "Entités",
    number: "02",
    description: "Je ne sais pas quoi mettre",
    icon: <DraftsIcon />,
    id: "icon6",
  },
];


export const cardsHotels = [
  {
    img: image1,
    title: "Hôtel Terrou-Bi",
    adress: "Boulevard Martin Luther King Dakar, 11500",
    price: "25.000 XOF par nuit",
  },
  {
    img: image2,
    title: "King Fahd Palace",
    adress: "Rte des Almadies, Dakar",
    price: "20.000 XOF par nuit",
  },
  {
    img: image3,
    title: "Radisson Blu Hotel",
    adress: "Rte de la Corniche O, Dakar 16868",
    price: "22.000 XOF par nuit",
  },
  {
    img: image4,
    title: "Pullman Dakar Teranga",
    adress: "Place de l'Independance, 10 Rue PL 29, Dakar",
    price: "30.000 XOF par nuit",
  },
];