import MakeupIcon from "../assets/images/eyeliner.svg";

// images for jobs

import MicroPigmentationImage from "../assets/images/micro-pigmentation.jpg";
import MicroPigmentationImage2 from "../assets/images/micro-pigmentation2.jpg";
import MakeupImage from "../assets/images/makeup.jpg";
import MakeupImage2 from "../assets/images/makeup2.jpg";
import MakeupImage3 from "../assets/images/makeup3.jpg";
import EyebrowDesignImage from "../assets/images/eyebrow-design.jpg";
import EyebrowDesignImage2 from "../assets/images/eyebrow-design2.jpg";
import EyebrowDesignImage3 from "../assets/images/eyebrow-design3.jpg";
import EyelashesImage from "../assets/images/eyelashes.jpg";
import EyelashesImage2 from "../assets/images/eyelashes2.jpg";
import EyelashesImage3 from "../assets/images/eyelashes3.jpg";

export const menuItems = [
  { itemMenu: "WR" },
  { itemMenu: "Sobre" },
  { itemMenu: "Serviços" },
  { itemMenu: "Portfólio" },
];

export const services = [
  {
    title: "Design de sobrancelha",
    icon: MakeupIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, quibusdam tempore accusantium sunt cupiditate obcaecati",
    photos: [EyebrowDesignImage, EyebrowDesignImage2, EyebrowDesignImage3],
  },
  {
    title: "Extensão de cílios",
    icon: MakeupIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, quibusdam tempore accusantium sunt cupiditate obcaecati",
    photos: [EyelashesImage, EyelashesImage2, EyelashesImage3],
  },
  {
    title: "Maquiagem social e artística",
    icon: MakeupIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, quibusdam tempore accusantium sunt cupiditate obcaecati",
    photos: [MakeupImage, MakeupImage2, MakeupImage3],
  },
  {
    title: "Micropigmentação",
    icon: MakeupIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, quibusdam tempore accusantium sunt cupiditate obcaecati",
    photos: [
      MicroPigmentationImage,
      MicroPigmentationImage2,
      MicroPigmentationImage,
    ],
  },
];
