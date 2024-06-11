type Skill =
  | {
      Icon: IconType;
      title: string;
      textColor: string;
      shadowColor: string;
    }
  | {
      Image: StaticImageData;
      title: string;
      textColor: string;
      shadowColor: string;
    };

type ProjectMeta = {
  id: number;
  name: string;
  description: string | null;
  img: string;
};
