/*
 * PROJECTS — the single file to edit to add/remove/update a project card.
 *
 * Fields:
 *   name        (required) display name
 *   tagline     (optional) short mono-font line under the name
 *   description (optional) 1-3 sentence card body
 *   icon        (optional) path to a square icon image, e.g. "icons/foo.png"
 *   screenshot  (optional) path to a wide screenshot image, e.g. "screenshots/foo.png"
 *   tags        (optional) array of short strings, rendered as badges
 *   fork        (optional) true -> renders a dashed "fork" badge
 *   links       (optional) { website, repo, download } — any subset; omitted ones just don't render
 *
 * Nothing here is required except `name`. Missing icon/screenshot/links/tags
 * all degrade gracefully — see render.js.
 */

const FEATURED = {
  name: "Stage Plotiphar",
  tagline: "plotiphar.com",
  description:
    "A platform for planning and displaying live-event stage plots, mic boards, and assignment sheets. This project has a small ecosystem of tools (Companion module, print templates, mic board devices) that grew out of it.",
  links: {
    website: "https://plotiphar.com",
  },
  tags: ["private"],
};

const PROJECTS = [
  {
    name: "sdIconGenerator",
    tagline: "web tool",
    description: "Generates custom icon sets for Elgato Stream Deck buttons.",
    links: {
      website: "https://sdicons.tristonyoder.com/",
      repo: "https://github.com/TristonYoder/sdIconGenerator",
    },
    tags: ["web"],
  },
  {
    name: "bpmCalc",
    tagline: "web tool",
    description:
      "Converts a BPM into delay time, Hz, frame count, and sample count — for tempo-synced delays, strobes, and video effects.",
    links: {
      website: "https://bpmcalc.tristonyoder.com/",
      repo: "https://github.com/TristonYoder/bpmCalc",
    },
    tags: ["web"],
  },
  {
    name: "CopyMachine",
    tagline: "macOS app",
    description:
      "Copies item notes, details, and columns between Planning Center Services plans across campuses.",
    icon: "icons/copymachine.png", // source repo is releases-only/private, so this is a local copy
    links: {
      download: "https://github.com/TristonYoder/CopyMachine/releases/latest",
      repo: "https://github.com/TristonYoder/CopyMachine",
    },
    tags: ["macOS"],
  },
  {
    name: "yt-schedule",
    tagline: "CLI tool",
    description:
      "Automates scheduling recurring YouTube live broadcasts for multiple services, with dry-run mode and date-range batch scheduling.",
    links: {
      repo: "https://github.com/TristonYoder/yt-schedule",
    },
    tags: ["CLI", "Python"],
  },
  {
    name: "companion-module-stageplotiphar",
    tagline: "Bitfocus Companion module",
    description:
      "Controls and monitors Stage Plotiphar venues from a Stream Deck / Companion setup — switch screens between events and micboards, and expose live stage-position → person assignments as Companion variables.",
    links: {
      repo: "https://github.com/TristonYoder/companion-module-stageplotiphar",
    },
    tags: ["Companion module"],
  },
  {
    name: "iOpenPodCLI",
    tagline: "CLI tool",
    description:
      "Headless CLI for syncing music, playlists, podcasts, and ratings to an iPod — a Qt-free fork of iOpenPod, also packaged as a Nix flake (iopenpod-flake).",
    icon: "https://raw.githubusercontent.com/TristonYoder/iOpenPodCLI/main/assets/icons/icon-256.png",
    links: {
      repo: "https://github.com/TristonYoder/iOpenPodCLI",
    },
    tags: ["CLI", "Nix"],
    fork: true,
  },
  {
    name: "pcoPrintouts",
    tagline: "print templates",
    description:
      "Liquid HTML print templates for Planning Center Online — clean, role-specific run sheets (audio, media, lighting, service director) printed straight from PCO.",
    links: {
      repo: "https://github.com/TristonYoder/pcoPrintouts",
    },
    tags: ["templates"],
  },
  {
    name: "Multi-Campus Stage Display",
    tagline: "macOS menu bar app",
    description:
      "Manages ProPresenter stage display content across multiple campuses — editable display slots served as RSS feeds, with automatic campus detection by IP.",
    icon: "https://raw.githubusercontent.com/TristonYoder/multi-campus-stage-display/main/icon.png",
    links: {
      download:
        "https://github.com/TristonYoder/multi-campus-stage-display/releases/latest",
      repo: "https://github.com/TristonYoder/multi-campus-stage-display",
    },
    tags: ["macOS", "Docker"],
  },
];
