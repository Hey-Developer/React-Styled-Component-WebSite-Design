import svg1 from "../../images/svg-1.svg";
import svg2 from "../../images/svg-2.svg";
import svg3 from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited transactions with zero Fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged my fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: svg1,
  alt: `Car`,
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Earn upto 2% interest on Saving Accounts",
  description:
    "Now save your money by earning interest on your saving accounts and take out whenever you need them.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: svg2,
  alt: `Piggy Bank`,
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join out Team",
  headline: "Creating an account is extremely easy",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is your information and you're ready to go.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: svg3,
  alt: `Paper`,
  dark: false,
  primary: false,
  darkText: true,
};
