interface SanityBody {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
interface Dcode {
  _updatedAt: string;
  _key: string;
  style?: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

// interface Code {
//   [{ _type: "block",children:  }];
// }

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
  route?: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  content?: string;
  page: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: data;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points?: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  title: string;
  _type: "project";
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
export interface Resume extends SanityBody {
  _type: "resume";
  title: string;
  subTitle?: string;
  url?: string;
  dateStarted?: date;
  dateEnded?: date;
}

export interface Learn extends SanityBody {
  _type: "learn";
  title: string;
  content: [
    {
      _type: "block";
    },
    {
      language: string;
      code: string;
      _type: "code";
      highlightedLines: [1, 2];
    }
  ];
  tag?: Skill[];
}

export interface NextJS extends SanityBody {
  _type: "nextjs";
  title: string;
  sumbnail?: Image;
  code?: Code[];
}

export interface Code extends Dcode {
  language?: string;
  code: string | string[];
}
