import memberA from "../assets/pictures/member-a.png";
import memberB from "../assets/pictures/member-b.png";
import memberC from "../assets/pictures/member-c.png";
import memberD from "../assets/pictures/member-d.png";
import memberE from "../assets/pictures/member-e.png";
import memberF from "../assets/pictures/member-f.png";
import memberG from "../assets/pictures/member-g.png";

export const projects = [
  { id: 1, name: "Mobile App", color: "#7B61FF" },
  { id: 2, name: "Website Redesign", color: "#FF9500" },
  { id: 3, name: "Design System", color: "#34C759" },
  { id: 4, name: "Wireframes", color: "#FF3B30" },
];

export const columns = [
  {
    id: "todo",
    title: "To Do",
    count: 4,
    color: "#7B61FF",
    tasks: [
      {
        id: 1,
        title: "Brainstorming",
        description: "Brainstorming brings team members' diverse experience into play.",
        priority: "Low",
        priorityColor: "#00C48C",
        priorityBg: "#E6FAF5",
        comments: 12,
        files: 0,
        members: [
          { color: "#7B61FF", image: memberA },
          { color: "#FF6B6B", image: memberB },
          { color: "#4ECDC4", image: memberC },
        ],
      },
      {
        id: 2,
        title: "Research",
        description: "User research helps you to create an optimal product for users.",
        priority: "High",
        priorityColor: "#FF3B30",
        priorityBg: "#FFEEEE",
        comments: 10,
        files: 3,
        members: [
          {   color: "#FF9500", image: memberD },
          {  color: "#34C759", image: memberE },
        ],
      },
      {
        id: 3,
        title: "Wireframes",
        description: "Low fidelity wireframes include the most basic content and visuals.",
        priority: "High",
        priorityColor: "#FF3B30",
        priorityBg: "#FFEEEE",
        comments: 8,
        files: 2,
        members: [
          {   color: "#5856D6", image: memberF },
          {   color: "#FF2D55", image: memberG },
        ],
      },
    ],
  },
  {
    id: "inprogress",
    title: "On Progress",
    count: 3,
    color: "#FF9500",
    tasks: [
      {
        id: 4,
        title: "Onboarding Illustrations",
        description: "",
        priority: "Low",
        priorityColor: "#00C48C",
        priorityBg: "#E6FAF5",
        comments: 14,
        files: 15,
        hasImage: true,
        members: [
          {   color: "#7B61FF", image: memberA },
          {   color: "#FF6B6B", image: memberB },
          {   color: "#4ECDC4", image: memberC },
        ],
      },
      {
        id: 5,
        title: "Moodboard",
        description: "",
        priority: "Low",
        priorityColor: "#00C48C",
        priorityBg: "#E6FAF5",
        comments: 9,
        files: 10,
        hasImage: true,
        members: [
          { color: "#FF9500", image: memberD },
          {  color: "#34C759", image: memberE },
        ],
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    count: 2,
    color: "#34C759",
    tasks: [
      {
        id: 6,
        title: "Mobile App Design",
        description: "",
        priority: "Completed",
        priorityColor: "#7B61FF",
        priorityBg: "#EEF0FF",
        comments: 12,
        files: 15,
        hasImage: true,
        members: [
          {  color: "#7B61FF", image: memberA },
          {   color: "#FF6B6B", image: memberB },
        ],
      },
      {
        id: 7,
        title: "Design System",
        description: "It just needs to adapt the UI from what you did before.",
        priority: "Completed",
        priorityColor: "#7B61FF",
        priorityBg: "#EEF0FF",
        comments: 12,
        files: 15,
        members: [
          {  color: "#4ECDC4", image: memberC },
          {  color: "#FF9500", image: memberD },
          {  color: "#34C759", image: memberE },
        ],
      },
    ],
  },
];