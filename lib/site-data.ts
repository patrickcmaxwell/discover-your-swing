export const bookingUrl = "https://app.coachnow.io/facility/5b397090a11de411b44f8e3bd3/coach/christie-quinn/e6d1fb405a3a0138dcd052b26c3d04b2";
export const email = "quinn@discoveryourswing.com";
export const phone = "508-330-6731";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Discover Us" },
  {
    href: "/performance-coaching",
    label: "Performance Coaching",
    children: [
      { href: "/junior-golf", label: "Junior Golf" },
      { href: "/adult-coaching", label: "Adult Coaching" },
      { href: "/performance-coaching", label: "Player Performance Coaching" },
    ],
  },
  { href: "/videos", label: "DYS Videos" },
  { href: "/gift-cards", label: "Gift Cards" },
];

export const testimonials = [
  {
    name: "Luara Y",
    quote:
      "Christie is fabulous with Jr Golfers!! My daughter developed her beautiful swing and love for golf with Christie. Christie has set her up for success in the sport with both solid skills and confidence. Highly recommend Christie to anyone looking for golf instruction!",
  },
  {
    name: "Karen G",
    quote:
      "Christie will customize your lesson to exactly what you need. I saw a positive change right away and also got the tools I needed to transfer my learning onto the golf course! Christie is an excellent golf coach.",
  },
  {
    name: "Kelly H",
    quote:
      "Christie is extremely knowledgable about her sport and is able to break it down for your specific type of learning style. I was able to see improvement in a very small amount of time with my driver and all irons!",
  },
];

export type Program = {
  title: string;
  price: string;
  priceNote?: string;
  meta: string;
  description?: string;
  details?: string[];
};

export const programs: Program[] = [
  {
    title: "Discover Your Swing!® Assessment",
    price: "$295",
    meta: "90 minutes",
    details: [
      "Comprehensive movement screening",
      "Swing analysis with video",
      "Personalized Discover Your Swing!® profile",
      "Customized improvement plan",
      "Practice drills and lesson recap",
    ],
  },
  {
    title: "60-Minute Coaching Session",
    price: "$175",
    meta: "60 minutes",
    description:
      "Continue building your Discover Your Swing!® blueprint with personalized coaching tailored to your body, swing, and goals. Each session includes video analysis, customized drills, and a clear practice plan designed to create lasting improvement.",
  },
  {
    title: "5-Lesson Performance Package",
    price: "$995",
    priceNote: "Save $55 — regularly $1,050",
    meta: "5 sessions",
    description:
      "Designed for golfers committed to lowering scores and building consistency. You’ll receive five 60-minute coaching sessions, personalized practice plans, video feedback, and ongoing accountability to accelerate your progress.",
    details: [
      "Five 60-minute coaching sessions",
      "Personalized practice plans",
      "Video swing analysis",
      "Priority scheduling",
      "Email/text support between lessons",
    ],
  },
  {
    title: "10-Lesson Transformation Package",
    price: "$1,895",
    priceNote: "Save $205 — regularly $2,100",
    meta: "10 sessions",
    description:
      "Your complete game transformation. This comprehensive coaching experience is designed for golfers who want lasting improvement through a customized long-term development plan. Together we’ll build a swing that fits your body, improve scoring skills, and create confidence that transfers to the course.",
    details: [
      "Ten 60-minute coaching sessions",
      "Comprehensive swing development plan",
      "Video analysis and progress tracking",
      "Personalized practice programs",
      "Priority scheduling",
      "Email/text coaching support between lessons",
      "One complimentary progress review",
    ],
  },
];

export const videos = [
  { id: "GTqyo37F7m4", title: "Intro with Christie Quinn" },
  { id: "qFEBVEUh40Y", title: "Bunker Shot Distance Control Made Easy" },
  { id: "8m0s2YfMFww", title: "Find the Best Golf Grip for You" },
  { id: "h3MKFIg-ZVM", title: "Box Putting Drill" },
  { id: "o2V1qgJWtHE", title: "No 3 Putts" },
  { id: "he-mH5nDKwo", title: "Tempo" },
  { id: "Q71I2SJtixs", title: "May the Force Be With You" },
];
