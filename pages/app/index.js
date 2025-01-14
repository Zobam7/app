import Image from "next/image";
import { useState, useContext } from "react";
import DashNav from "../../components/dash/DashNav";
import DashHeader from "../../components/dash/DashHeader";
import { DashNavMobile } from "../../components/dash/DashNavMobile";
import DarkModeContext from "../../components/DarkModeContext";
import placeholder from "../../public/assets/dash/placeholder.svg";
import robotLight from "../../public/assets/dash/robotLight.svg";
import robotDark from "../../public/assets/dash/robotDark.svg";
import { withAuth } from "../../server/middlewares/auth.middleware";
import { profileService } from "./../../server/modules/social/profile.service";
import Link from "next/link";
import ProjectGllery from "../projects";
import ProjectGalleryProjectCard from "../../components/project/ProjectGalleryProjectCard";
import ProfileProjectCard from "../../components/project/ProfileProjectCard";
import Avatar from "../../components/Avatar";
import ProfileImg from "../../public/assets/TEST/profile.jpg";
import FeaturedPeople from "../../components/FeaturedPeople";
import ArrowIcon from "../../components/icons/Arrow";
import ScrapbookCard from "../../components/scrapbook/ScrapbookCard";
import { scrapbookService } from "../../server/modules/scrapbook/scrapbook.service";
import VerifiedIcon from "../../components/icons/VerifiedIcon";
export const bubbleTrimmer = (bubbles, start = 0, end = 0) => {
  return bubbles && bubbles.length > end ? bubbles.slice(start, end) : bubbles;
};

export default function Dash({ admin, name, projects, scrapbookItem, people }) {
  const { darkMode } = useContext(DarkModeContext);
  // ======= Tab state -->
  // TODO: Set top nav state
  const [openTab, setOpenTab] = useState(0);

  return (
    <div className="xs:grid xs:grid-cols-12 dark:bg-[#202020]">
      <div className="mxs:hidden col-span-1 mx-auto z-50 relative">
        <DashNav admin={admin} />
      </div>

      <div className="mxs:flex mxs:flex-col mxs:justify-between mxs:px-0 mxs:pt-4 dark:bg-[#202020] dark:text-white col-span-11 p-10   content-center min-w-full min-h-screen">
        <div className="xs:hidden">
          <DashHeader />
        </div>
        <div className="mxs:hidden flex items-center pb-5 fixed right-0 z-40  justify-center top-0 pt-10 w-full bg-white dark:bg-dark mx-auto">
          <div className="relative flex mx-auto items-center font-bold text-[#7D7D7D] space-x-2 xs:space-x-4 sm:space-x-4 md:space-x-6 lg:space-x-12 xl:space-x-16 xs:text-8px sm:text-10px text-12px md:text-14px lg:text-18px xl:text-24px 2xl:text-24px mr-2 xs:mr-4 lg:mr-12 xl:mr-16">
            <p
              className={
                openTab === 1
                  ? "transition-all cursor-pointer border-b-4 border-orange-peel text-black dark:text-white"
                  : " transition-all cursor-pointer border-b-4 border-transparent hover:border-orange-peel hover:text-black hover:dark:text-white"
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(1);
              }}>
              SCRAPBOOK
            </p>

            <p
              className={
                openTab === 2
                  ? "transition-all cursor-pointer border-b-4 border-orange-peel text-black dark:text-white"
                  : " transition-all cursor-pointer border-b-4 border-transparent hover:border-orange-peel hover:text-black hover:dark:text-white"
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(2);
              }}>
              PROJECTS
            </p>
            <p
              className={
                openTab === 3
                  ? "transition-all cursor-pointer border-b-4 border-orange-peel text-black dark:text-white"
                  : " transition-all cursor-pointer border-b-4 border-transparent hover:border-orange-peel hover:text-black hover:dark:text-white"
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(3);
              }}>
              PEOPLE
            </p>

            <p
              className={
                openTab === 4
                  ? "transition-all cursor-pointer border-b-4 border-orange-peel text-black dark:text-white"
                  : " transition-all cursor-pointer border-b-4 border-transparent hover:border-orange-peel hover:text-black hover:dark:text-white"
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(4);
              }}>
              JOBS
            </p>
          </div>
          <form className="bg-transparent flex items-center  dark:bg-transparent text-white dark:bg-white p-0 relative rounded-md  border-[#03A9F4] border-[3px] mx-2">
            <div className="absolute md:pl-2 pl-1 z-10 top-0 inset-y-0  flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 md:h-4 md:w-4 text-[#7D7D7D] flex items-center dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="I’m looking for..."
              className="flex  pl-8 md:pl-8 dark:bg-transparent rounded-lg  border-none p-0 m-0 py-1 text-8px sm:text-8px xs:text-8px  md:text-12px lg:text-14px xl:text-20px 2xl:text-24px dark:text-white text-black dark:placeholder:text-white outline-none "
            />
          </form>
          <div className=" pr-5">
            <DashHeader />
          </div>
        </div>
        {openTab === 0 && (
          <div className="text-center xs:mt-20">
            <h1 className="mxs:text-24px font-semibold text-42px -mt-3">
              Hey there, <span className="text-fruit-salad">{name}.</span>
            </h1>
            <div className="mx-auto -mt-2 xs:-mt-8">
              <Image src={placeholder} alt="" width={700} height={398} />
            </div>
            <div className="-mt-6 xs:-mt-14">
              <h1 className="mxs:text-24px text-48px -rotate-6">Welcome to</h1>
              <h1 className="mxs:text-26px text-48px font-semibold uppercase -mt-3">
                The Dynamics
              </h1>
            </div>
          </div>
        )}

        <div className=""></div>
        <div className=""></div>
        {openTab === 1 && (
          <div className="mt-20 text-center grid md:grid-cols-2 lg:grid-cols-3 pl-20">
            <div className="lg:col-span-2 text-left">
              {scrapbookItem.map((scrapbookItem, index) => {
                return (
                  <ScrapbookCard
                    key={index}
                    username={scrapbookItem.username}
                    userimg={scrapbookItem.userimg}
                    time={scrapbookItem.time}
                    text={scrapbookItem.text}
                    image={scrapbookItem.image}
                  />
                );
              })}
            </div>
            <div className="h-screen fixed right-0 lg:w-[27.6%] top-26 -mt-2 lg:col-span-1">
              <h1 className="font-semibold text-20px lg:text-16px xl:text-20px 2xl:text-22px text-left mb-2 ">
                Featured People
              </h1>
              <FeaturedPeople people={people} />
            </div>
          </div>
        )}
        {openTab === 0 && (
          <div className="mxs:w-[150px] fixed mxs:bottom-20 bottom-0 right-0 xs:pb-3 xs:pr-10 z-20 hover:scale-105 focus:scale-105 transition-all">
            <Image className="" src={darkMode ? robotDark : robotLight} alt="" />
          </div>
        )}

        {openTab === 2 && (
          <div className="mt-20 text-center grid grid-cols-3 pl-24">
            <div className="lg:col-span-2 text-left">
              {projects.map((project, index) => {
                return (
                  <ProfileProjectCard
                    key={index}
                    bubbles={project.bubbles}
                    date="ferbrary 28, 2020"
                    title="Web Scrapper"
                    likes={93}
                    image={project.image}
                    comments={27}
                    tags={bubbleTrimmer(project.tags, 0, 4)}
                    desc={project.desc}
                    tools={project.tools}
                  />
                );
              })}
            </div>
            <div className="h-screen fixed right-0 lg:w-[27.6%] top-26 -mt-2 lg:col-span-1">
              <h1 className="font-semibold text-20px lg:text-16px xl:text-20px 2xl:text-22px text-left mb-2 ">
                Featured People
              </h1>
              <FeaturedPeople people={people} />
            </div>
          </div>
        )}
      </div>
      <div className="xs:hidden">
        <DashNavMobile />
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const user = await withAuth(req => req.$user)(req, res);
  const profile = await profileService.getCompletedProfile(user.uniqueId);
  const scrapbook = await scrapbookService.getPostsByUser(user.uniqueId);
  // TODO: For the frontend team, change the methods of the scrapbook
  // A samle scrapbook post is shown below
  // [
  //   {
  //     _id: new ObjectId("6298a7cfb902506b6b2bdf33"),
  //     content: 'my profile picture design',
  //     images: [
  //       'https://cdn.discordapp.com/attachments/981880691543404565/981891597283258408/pdp.jpg'
  //     ],
  //     createdAt: 2022-06-02T12:06:39.424Z,
  //     author: { username: 'Test', image: undefined }
  //   }
  // ]
  return {
    props: {
      admin: false,
      name: profile.firstName,
      projects: [
        {
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
          date: "11:00 am, Today",
          title: "Web Scrapper",
          desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC A chrome extension that gathers vital information a the tap of a button, easy as ABC",
          image: "/assets/TEST/user_projects/img-1.png",
          comments: 22222,
          likes: 33333333,
          tags: ["NextJs", "Figma"],
          liked: true
        },
        {
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
          date: "11:00 am, Today",
          title: "Web Scrapper",
          desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
          image: "/assets/TEST/user_projects/img-1.png",
          comments: 22222,
          likes: 33333333,
          tags: ["NextJs", "Figma"],
          liked: true
        },
        {
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
          date: "11:00 am, Today",
          title: "Web Scrapper",
          desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
          image: "/assets/TEST/user_projects/img-1.png",
          comments: 22222,
          likes: 33333333,
          tags: ["NextJs", "Figma"],
          liked: true
        },
        {
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
          date: "11:00 am, Today",
          title: "Web Scrapper",
          desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
          image: "/assets/TEST/user_projects/img-1.png",
          comments: 22222,
          likes: 33333333,
          tags: ["NextJs", "Figma"],
          liked: true
        },
        {
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
          date: "11:00 am, Today",
          title: "Web Scrapper",
          desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
          image: "/assets/TEST/user_projects/img-1.png",
          comments: 22222,
          likes: 33333333,
          tags: ["NextJs", "Figma"],
          liked: true
        }
      ],
      scrapbookItem: [
        {
          username: "Zach Latta",
          userimg: "/assets/TEST/profile.jpg",
          time: "12:00 pm",
          text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Thanks to @Eni4sure for the help in #coding-help today
            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, https://fakwebsite.com/1234/lie discovered the undoubtable source. Lorem Ipsum comes 
            
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "D'phenomnal",
          userimg: "/assets/TEST/profile.jpg",
          time: "2:30pm",
          text: `Earliert today @Elytgy, @Bonsai and I created this wordle game clone together in #game-dev 
            we only changed this small code 
            in the footer and we kinda duplicated this too
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Bill Gates",
          userimg: "/assets/TEST/profile.jpg",
          time: "3:15pm",
          text: `Can’t believe I just got into MIT btw, guess who has a date with Elon Musk later today.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Bella See",
          userimg: "/assets/TEST/profile.jpg",
          time: "6:15pm",
          text: `Can’t believe I just got into MIT btw, guess who has a date with Elon Musk later today.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Elytgy",
          userimg: "/assets/TEST/profile.jpg",
          time: "7:00 pm",
          text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Thanks to @Eni4sure for the help in #coding-help today

            
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Elytgy",
          userimg: "/assets/TEST/profile.jpg",
          time: "7:00 pm",
          text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Thanks to @Eni4sure for the help in #coding-help today

            
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Zach Latta",
          userimg: "/assets/TEST/profile.jpg",
          time: "8 :03pm",
          text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.

            I've always been kind of intimidated by hardware and am really proud of myself for getting this done! + bonus sunset picture from tonight.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Zach Latta",
          userimg: "/assets/TEST/profile.jpg",
          time: "8 :03pm",
          text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.

            I've always been kind of intimidated by hardware and am really proud of myself for getting this done! + bonus sunset picture from tonight.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Zach Latta",
          userimg: "/assets/TEST/profile.jpg",
          time: "8 :03pm",
          text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },

        {
          username: "Zach Latta",
          userimg: "/assets/TEST/profile.jpg",
          time: "8 :03pm",
          text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.

            I've always been kind of intimidated by hardware and am really proud of myself for getting this done! + bonus sunset picture from tonight.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Zach Latta",
          userimg: "/assets/TEST/profile.jpg",
          time: "8 :03pm",
          text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.

            I've always been kind of intimidated by hardware and am really proud of myself for getting this done! + bonus sunset picture from tonight.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Zach Latta",
          userimg: "/assets/TEST/profile.jpg",
          time: "8 :03pm",
          text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.

            I've always been kind of intimidated by hardware and am really proud of myself for getting this done! + bonus sunset picture from tonight.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        }
      ],
      people: [
        {
          id: 0,
          username: "Belle See",
          roles: "Founder, CommandTech",
          image: "/assets/TEST/people-1.png",
          verified: true,
          following: true
        },
        {
          id: 1,
          username: "Ibrahim Salami",
          roles: "Software Engineer, Meta",
          image: "/assets/TEST/people-2.png",
          verified: false,
          following: false
        },
        {
          id: 2,
          username: "Dora Palfi",
          roles: "Founder, ImagiLabs",
          image: "/assets/TEST/people-3.png",
          verified: false,
          following: false
        },
        {
          id: 3,
          username: "Dev Agrawal",
          roles: "Senior Software Engineer",
          image: "/assets/TEST/people-4.png",
          verified: true,
          following: false
        },
        {
          id: 4,
          username: "Melinda Gates",
          roles: "Jeff Bezos’s Ex-wife",
          image: "/assets/TEST/people-1.png",
          verified: false,
          following: false
        },
        {
          id: 5,
          username: "Dev Agrawal",
          roles: "Senior Software Engineer",
          image: "/assets/TEST/people-4.png",
          verified: true,
          following: false
        }
      ]
    }
  };
}
