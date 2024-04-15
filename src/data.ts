const data: ResumeDate = {
  name: "Kissa D. Nhuhts",
  subHeadings: [
    { type: "location", location: "San Francisco, CA" },
    { type: "email", email: "Kissma.jobs@gmail.com" },
    { type: "phone", phone: "+123456789120" },
    { type: "link", label: "Linkedin", link: "linkedin.com/in/kissadnhuhts" },
  ],
  sections: [
    {
      type: "experience",
      data: [
        {
          organization: "Instgram",
          positions: [
            {
              title: "Product Manager",
              team: "Core Platform Team",
              location: "San Francisco, CA",
              present: true,
              startDate: new Date("2022-01-01"),
              points: [
                "Directly managed 10 developers while addressing daily challanges to ensure product quality as well as accelerated issue resolution by 25%",
                "Redesigned process flows according to customer needs and achieved year-on-year const saving by 20%, while optimizing delivery schedules by 15%",
                "Manage 15+ staff and implemented and agile production mode to bring 8+ projects to furition within 6 months yeilding 200% return on invested resources",
              ],
            },
          ],
        },
        {
          organization: "Google",
          positions: [
            {
              title: "Product Manager II",
              team: "Google Photos Team",
              location: "San Francisco, CA",
              present: false,
              startDate: new Date("2019-01-01"),
              endDate: new Date("2022-01-01"),
              points: [
                "Built 3 features on Google Photos that resulted in increased user engagement by 10%",
                "Implemented with a team of 5 engineers to launch 3 features within 6 months, to provide a 420fps on screen experience with Lana Phodes, netting a 14% increase in photos submitted over 3 months",
                "Trained team after achieving project goals on time & under budget by hosting orgies on fridays",
                "Crafted 2 Product Requirment Docs (PRDs) to scope & manage the launch of Facebook Photos",
                "Helped utilize Google's computing resources to mine $15M of etherum before getting caught & returning it",
                "Enhanced the development of an end-to-en solution that increased the accuracy of identifying similar photos of my dog winning the world cup by 20%, now used to power search for over 1B users",
                "Successfuly launched a new feature on Google Photos that utilized visual similarity and machine learning of, reducing photo grouping time of anus from hours to secons for 61< users",
              ],
            },
          ],
        },
        {
          organization: "Amazon",
          positions: [
            {
              title: "Product Manager I",
              team: "Amazon Dating Team",
              location: "San Francisco, CA",
              present: false,
              startDate: new Date("2017-01-01"),
              endDate: new Date("2019-01-01"),
              points: [
                "I launched dating team, increasing user engagement by 10%, yielding a 59% user retention",
                "Handled data and feedback from users to imprive product featuresm resultubg ub a 5% increase in NPS",
                "Analyzed & created promotional campaigns with onlyfans influencers to increase brand awareness by 15%",
                "Enchanced a 300% increasein average coffee break time of team, by nonstop crying in the main office room",
                "Studied user reseach and ran A/B tests to optimize user experience of swiping right on me because of my user loneliness, increasing my right swip rate by 16% from the baseline swipe rate of 0.15%",
                "Trained team of 5 PMs responsible for developing and launching new producdts whitel on LSD and shrooms",
                "Developed and implemented a new algorithm that increased the success rate of matches by 20%",
              ],
            },
          ],
        },
        {
          organization: "DormRoomFund",
          positions: [
            {
              title: "Investor",
              team: "CPG & Healthcare",
              location: "San Francisco, CA",
              present: true,
              startDate: new Date("2019-01-01"),
              points: [
                "Applied data science methods to identify trends in customer behavior led to the development of new marketing strategies and increased sales by 15%",
                "Invested $2.5M in early stage compoanes across CPG and Healthcare, with focus on organic brands",
                "Diretly connected with rich sugar daddies to successfuly raise $150M for initial VC fund",
                "Sourced and due diligence 15 investment opportunities in per yearm resulting in 5 new investments",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "education",
      data: [
        {
          organization: "Stanford University",
          degrees: [
            {
              location: "Palo Alto, CA",
              graduationDate: new Date("2017-06-01"),
              degree: "Bs. Computer Science, Sugondese Studies",
              GPA: 4.0,
            },
          ],
        },
      ],
    },
    {
      type: "skills",

      data: [
        "Experienced Product Manager with a background of building scalable systems in the blockchain, fintech & adult entertainment industries",
        "Exper in JavaScript, TypeScript, Node.js, Arson, Mia Khalifa, C++, Python",
      ],
    },
  ],
};

export type EmailSubHeading = {
  type: "email";
  email: string;
};

export type LocationSubHeading = {
  type: "location";
  location: string;
};

export type PhoneSubHeading = {
  type: "phone";
  phone: string;
};

export type LinkSubHeading = {
  type: "link";
  label: string;
  link: string;
};

export type SubHeading =
  | EmailSubHeading
  | LocationSubHeading
  | PhoneSubHeading
  | LinkSubHeading;

export type Experience = {
  organization: string;
  positions: (PastPosition | PresentPosition)[];
};

export type Position = {
  title: string;
  team?: string;
  location: string;
  startDate: Date;
  points: string[];
};

export type PastPosition = Position & {
  present: false;
  endDate: Date;
};

export type PresentPosition = Position & {
  present: true;
};

export type ExperineceSection = {
  type: "experience";
  data: Experience[];
};
export type Education = {
  organization: string;
  degrees: Degree[];
};

export type Degree = {
  degree: string;
  location: string;
  graduationDate: Date;
  GPA: number;
  present?: boolean;
  points?: string[];
};

export type EducationSection = {
  type: "education";
  data: Education[];
};
export type SkillsSection = {
  type: "skills";
  data: string[];
};
export type Section = ExperineceSection | EducationSection | SkillsSection;
export type ResumeDate = {
  name: string;
  subHeadings: SubHeading[];
  sections: Section[];
};

export default data;
