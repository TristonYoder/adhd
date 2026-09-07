/*
 * PROJECTS — the single file to edit to add/remove/update a project card.
 *
 * Fields:
 *   name        (required) display name
 *   tagline     (optional) short mono-font line under the name
 *   description (optional) 1-3 sentence card body
 *   icon        (optional) path to a square icon image, e.g. "icons/foo.png"
 *   iconRounded (optional) true -> adds slight corner rounding to `icon`.
 *                 Use for icons with no transparency (a flat, edge-to-edge
 *                 square image) — icons with their own transparent/rounded
 *                 shape don't need it.
 *   screenshots (optional) array of screenshots for a click-to-enlarge gallery.
 *                 Each entry is either a path string, e.g. "screenshots/foo/1.png",
 *                 or { src, caption } to add a caption shown in the lightbox.
 *                 The first entry is used as the card's cover image; if there's
 *                 more than one, a "⛶ N" badge appears and clicking opens a
 *                 lightbox to browse them all. A single legacy `screenshot`
 *                 string field also still works.
 *   tags        (optional) array of short strings, rendered as badges
 *   fork        (optional) true -> renders a dashed "fork" badge
 *   links       (optional) { website, repo, download } — any subset; omitted ones just don't render
 *
 * Nothing here is required except `name`. Missing icon/screenshots/links/tags
 * all degrade gracefully — see render.js.
 *
 * FEATURED_PROJECTS renders as big cards above the grid (same fields as
 * PROJECTS entries) — reserve it for the strongest, most-finished work.
 */

const FEATURED_PROJECTS = [
  {
    name: "Stage Plotiphar",
    tagline: "The app that's gonna have your running from bad stage plots.",
    icon: "icons/stage-plotiphar.png",
    description:
      "The production platform behind every stage plot, mic board, and assignment sheet at the events I run — drag-and-drop plotting and live venue displays, with a whole hardware/software ecosystem (a Companion module, print templates, purpose-built signage devices) that have grown up around it.",
    screenshots: [
      { src: "screenshots/stage-plotiphar/stage-plot.png", caption: "Stage plot" },
      { src: "screenshots/stage-plotiphar/stage-plot-editor.png", caption: "Stage plot editor" },
      { src: "screenshots/stage-plotiphar/micboard.png", caption: "Mic board" },
      { src: "screenshots/stage-plotiphar/event-view.png", caption: "Event view" },
      { src: "screenshots/stage-plotiphar/hardware-assignments.png", caption: "Hardware assignments" },
    ],
    links: {
      website: "https://plotiphar.com",
    },
    tags: ["Web", "Docker", "Nix", "MacOS", "iOS", "TypeScript", "Beta"],
  },
  {
    name: "13 Years",
    tagline: "macOS + iOS app",
    icon: "icons/13years.png", // actual brand mark, exported from the project's own asset
    description:
      "A purpose-built stage timer system for live production: a Producer app that runs the show — control deck, live pager preview, Planning Center sync, network master — paired with a dedicated Pager app that puts a clean, glanceable countdown in front of whoever's on stage.",
    screenshots: [
      { src: "screenshots/13-years/producer-pager.png", caption: "Producer — pager view" },
      { src: "screenshots/13-years/producer-element-time.png", caption: "Producer — element timing" },
      { src: "screenshots/13-years/producer-edit-time.png", caption: "Producer — edit time" },
      { src: "screenshots/13-years/pager-standby.png", caption: "Pager — standby" },
      { src: "screenshots/13-years/pager-go.png", caption: "Pager — go" },
      { src: "screenshots/13-years/pager-clear.png", caption: "Pager — clear" },
    ],
    tags: ["macOS", "iOS", "iPadOS", "tvOS", "StreamDeck", "Custom Hardware", "Canary"],
  },
];

const PROJECTS = [
  {
    name: "PCO Copy Machine",
    tagline: "macOS app",
    description:
      "Copies item notes, details, and columns between Planning Center Services plans across campuses.",
    icon: "icons/copymachine.png", // source repo is releases-only/private, so this is a local copy
    screenshots: [
      { src: "screenshots/pco-copy-machine/1-login.png", caption: "Login" },
      { src: "screenshots/pco-copy-machine/2-item-matching.png", caption: "Item matching" },
      { src: "screenshots/pco-copy-machine/3-note-matching.png", caption: "Note matching" },
      { src: "screenshots/pco-copy-machine/4-select-notes.png", caption: "Select notes" },
      { src: "screenshots/pco-copy-machine/5-apply-changes.png", caption: "Apply changes" },
    ],
    links: {
      download: "https://github.com/TristonYoder/CopyMachine/releases/latest",
      repo: "https://github.com/TristonYoder/CopyMachine",
    },
    tags: ["macOS"],
  },
  {
    name: "Multi-Campus Stage Display",
    tagline: "macOS menu bar app",
    description:
      "Manages ProPresenter stage display content across multiple campuses — editable display slots served as RSS feeds, with automatic campus detection by IP.",
    icon: "https://raw.githubusercontent.com/TristonYoder/multi-campus-stage-display/main/icon.png",
    iconRounded: true,
    links: {
      download:
        "https://github.com/TristonYoder/multi-campus-stage-display/releases/latest",
      repo: "https://github.com/TristonYoder/multi-campus-stage-display",
    },
    tags: ["macOS", "Docker"],
  },
  {
    name: "Stream Deck Icon Generator",
    tagline: "web tool",
    description: "Generates custom icon sets for Elgato Stream Deck buttons.",
    icon: "icons/sdicongenerator.png",
    iconRounded: true,
    screenshots: ["screenshots/sdicongenerator/ui.png"],
    links: {
      website: "https://sdicons.tristonyoder.com/",
      repo: "https://github.com/TristonYoder/sdIconGenerator",
    },
    tags: ["web"],
  },
  {
    name: "BPM Calculator",
    tagline: "web tool",
    description:
      "Converts a BPM into delay time, Hz, frame count, and sample count — for tempo-synced delays, strobes, and video effects.",
    icon: "icons/bpmcalc.png",
    iconRounded: true,
    screenshots: ["screenshots/bpmcalc/ui.png"],
    links: {
      website: "https://bpmcalc.tristonyoder.com/",
      repo: "https://github.com/TristonYoder/bpmCalc",
    },
    tags: ["web"],
  },
  {
    name: "Stage Plotiphar Companion Module",
    tagline: "Bitfocus Companion module",
    description:
      "Controls and monitors Stage Plotiphar venues from a Stream Deck / Companion setup — switch screens between events and micboards, and expose live stage-position → person assignments as Companion variables.",
    links: {
      repo: "https://github.com/TristonYoder/companion-module-stageplotiphar",
    },
    tags: ["Companion module"],
  },
  {
    name: "iOpenPod CLI",
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
    name: "YouTube Scheduler",
    tagline: "CLI tool",
    description:
      "Automates scheduling recurring YouTube live broadcasts for multiple services, with dry-run mode and date-range batch scheduling.",
    icon: "icons/yt-schedule.png",
    iconRounded: true,
    links: {
      repo: "https://github.com/TristonYoder/yt-schedule",
    },
    tags: ["CLI", "Python"],
  },
  {
    name: "PCO Print Templates",
    tagline: "print templates",
    description:
      "Liquid HTML print templates for Planning Center Online — clean, role-specific run sheets (audio, media, lighting, service director) printed straight from PCO.",
    icon: "icons/pcoprintouts.png",
    iconRounded: true,
    links: {
      repo: "https://github.com/TristonYoder/pcoPrintouts",
    },
    tags: ["templates"],
  },
];
