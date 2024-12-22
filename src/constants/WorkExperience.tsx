import { iconMap } from "../utils/iconsMap";

export const workExperience = [
  {
    companyName: 'Tekion',
    companyLogo: <img src={iconMap.tekion} alt=""/>,
    timeline: '10/2020 - 05/2024',
    designation: 'Lead Software Engineer - Frontend',
    projects: [
      {
        projectName: 'Support Portal - Developer and Lead',
        techStack: ['react', 'redux', 'typescript', 'antd', 'jest', 'rtl', 'go', 'mongo'],
        projectExp: [
          <> <b>Led a team of six to build the support ecosystem of our Dealer Management System </b> from the ground up with following features - Live Chat, Ticketing portal for agents and customer tracking with SLA integration, Rule Engine, Macros, Mass Communication for updates / outages, Escalation handling, Shortcuts, Parallel ticket updates, Support Bot, KB Integration and automatic Chat routing.</>,
          <>Worked on bringing in <b>Live Chat between end user and the agent into the product using Pusher JS for socket connections </b> along with <b>screen share with Open Replay libraries</b> and <b>integrated calls </b> within the product with Twilio library.</>,
          <> <b>Enhanced the average first response time to {'<2s'} </b> for 90% of the tickets by implementing <b>Shortcuts and enabling keyboard only navigation </b> for agents to quickly move to common flows like adding replies, move to common statuses, submit field updates.</>,
          <> <b>Improved initial load speed by ~1s </b> throughout the app by delaying the loading of components until they are needed on the window.</>,
          <>Replaced the Zendesk suite (#1 helpdesk software) within the organization with this product along with many configurable customizations that helped improve user sentiment & CSAT and <b>saved ~1 million USD per year on subscriptions.</b></>,
          <> <b>Facilitated agile development process </b> by implementing daily scrum within my team, conducted code reviews to improve the code quality, mentored them regularly to own stories and <b>brought up 2 junior engineers to senior level</b> & helped them co-lead modules.</>
        ]
      },
      {
        projectName: 'Task Management - Developer',
        techStack: ['react', 'redux', 'antd', 'jest', 'rtl', 'go', 'mySQL'],
        projectExp: [
          <>Built a Project Management product with status workflows, Trello boards, templates, calendar view to track various teams’ use from Engineering’s project boards, Business’ template driven boards to Feature Tracker used by clients to raise feature requests.</>,
          <>Replaced Asana & Jira within the organization using this product <b>saving ~30,000 USD / month on subscriptions </b> and helped in automating business flows into the product like auto assigning Assignee / Priority for the customer requests based on CSAT score.</>,
          <><b>Improved site load time by ~1.5s</b>, smooth loading of tasks (for {`>40K`} tasks) by implementing <b>windowing and caching loaded tasks.</b></>,
          <>Brought in documents inside the product for adding release sequences & notes with real-time, parallel updates using the Yjs library, Prosemirror editor and <b>replaced the use of Confluence within the organization saving ~10,000 USD / month in subscriptions.</b></>
        ]
      }
    ]
  },
  {
    companyName: 'Sirius Computer Solutions',
    companyLogo: <img src={iconMap.sirius} alt=""/>,
    timeline: '06/2017 - 09/2020',
    designation: 'Frontend Engineer',
    projects: [
      {
        projectName: 'Commerce Store Web Development - Frontend Engineer',
        techStack: ['jsp', 'jquery', 'contentful', 'java', 'websphere_commerce'],
        projectExp: [
          <> Developed an e-commerce web application and dynamic contents (eSpots) with responsive design and a mobile first approach for a leading American Fortune 500 clothing and apparels company that owns several top brands across the globe.</>,
          <> <b>Improved site load time by ~0.5s</b> by lazy loading the images as they come into view and using responsive images based on screen sizes.</>,
          <> <b>Increased and maintained the site ARIA accessibility score to above 90 (Lighthouse report)</b> by implementing keyboard only navigation from start to finish, adding alt tags & aria-labels for non-semantic elements, descriptive titles & labels, avoiding auto play or auto navigation.</>
        ]
      },
      {
        projectName: 'React Web Application - Full Stack Developer',
        techStack: ['react', 'redux', 'typescript', 'next', 'material', 'node', 'mongo', 'jest', 'rtl', 'mocha'],
        projectExp: [
          <>Developed a responsive web application for a Fortune 10 retail corporation to initiate ad campaigns, review the results with dashboard / graph views and assess ideas that are submitted via portal and various social media platforms like Meta Workplace and Slack.</>,
          <> Streamlined the ad campaign idea submission process through the website and replaced client’s Google forms approach and introduced comment interactions to improvise / share opinions and reactions / upvotes to the submissions to support the approval of the idea.</>,
          <> <b>Improved and maintained the performance score above 60 (Lighthouse)</b> as a minimum requirement as per client’s standards.</>
        ]
      },
      {
        projectName: 'React Native mobile application development - Frontend Engineer',
        techStack: ['reactNative', 'react', 'material', 'redux', 'node', 'mongo'],
        projectExp: [
          <>Built a mobile application from the ground up to create, manage and accept registrations for events and sessions, along with detailed schedules for a major annual technical event. Built a web application as an admin portal for organizers to create and manage sessions.</>,
          <>This app includes <b>native features integration (camera)</b> to scan QR codes from the application to check in / view more about the session.</>
        ]
      },
      {
        projectName: 'Frontend Revamp - Frontend Engineer',
        techStack: ['dojo', 'jquery', 'material', 'websphere_portal'],
        projectExp: [
          <> Implemented complete revamp for a U.S.-based, state-licensed, private health insurance company and migrated from Dojo to jQuery.</>,
          <> <b>Increased the overall site speed across pages by ~1s </b> by replacing libraries as jQuery is lightweight compared to Dojo.</>
        ]
      }
    ]
  }
]