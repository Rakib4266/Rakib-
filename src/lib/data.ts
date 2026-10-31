// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update your portfolio content.
// Everything shown on the website comes from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Rakibul Hasan",
  role: "Software Engineer",
  specialty: "Blockchain Developer",
  location: "Dhaka, Bangladesh",
  university: "Islamic University of Technology (OIC)",
  email: "rakibulhasan4266@gmail.com",
  linkedin: "https://www.linkedin.com/in/rakibulhasan4266",
  github: "https://github.com/",
  tagline: "I build secure, decentralized applications on the blockchain.",
  about:
    "I'm a software engineering student at the Islamic University of Technology (OIC), Dhaka, with a focus on blockchain development. I design and build smart contracts, decentralized applications (dApps), and full-stack web applications. I care deeply about security, clean code, and shipping products that solve real problems.",
};

// Typing animation lines shown in the hero
export const typedLines = [
  "Blockchain Developer",
  "Solidity & Smart Contracts",
  "Full-Stack Engineer",
  "dApp Enthusiast",
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Blockchain",
    skills: [
      "Solidity",
      "Ethereum",
      "Smart Contract Development",
      "Hardhat",
      "Ethers.js",
      "MetaMask Integration",
      "ERC-20 / ERC-721",
      "Smart Contract Security",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Web3.js",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git & GitHub",
      "IPFS",
      "Firebase",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Decentralized Voting dApp",
    description:
      "A tamper-proof voting system built on Ethereum with on-off-chain hybrid architecture. Smart contracts guarantee transparency while a React dashboard visualizes live results.",
    tech: ["Solidity", "Hardhat", "React", "Ethers.js"],
    link: "https://github.com/",
  },
  {
    title: "NFT Marketplace",
    description:
      "A full-featured marketplace for minting, listing and trading ERC-721 NFTs, with IPFS storage and MetaMask wallet connect.",
    tech: ["Next.js", "Solidity", "ERC-721", "IPFS"],
    link: "https://github.com/",
  },
  {
    title: "Token Staking Platform",
    description:
      "ERC-20 staking contract with time-locked rewards, plus a clean web UI showing APRs, positions and claim history in real time.",
    tech: ["Solidity", "ERC-20", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/",
  },
];

export const experiences = [
  {
    period: "2022 — Present",
    title: "B.Sc. in Software Engineering / CSE",
    org: "Islamic University of Technology (OIC), Dhaka",
    detail:
      "Studying software engineering with a focus on distributed systems, cryptography and blockchain technologies.",
  },
  {
    period: "Ongoing",
    title: "Self-Directed Blockchain Learning",
    org: "Online courses, hackathons & open source",
    detail:
      "Building and deploying smart contracts, participating in web3 hackathons and contributing to open-source projects.",
  },
];
