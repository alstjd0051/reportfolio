interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
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

export interface Code extends Dcode {
  language?: string;
  code: string | string[];
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
  createdAt: Date;
}
export interface Flutter extends SanityBody {
  _type: "flutter";
  title: string;
  image?: Image;
  content: Block[];
  createdAt: Date;
}

// Sanity VersionUp
interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: any;
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}
export interface NestJS extends SanityBody {
  _type: "nestjs";
  title: string;
  image?: Image;
  content: Block[];
  createdAt: Date;
  link?: string;
}
export interface Blog extends SanityBody {
  _type: "skill";
  image: Image;
  route: string;
}
