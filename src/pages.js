import {
  CalendarCheck2,
  IdCard,
  House,
  BetweenHorizontalStart,
  ShoppingCart,
  CircleUserRound,
  LayoutPanelTop,
  ListPlus,
  Shapes,
  FileText,
  Coins,
  MessagesSquare,
  CloudSun,
  Users,
  LogIn,
  Wallet,
} from "lucide-react";

import { TbShoppingCart, TbChecklist } from "react-icons/tb";

const pages = [
  {
    link: "houseCards",
    caption: "House Cards",
    icon: House,
  },
  {
    link: "tabs",
    caption: "Tab Component",
    icon: BetweenHorizontalStart,
  },
  {
    link: "eventCountdown",
    caption: "Event Countdown",
    icon: CalendarCheck2,
  },
  {
    link: "shoppingList",
    caption: "Shopping List",
    icon: TbShoppingCart,
  },
  {
    link: "profileCard",
    caption: "Profile Card",
    icon: IdCard,
  },
  {
    link: "avatar",
    caption: "Avatars",
    icon: CircleUserRound,
  },
  {
    link: "navBar",
    caption: "Navigation Bar",
    icon: LayoutPanelTop,
  },
  {
    link: "accordion",
    caption: "Accordion",
    icon: ListPlus,
  },
  {
    link: "checkout",
    caption: "Checkout",
    icon: TbChecklist,
  },
  {
    link: "weather",
    caption: "Weather",
    icon: CloudSun,
  },
  {
    link: "caseStudyHeader",
    caption: "Case Study Header",
    icon: FileText,
  },
  {
    link: "pricing",
    caption: "Pricing Cards",
    icon: Coins,
  },
  {
    link: "userFeedback",
    caption: "User Feedback",
    icon: MessagesSquare,
  },
  {
    link: "loginSignup",
    caption: "Log in / Sign up",
    icon: LogIn,
  },
  {
    link: "moneyFormat",
    caption: "Money format",
    icon: Wallet,
  },
];

export default pages;
