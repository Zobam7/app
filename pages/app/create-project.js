import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import DashNav from "../../components/dash/DashNav";
import DarkModeToggle from "../../components/DarkModeToggle";
import TextEditor from "../../components/editor/TextEditor";
import showdownConverter from "../../components/showdownConverter";
import LinkIcon from "../../components/icons/Link";
import UploadIcon from "../../components/icons/Upload";
import SearchIcon from "../../components/icons/Search";
import GitHubIcon from "../../components/icons/Github";
import FigmaIcon from "../../components/icons/Figma";
import AdobeIcon from "../../components/icons/Adobe";
import NotificationsLink from "../../components/dash/NotificationsLink";
import Select, { components } from 'react-select';
import { Icon } from '@iconify/react';

export default function CreateProject({ recaptchaSitekey, choices, unread }) {
  // TODO: Work on adding colloborators
  const handleSubmission = () => {

  }

  // Multiple Select Functions
  const options = [
    { value: 'Developer', label: 'Developer' },
    { value: 'Founder', label: 'Founder' },
    { value: 'Student', label: 'Student' },
    { value: 'Designer', label: 'Designer' },
  ];
  const options2 = [
    { value: 'TypeScripts', label: 'Typescripts' },
    { value: 'Python', label: 'Python' },
    { value: 'React', label: 'React' },
    { value: 'Robotics', label: 'Robotics' },
    { value: 'Angular', label: 'Angular' },
  ];
  const styles = {
    control: (provided) => ({
      ...provided,
      border: 0,
      outline: "none",
      boxShadow: "none"
    }),
    option: (provided, state) => ({
      ...provided,
      "&:hover" : {
        backgroundColor : "#03A9F4",
        color: "white",
      },
      padding : 3
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor:" #03A9F4",
        color: 'white',
      },
    }),
  }
  const CaretDownIcon = () => {
    return <Icon icon="bxs:down-arrow" color="#8a8a8a" width={15} height={20} inline={true} />;
  };
  
  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    );
  };

  const [name, setName] = useState("");
  const updateName = e => {
    let newName = e.target.value;
    if (newName.split(" ").length <= 3) {
      setName(newName);
    }
  };

  const [image, setImage] = useState({
    desc: "No image uploaded.",
    image: null
  });
  const updateImage = e => {
    // Read image from file
    const file = event.target.files[0];
    if (file.type.startsWith("image")) {
      // Image can be read
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImage({
          desc: "Image uploaded successfully.",
          image: reader.result
        });
        console.log(reader.result);
      });
      reader.addEventListener("error", () =>
        setImage({
          desc: "Error uploading image.",
          image: null
        })
      );
      reader.readAsDataURL(file);
    } else {
      // Not an image
      setImage({
        desc: "File uploaded is not an image.",
        image: null
      });
    }
  };

  const [description, setDescription] = useState("");
  const updateDescription = val => {
    setDescription(showdownConverter.makeMarkdown(val));
    console.log(showdownConverter.makeMarkdown(val));
  };

  const [technologies, setTechnologies] = useState(new Set());
  const removeTechnology = val => {
    let arr = Array.from(technologies);
    arr.splice(arr.indexOf(val), 1);
    setTechnologies(new Set(arr));
  };

  const [links, setLinks] = useState({
    github: "",
    figma: "",
    adobe: "",
    others: []
  });

  async function save(e) {
    // TODO: Handle submission
    event.preventDefault();
    const formData = new FormData(e.target);
    // name : use name
    // image : use image.image (BLOB)
    // description : use description (Markdown)
    // technologies : use technologies, loop through it
    // project stage : use formData.get("stage")
  }

  async function publish(e) {
    event.preventDefault();
    const formData = new FormData(e.target);
    if (!name.length) {
      // No name provided
    } else if (!image.image) {
      // No image provided
    } else if (!description.length) {
      // No description
    } else if (!technologies.length) {
      // No technologies
    } else if (!formData.get("stage")) {
      // No stage of development
    } else {
      // TODO: Handle submission - check for ReCAPTCHA
    }
  }

  return (
    <div className="grid grid-cols-12 dark:bg-[#202020]">
      <div className="col-span-1 mx-auto">
        <DashNav active="/personal-projects" />
      </div>
      <div className="dark:bg-[#202020] dark:text-white col-span-11 pl-32 pt-10 pr-10 content-center min-w-full min-h-screen">
        <header className="flex items-center justify-center pb-10">
          <h1 className="mx-auto font-semibold text-42px">Projects</h1>
          <div className="text-right flex items-end justify-end  mt-3">
            <DarkModeToggle className="h-[30px]" darkClassName="h-[30px]" />
            <Link href="/app/notifications">
            <NotificationsLink className="h-[25px]" unread={unread}/>
            </Link>
          </div>
        </header>
        <hr className="mb-5 border-t-[1.4px] border-solid border-[#C9C9C9]"/>
        <section className="pt-7 px-7">
          <p className="text-center">
            Here you can share all the cool things you’re making and launching with The Dynamics
            Community, and beyond!
          </p>
          <form className="bg-transparent dark:bg-transparent pl-0" onSubmit={handleSubmission}>
            <section className="mb-5">
              <div>
                <label className="subheadline" htmlFor="name">
                  Project Name
                  <span className="text-[#ff0000]">*</span>
                </label>
                <input
                  autoComplete="off"
                  className="form-input mb-1"
                  id="name"
                  placeholder="Describe your project in one or two words"
                  onChange={updateName}
                  type="text"
                  value={name}
                />
                <label className="font-bold italic text-[#A5A5A5]">Max 3 words</label>
              </div>
            </section>
            <section className="mb-14">
              <label className="subheadline">
                Project Picture
                <span className="text-[#ff0000]">*</span>
              </label>
              <div className="border-orange-peel border-4 mx-14 my-4 p-14 rounded-md text-center">
                <label
                  className="cursor-pointer button-medium button-deep-sky-blue mx-auto w-fit"
                  htmlFor="picture">
                  <span className="mr-1">
                    <UploadIcon width={20} height={20} />
                  </span>
                  Upload a picture
                </label>
                <input className="hidden" id="picture" onChange={updateImage} type="file" />
                <label>{image.desc}</label>
              </div>
            </section>
            <section className="mb-5">
              <div>
                <label className="subheadline" htmlFor="name">
                  Description
                  <span className="text-[#ff0000]">*</span>
                </label>
                <TextEditor onUpdate={updateDescription} />
                <label className="font-bold italic text-[#A5A5A5]">
                  Tell us more about this project, a typical description talks about what it does,
                  how it works, how it was built, some challenges encountered during the process, or
                  future plans for it, 3000 characters max.
                </label>
              </div>
            </section>
            <h2 className="mb-5 subheadline">
              Technology/tools used or project domain<span className="text-[#ff0000]">*</span>
            </h2>
            
            <section className="mb-5">
              <div className="mb-4">
                <Select
                className="form-select p-1 m-0 rounded-lg"
                  styles={styles}
                  components={{ DropdownIndicator }}
                  isMulti
                  options={options2}
                />
              </div>
            
              {/* <div className="form-input flex flex-wrap gap-2 relative z-[2] min-h-[47px]">
                {Array.from(technologies).map((value, key) => (
                  <button
                    className="bg-[#E6E6E6] border border-[#442929] cursor-default inline-flex gap-x-4 items-center justify-between px-3 rounded text-15px h-fit"
                    key={key}>
                    <span className="pt-0.5">{value}</span>
                    <span className="cursor-pointer" onClick={() => removeTechnology(value)}>
                      &times;
                    </span>
                  </button>
                ))}
                <select
                  className="absolute top-0 right-2 col-span-1 form-select bg-transparent border-0 text-transparent w-fit z-[1]"
                  id="personalDescription">
                  {choices.technologies.map((value, key) => (
                    <option
                      className="text-black"
                      key={key}
                      onClick={event =>
                        setTechnologies(new Set([...technologies, event.target.value]))
                      }
                      value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div> */}
              <label className="font-bold italic text-[#A5A5A5]">
                Select in order of relevance, the first four will be displayed on the project
                preview page.
              </label>
            </section>
            <h2 className="mb-5 subheadline">
              Project development stage<span className="text-[#ff0000]">*</span>
            </h2>
            <section className="mb-5">
              <select className="form-input form-select" name="stage">
                {choices.stages.map((value, key) => (
                  <option key={key} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <label className="font-bold italic text-[#A5A5A5]" htmlFor="choices">
                Tell us about the current state of this project, e.g beta, feature update,
                completed, bug fixes, etc.
              </label>
            </section>
            <h2 className="mb-5 subheadline">
              Project links<span className="text-[#ff0000]">*</span>
            </h2>
            <section className="mb-5">
              <div className="form-input">
                <div className="flex flex-col gap-y-6 items-center w-fit mb-4">
                  <style jsx>{`
                    .default-input::-webkit-input-placeholder {
                      color: black;
                    }

                    .default-input:-moz-placeholder {
                      color: black;
                      opacity: 1;
                    }

                    .default-input::-moz-placeholder {
                      color: black;
                      opacity: 1;
                    }

                    .default-input:-ms-input-placeholder {
                      color: black;
                    }

                    .default-input::-ms-input-placeholder {
                      color: black;
                    }

                    .default-input::placeholder {
                      color: black;
                    }
                  `}</style>
                  <div className="inline-flex gap-x-2 items-center">
                    <GitHubIcon width={39.17} height={38.22} />
                    <input
                      className="default-input bg-[#E6E6E6] border border-[#442929] focus:outline-none m-0 px-2 py-0.5 rounded text-15px h-fit"
                      placeholder="GitHub..."
                      type="text"
                    />
                  </div>
                  <div className="flex items-center gap-x-5">
                    <FigmaIcon width={22.67} height={34}/>
                    <input
                      className="default-input bg-[#E6E6E6] border border-[#442929] focus:outline-none m-0 px-2 py-0.5 rounded text-15px "
                      placeholder="Figma..."
                      type="text"
                    />
                  </div>
                  <div className="inline-flex gap-x-2 items-center">
                    <AdobeIcon width={39} height={38.03} />
                    <input
                      className="default-input bg-[#E6E6E6] border border-[#442929] focus:outline-none m-0 px-2 py-0.5 rounded text-15px"
                      placeholder="AdobeXD..."
                      type="text"
                    />
                  </div>
                  <div className="inline-flex gap-x-2 items-center">
                    <LinkIcon fill="#FF9700" width={39.17} height={19.58} />
                    <input
                      className="focus:outline-none"
                      placeholder="Enter other links..."
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <label className="font-bold italic text-[#A5A5A5]">Max of 3 please.</label>
            </section>
            <section className="text-center">
              <ReCAPTCHA
                className="inline-block mb-3"
                sitekey={recaptchaSitekey}
                onChange={i => console.log(i)}
              />
              <div className="flex items-center justify-center gap-x-16">
                <button className="button-medium button-orange-peel" type="submit">
                  Save for later
                </button>
                <button className="button-medium button-deep-sky-blue" type="submit">
                  Publish now
                </button>
              </div>
            </section>
          </form>
        </section>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // TODO: Update with technologies from database
  return {
    props: {
      recaptchaSitekey: process.env.RECAPTCHA_SITEKEY,
      unread: true,
      choices: {
        technologies: ["TypeScript", "Python", "Robotics"],
        stages: [
          "Alpha",
          "Beta",
          "Feature update",
          "Completed",
          "Bug fixes",
          "In development",
          "Other"
        ]
      }
    }
  };
}