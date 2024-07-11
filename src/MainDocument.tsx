import { Page, View, Document, Text, Link } from "@react-pdf/renderer";
import data, {
  type Education,
  type Experience,
  Section,
  SubHeading,
} from "./data";
import tw from "./utils/tw";

const MainDocument = () => (
  <Document>
    <Page size="A4" style={tw(" bg-background text-text p-6 text-base")}>
      <View>
        <Heading name={data.name} />
        <SubHeadings subHeadings={data.subHeadings} />
        <Sections sections={data.sections} />
      </View>
    </Page>
  </Document>
);

const Heading = ({ name }: { name: string }) => {
  return (
    <View>
      <Text style={tw("text-center text-3xl leading-tight")}>{name}</Text>
    </View>
  );
};
const SubHeadings = ({ subHeadings }: { subHeadings: SubHeading[] }) => {
  const getSubheading = (subHeading: SubHeading) => {
    switch (subHeading.type) {
      case "email":
        return (
          <Text key={subHeading.email}>
            <Link style={tw("text-accent")} src={`mailto:${subHeading.email}`}>
              {subHeading.email}
            </Link>
          </Text>
        );
      case "location":
        return <Text key={subHeading.location}>{subHeading.location}</Text>;
      case "phone":
        return (
          <Text key={subHeading.phone}>
            <Link style={tw("text-accent")} src={`tel:${subHeading.phone}`}>
              {subHeading.phone}
            </Link>
          </Text>
        );
      case "link":
        return (
          <Text key={subHeading.link}>
            <Link style={tw("text-accent")} src={subHeading.link}>
              {subHeading.label}
            </Link>
          </Text>
        );
    }
  };
  return (
    <View style={tw("flex flex-row justify-center text-sm gap-2")}>
      {subHeadings.map((subHeading, index) => (
        <>
          {getSubheading(subHeading)}{" "}
          {index !== subHeadings.length - 1 ? " | " : null}
        </>
      ))}
    </View>
  );
};

const Sections = ({ sections }: { sections: Section[] }) => {
  return (
    <View>
      {sections.map((section) => {
        return (
          <View key={section.type}>
            <Text style={tw("font-bold capitalize text-xl leading-none")}>
              {section.type}
            </Text>
            <View style={tw("h-1 w-full bg-secondary my-2")} />
            <View style={tw("flex flex-col gap-2")}>
              {section.type === "experience"
                ? section.data.map((experience) => (
                    <Experience
                      key={experience.organization}
                      experience={experience}
                    />
                  ))
                : null}
              {section.type === "education"
                ? section.data.map((education) => (
                    <Education
                      key={education.organization}
                      education={education}
                    />
                  ))
                : null}
              {section.type === "skills" ? (
                <Skills skills={section.data} />
              ) : null}
            </View>
          </View>
        );
      })}
    </View>
  );
};

const Experience = ({ experience }: { experience: Experience }) => {
  return (
    <View>
      <Text
        style={tw(
          "flex flex-row justify-between items-start font-bold text-lg leading-none mb-1"
        )}
      >
        {experience.organization}
      </Text>
      {experience.positions.map((position) => (
        <View key={position.title}>
          <View style={tw("flex flex-row justify-between leading-none mb-1")}>
            <Text style={tw("text-sm")}>
              {position.title}
              {position.team ? `, ${position.team}` : null}
            </Text>
            <View style={tw("flex flex-col items-end")}>
              <Text style={tw("text-sm")}>{position.location}</Text>
              <View style={tw("flex flex-row text-xs justify-start")}>
                <Text>
                  {position.dateGranulation === "month"
                    ? position.startDate.toLocaleString("default", {
                        month: "long",
                      })
                    : null}{" "}
                  {position.startDate.getFullYear()} -{" "}
                </Text>
                {position.present ? <Text>Present</Text> : null}
                {!position.present ? (
                  <Text>
                    {position.dateGranulation === "month"
                      ? position.endDate.toLocaleString("default", {
                          month: "long",
                        })
                      : null}{" "}
                    {position.endDate.getFullYear()}
                  </Text>
                ) : null}
              </View>
            </View>
          </View>

          <View>
            {position.points.map((point) => (
              <View
                key={point}
                style={tw("flex flex-row text-xs leading-normal")}
              >
                <Text>{"\u2022" + " "}</Text>
                <Text style={tw("ml-1")}>{point}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};
const Education = ({ education }: { education: Education }) => {
  return (
    <View>
      <Text
        style={tw(
          "flex flex-row justify-between items-start font-bold text-lg leading-none"
        )}
      >
        {education.organization}
      </Text>
      {education.degrees.map((degree) => (
        <View key={degree.degree}>
          <View style={tw("flex flex-row justify-between leading-none mb-1")}>
            <Text style={tw("text-sm")}>
              {degree.degree}
              {degree.GPA ? `, ${degree.GPA.toFixed(2)}/4.00` : null}
            </Text>
            <View style={tw("flex flex-col items-end")}>
              <Text style={tw("text-sm")}>{degree.location}</Text>
              <View style={tw("flex flex-row text-xs justify-start")}>
                {degree.graduationDate ? (
                  <Text>
                    Graduation: {degree.graduationDate?.getFullYear()}
                  </Text>
                ) : null}
              </View>
            </View>
          </View>
          {degree.points ? (
            <View>
              {degree.points.map((point) => (
                <View style={tw("flex flex-row text-xs leading-normal")}>
                  <Text>{"\u2022" + " "}</Text>
                  <Text style={tw("ml-1")}>{point}</Text>
                </View>
              ))}
            </View>
          ) : null}
        </View>
      ))}
    </View>
  );
};

const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <View>
      {skills.map((skill) => (
        <Text style={tw("text-sm")} key={skill}>
          {skill}
        </Text>
      ))}
    </View>
  );
};

export default MainDocument;
