// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const listData = [
  {
    id: 1,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Louis Tomlinson",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "HTML"],
  },
  {
    id: 2,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Tahmid Asghar",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "HTML"],
  },
  {
    id: 3,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Fatin Nima",
    job: "Web Developer",
    location: "Bandung",
    skills: ["PHP", "JavaScript", "CSS"],
  },
  {
    id: 4,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Arif Atallah",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "HTML"],
  },
  {
    id: 5,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Wangi Fawziya",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "HTML"],
  },
  {
    id: 6,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Rasima Sawda",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "HTML"],
  },
  {
    id: 7,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Gamila Ruslan",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "HTML"],
  },
  {
    id: 8,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Agus Nadir",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "HTML"],
  },
  {
    id: 9,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Zafar Sharif",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "HTML"],
  },
  {
    id: 10,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Gamal Rashad",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "HTML"],
  },
  {
    id: 11,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Sama Hayat",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "HTML"],
  },
  {
    id: 12,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Alya Farid",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "HTML"],
  },
  {
    id: 13,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Hayat Maram",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "HTML"],
  },
  {
    id: 14,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Imen Akram",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "HTML"],
  },
];

export default function handler(req, res) {
  res
    .status(200)
    .json({ status: true, message: "Get data success", data: listData });
}
