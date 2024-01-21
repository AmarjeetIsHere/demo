import logo from "../logo.svg";
import "../App.css";
import instagram from "../instagram.png";
import twitter from "../twitter.png";
import youtube from "../youtube.png";
import facebook from "../facebook.png";
import pic from "../AmarjeetPic.jpg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
// import photo from "./photo3.webp";

function Home() {
  // const [data, setData] = useState({});

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[6789]\d{9}$/, "Invalid phone number")
      .required("Phone is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  // function handleChange(e) {
  //   console.log(data);
  //   setData({ ...data, [e.target.name]: e.target.value });
  // }

  async function handleSubmit(values, actions) {
    try {
      const res = await axios.post(
        "http://localhost:4000/media/contact",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res) {
        toast.success("Your Message Recieved");
        actions.resetForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  }

  function scrollToSection(target) {
    const targetElement = document.querySelector(target);
    console.log(target);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;

      // Scroll smoothly to the target section
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="App">
      <div
        id="navbar"
        className="nav mb-[2px] flex justify-between drop-shadow-md"
      >
        <div className="flex items-center">
          <img className="logo" src={logo} alt="logo"></img>
          {/* <a className="font-semibold text-[#5d0f91]">Name</a> */}
          <span
            onClick={() => {
              scrollToSection("#about");
            }}
            className="font-semibold text-[#5d0f91]"
          >
            Name
          </span>
        </div>
        <div className="flex items-center justify-between mr-2 anch w-auto">
          {/* <a href="/contact" className="text-color-purple">
            Home
          </a>
          <a href="/contact">About Us</a>
          <a href="/contact">Shop Now</a>
          <a href="/contact">Get Involved</a> */}
          <span className="text-color-purple">Home</span>
          <span>About Us</span>
          <span>Shop Now</span>
          <span>Get Involved</span>
          <button className="py-1 text-[#5d0f91] font-medium border-2 border-solid border-[#5d0f91] rounded px-2">
            Sign Up
          </button>
        </div>
      </div>
      <div id="photo" className="photo flex items-center">
        <div className="ml-[5rem]">
          <p className="t1">BlossomBoost</p>
          <p className="t2">
            Amplify Your Impact with a Bouquet of Likes and Flowers!
          </p>
          <p className="t3">Know More</p>
        </div>
      </div>
      <div id="social" className="social flex">
        <div className="social-container">
          <img src={instagram} alt="instagram"></img> <label>Instagram</label>
        </div>
        <div className="social-container">
          <img src={facebook} alt="facebook"></img> <label>Facebook</label>
        </div>
        <div className="social-container">
          <img src={youtube} alt="youtube"></img> <label>Youtube</label>
        </div>
        <div className="social-container">
          <img src={twitter} alt="twitter"></img> <label>Twitter</label>
        </div>
      </div>
      <div id="profile" className="profile-container">
        <div className="pb-[5rem] text-6xl mb-10">
          {" "}
          Top Profile Of This Week
        </div>
        <div className="profile flex">
          <div>
            <img src={pic} alt="amar"></img>
            <p className="text-larger mb-1">
              <strong>Amarjeet Mallah</strong>
            </p>
            <p className="mb-3">29K</p>
          </div>
          <div>
            <img src={pic} alt="amar"></img>
            <p className="text-larger mb-1">
              <strong>Amarjeet Mallah</strong>
            </p>
            <p className="mb-3">32K</p>
          </div>
          <div>
            <img src={pic} alt="amar"></img>
            <p className="text-larger mb-1">
              <strong>Amarjeet Mallah</strong>
            </p>
            <p className="mb-3">40K</p>
          </div>
        </div>
      </div>
      <div id="photo2" className="photo2 flex items-center">
        <div className="ml-[5rem]">
          <p className="tn1">About Us</p>
          <p className="tn2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="tn3">Know More</p>
        </div>
      </div>
      <div id="profile2" className="profile-container2">
        <div className="pb-[5rem] text-6xl"> Plan</div>
        <div className="profile2 flex">
          <div>
            <p>500/month</p>
            <button className="bg-indigo-600 rounded-md py-3 px-8 text-white">
              Select
            </button>
          </div>
          <div>
            <p>800/month</p>
            <button className="bg-indigo-600 rounded-md py-3 px-8 text-white">
              Select
            </button>
          </div>
          <div>
            <p>1k/month</p>
            <button className="bg-indigo-600 rounded-md py-3 px-8 text-white">
              Select
            </button>
          </div>
          <div>
            <p>2k/month</p>

            <button className="bg-indigo-600 rounded-md py-3 px-8 text-white">
              Select
            </button>
          </div>
        </div>
      </div>

      <div id="contact" className="contact">
        <div className="text-2xl font-semibold">Contact Us</div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="form-div mt-10 space-around">
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" id="name" />
            </div>
            <ErrorMessage
              name="name"
              component="div"
              className="error-message error"
            />

            <div className="form-div mt-10">
              <label htmlFor="email">E-Mail:</label>
              <Field type="email" name="email" id="email" />
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="error-message error"
            />

            <div className="form-div mt-10">
              <label htmlFor="phone">Phone:</label>
              <Field type="tel" name="phone" id="phone" />
            </div>
            <ErrorMessage
              name="phone"
              component="div"
              className="error-message error"
            />

            <div className="form-div mt-10">
              <label htmlFor="message">Your Message:</label>
              <Field
                as="textarea"
                name="message"
                id="message"
                className="w-[40vw] txtarea "
              />
            </div>
            <ErrorMessage
              name="message"
              component="div"
              className="error-message error"
            />

            <button className="mt-5" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>

      <div id="about" className="about">
        <div className="flex">
          <div className="mt-10">
            <img
              style={{ margin: "40px", height: "50px" }}
              src={logo}
              alt="logo"
            ></img>
            <p className="text-3xl">Name</p>
          </div>
          <div>
            <div className="text-3xl">Contact Us</div>
            <div className="flex flex-col items-start w-[200px] ">
              <div className="mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="mt-6">+91-0000000000</div>
              <div className="mt-6">https://www.influencer.in/</div>
            </div>
          </div>
          <div className="">
            <div className="text-3xl">Quick Links</div>
            <div className="flex flex-col">
              <div className="mt-6"> Home </div>
              <div className="mt-6">About Us</div>
              <div className="mt-6">Shop Now</div>
              <div className="mt-6">Get Involved</div>
            </div>
          </div>
          <div>
            <div className="text-3xl">Follow Us</div>
            <div className="flex mt-6">
              <img src={instagram} alt="instagram"></img>
              <img src={facebook} alt="facebook"></img>
              <img src={twitter} alt="twitter"></img>
            </div>
          </div>
        </div>
        <div>Design by World Tech Solutions and Build by Amarjeet</div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
