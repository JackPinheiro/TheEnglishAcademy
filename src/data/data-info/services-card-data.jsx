//COLOURS: #FFFFFF
//#C8102E
//#012169

import Abroad from "../img/Abroad.jpg";
import Exam from "../img/Exam.jpg";
import Company from "../img/CompanyTraining.jpg";
import Early from "../img/EarlyEnglish.jpg";
import Other from "../img/OtherLanguages.jpg";
import Pt from "../img/Pt.jpg";
import Revision from "../img/Revision.jpg";
import School from "../img/SchoolTutorial.jpg";
import Translation from "../img/Translations.jpg";
import General from "../img/General.jpg";

import slugify from "slugify";

export const services = [
  {
    image: Exam,
    title: "Cambridge Exam Preparation",
    text: "Here you can prepare for your Cambridge Exames!",
    slug: slugify("Cambridge Exam Preparation", { lower: true }),
    description: "FIX",
  },
  {
    image: School,
    title: "School Tutorials",
    text: "The best tutors for you!",
    slug: slugify("School Tutorials", { lower: true }),
    description:
      "If you are having difficulties with your school subjects or need to improve your marks, then THE ENGLISH ACADEMY is on hand to help. We offer tutoring services for all year groups, whatever your difficulty may be.",
  },
  {
    image: Early,
    title: "Early Years English",
    text: "For kids aged 3 to 6 years",
    slug: slugify("Early Years English", { lower: true }),
    description:
      "When a child starts learning a foreign language from a young age (from birth to about 10 years old), they will pick it up much easier than those who wait, and will have the ability to speak like a native! Young children are able to absorb and reproduce new sounds with ease, meaning they are able to learn pronunciation like a native speaker. While it is possible to become a highly competent speaker at any age, it requires more effort as you get older. With this in mind, The English Academy has developed Early Years English courses for children from 3 to 6 years of age.",
  },
  {
    image: General,
    title: "General English",
    text: "Sutible for anyone!",
    slug: slugify("General English", { lower: true }),
    description:
      "If you are interested in starting to learn English or you want to improve what you already know, then a general English course could be just what you need.\n THE ENGLISH ACADEMY offers courses in general English for all ages and levels.\n Courses are available for individual students if you would like something tailor-made just for you, or in groups which gives you the opportunity to practice what you are learning with your classmates.",
  },
  {
    image: Pt,
    title: "Portuguese for Foreigners",
    text: "Can't speak portuguese? Not a problem!",
    slug: slugify("Portuguese for Foreigners", { lower: true }),
    description:
      "For those who have moved to Portugal and are struggling with the Portuguese language, THE ENGLISH ACADEMY has the solution for you. Whether you want to start learning or improve what you already know, we have a teacher to help you with the process.",
  },
  {
    image: Other,
    title: "Other Language Courses",
    text: "Looking for another language? We got you covered.",
    slug: slugify("Other Language Courses", { lower: true }),
    description:
      "THE ENGLISH ACADEMY recognises the importance of not only English but also the other languages of the world and this is why we have several teachers available to help you. Should you need help learning a language that's not English, or a document translated, THE ENGLISH ACADEMY can help you.",
  },
  {
    image: Translation,
    title: "Translations and Certification",
    text: "In need of translations?",
    slug: slugify("Translations and Certification", { lower: true }),
    description:
      "Do you work with foreign clients and have documents which need translating? Do you feel like your company website would attract more clients if it were in English? Then, look no further. In THE ENGLISH ACADEMY, we carry out translations of a wide variety of documents in the following languages: English, Spanish, French, German, Italian and Mandarin.\n Should you require legal certification of your document after it has been translated, together with our lawyer, we can carry out this service for you.",
  },
  {
    image: Revision,
    title: "Text Revision and Correction",
    text: "We also do proofreading for you.",
    slug: slugify("Text Revision and Correction", { lower: true }),
    description:
      "THE ENGLISH ACADEMY also carries out work in the area of the correction and proofreading of texts and translations, such as CVs, published articles, websites and so on. Our meticulous scrutiny of each text ensures a high standard of quality is always maintained.",
  },
  {
    image: Abroad,
    title: "Organisation of Courses Abroad",
    text: "Always wanted to study abroad? Here's your chance.",
    slug: slugify("Organisation of Courses Abroad", { lower: true }),
    description:
      "Are you interested in studying abroad to improve your English?\n THE ENGLISH ACADEMY works with a number of reputable English language schools where you can choose to stay with a native host family or on campus, and participate in daily English lessons, activities and fun days out.\n The courses are suitable for all ages and levels and take place throughout the year but school students can also take a little time out of their summer holidays to have the experience of a lifetime.",
  },
  {
    image: Company,
    title: "Company Training",
    text: "We teach Business English and General English.",
    slug: slugify("Company Training", { lower: true }),
    description: "FIX",
  },
];
