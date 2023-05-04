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
    text: "From Young Learners to C2 Profiency.",
    slug: slugify("Cambridge Exam Preparation", { lower: true }),
    description: "The University of Cambridge exams can serve as a crucial stepping stone for those seeking to study or work abroad. Recognized as proof of English language proficiency, these exams are taken by thousands of people each year in over 135 countries. At THE ENGLISH ACADEMY, we offer all levels of the Cambridge exams, from Young Learners to C2 Proficiency, and conduct exams year-round to help our students achieve their goals.",
  },
  {
    image: School,
    title: "School Tutorials",
    text: "Improve your school grades with us!",
    slug: slugify("School Tutorials", { lower: true }),
    description:
      "In the event that you are encountering difficulties with your academic pursuits or aspire to enhance your academic performance, THE ENGLISH ACADEMY is at your disposal to provide comprehensive assistance. We provide top-tier tutoring services for all grade levels, regardless of the complexity of your academic obstacles.",
  },
  {
    image: Early,
    title: "Early Years English",
    text: "Start learning young. For children from 3-6 years of age.",
    slug: slugify("Early Years English", { lower: true }),
    description:
      "At The English Academy, we understand the undeniable advantages of starting foreign language education at an early age, ideally between infancy to approximately 10 years old. In fact, studies show that children who begin language acquisition during this critical period are more likely to attain native-like proficiency. The plasticity of a young child's developing brain allows for the effortless absorption and replication of new phonemes, resulting in accurate pronunciation and intonation. While it's true that one can achieve fluency at any age, it does require more dedication and diligence as we mature. That's why we have curated our Early Years English courses for children between the ages of 3 and 6 to give them the best possible start in their language learning journey.",
  },
  {
    image: General,
    title: "General English",
    text: "For adult students wanting to improve their English.",
    slug: slugify("General English", { lower: true }),
    description:
      "Whether you're embarking on your English language journey or seeking to enhance your existing proficiency, a general English course could be the ideal solution for you. At THE ENGLISH ACADEMY, we provide a comprehensive range of courses in general English that cater to learners of all ages and levels. We offer customized options for individual students who require a personalized curriculum or group sessions that enable you to engage with fellow learners and practice your language skills in a collaborative environment.",
  },
  {
    image: Pt,
    title: "Portuguese for Foreigners",
    text: "Moved to Portugal? Let us help you learn the language!",
    slug: slugify("Portuguese for Foreigners", { lower: true }),
    description:
      "For expats residing in Portugal who face difficulties in mastering the Portuguese language, THE ENGLISH ACADEMY presents a viable solution. Whether you are seeking to initiate your language learning journey or elevate your existing proficiency, we offer top-notch instruction from experienced teachers who can provide personalized guidance every step of the way. Let us help you surmount linguistic barriers and develop the skills you need to thrive in your new home.",
  },
  {
    image: Other,
    title: "Other Language Courses",
    text: "Looking for another language? We've got you covered.",
    slug: slugify("Other Language Courses", { lower: true }),
    description:
      "At THE ENGLISH ACADEMY, we acknowledge the significance of not just English, but also the multitude of other languages spoken worldwide. To that end, we provide access to a team of accomplished instructors who can guide you in your pursuit of mastering a number of languages. In addition, we offer translation services for documents, ensuring that you can communicate effectively across cultures and borders. Whether you're looking to broaden your linguistic horizons or seeking to convey your message accurately, we are here to assist you every step of the way.",
  },
  {
    image: Translation,
    title: "Translations and Certification",
    text: "We can translate and certify your texts and documents.",
    slug: slugify("Translations and Certification", { lower: true }),
    description:
      "If you work with international clients and require translation services for your documents or seek to expand your business's reach through an English version of your website, THE ENGLISH ACADEMY has got you covered. Our expert translators are fluent in a diverse range of languages, including English, Spanish, French, German, Italian, and Mandarin, and are proficient in accurately conveying the nuances of meaning. We can also provide legal certification for your documents post-translation, in collaboration with our in-house legal expert. Let us help you communicate effectively and efficiently with your global clientele.",
  },
  {
    image: Revision,
    title: "Text Revision and Correction",
    text: "Let us proofread your official texts and documents.",
    slug: slugify("Text Revision and Correction", { lower: true }),
    description:
      "At THE ENGLISH ACADEMY, we offer a range of services in the field of text correction and proofreading, including but not limited to CVs, published articles, and websites. Our meticulous approach to examining every text guarantees that we maintain a high standard of quality and accuracy in all our work. Whether you are a student seeking to refine your academic writing or a professional aiming to enhance your business communications, our team of experts is dedicated to ensuring that your message is conveyed effectively and with precision.",
  },
  {
    image: Abroad,
    title: "Courses Abroad",
    text: "Always wanted to study abroad? Here's your chance.",
    slug: slugify("Courses Abroad", { lower: true }),
    description:
      "If you're seeking to improve your English proficiency by studying abroad, THE ENGLISH ACADEMY can help you access a range of prestigious English language schools. You can opt to stay with a native host family or reside on campus while participating in daily English language lessons, engaging in various activities, and enjoying exciting outings. Our courses cater to learners of all ages and proficiency levels and are offered throughout the year. Moreover, school students can also take advantage of this opportunity during their summer break, embarking on a life-changing adventure while enhancing their language skills.",
  },
  {
    image: Company,
    title: "Company Training",
    text: "We offer on site, personalised training courses.",
    slug: slugify("Company Training", { lower: true }),
    description: "In today's globalized business world, effective communication in a foreign language is crucial for building successful relationships with external markets. At THE ENGLISH ACADEMY, our business courses offer participants the opportunity to improve their verbal and written skills, expand their technical vocabulary, and develop their ability to communicate confidently in different contexts.\nWe understand that every company is unique, which is why we provide tailored classroom or online course solutions to meet the specific training needs and commercial objectives of each organization. Our services include conducting evaluations to diagnose training requirements, designing courses aimed at achieving specific goals, and monitoring and evaluating progress to ensure desired outcomes are achieved.",
  },
];
