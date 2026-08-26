/*
 * Renders PROJECTS (from projects.js) and FEATURED into the page.
 * No dependencies, no build step — degrades gracefully when optional
 * fields (icon, screenshot, links, tags) are missing.
 */

function initials(name) {
  return name
    .split(/[\s/_-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function linkButtons(links) {
  if (!links) return "";
  const buttons = [];
  if (links.website) {
    buttons.push(
      `<a class="btn btn-primary" href="${links.website}" target="_blank" rel="noopener">Website ↗</a>`
    );
  }
  if (links.download) {
    buttons.push(
      `<a class="btn btn-dashed-accent" href="${links.download}" target="_blank" rel="noopener">Download ↓</a>`
    );
  }
  if (links.repo) {
    buttons.push(
      `<a class="btn" href="${links.repo}" target="_blank" rel="noopener">Source ↗</a>`
    );
  }
  return buttons.join("");
}

function tagBadges(project) {
  const badges = [];
  if (project.fork) {
    badges.push(`<span class="tag tag-fork">fork</span>`);
  }
  (project.tags || []).forEach((t) => {
    const cls = t.toLowerCase() === "private" ? "tag tag-private" : "tag";
    badges.push(`<span class="${cls}">${t}</span>`);
  });
  return badges.length
    ? `<div class="card-tags">${badges.join("")}</div>`
    : "";
}

function renderFeatured(project) {
  const mount = document.getElementById("featured");
  if (!mount || !project) return;

  mount.innerHTML = `
    <h2>${project.name}</h2>
    ${project.tagline ? `<p class="card-tagline">${project.tagline}</p>` : ""}
    ${project.description ? `<p>${project.description}</p>` : ""}
    ${tagBadges(project)}
    <div class="card-links">${linkButtons(project.links)}</div>
  `;
}

function renderCard(project) {
  const card = el("article", "card");

  if (project.screenshot) {
    const img = el("img", "card-screenshot");
    img.src = project.screenshot;
    img.alt = `${project.name} screenshot`;
    img.loading = "lazy";
    img.onerror = () => img.remove();
    card.appendChild(img);
  }

  const body = el("div", "card-body");

  const head = el("div", "card-head");
  if (project.icon) {
    const icon = el("img", "card-icon");
    icon.src = project.icon;
    icon.alt = "";
    icon.loading = "lazy";
    icon.onerror = () => {
      icon.replaceWith(el("div", "card-icon-fallback", initials(project.name)));
    };
    head.appendChild(icon);
  } else {
    head.appendChild(el("div", "card-icon-fallback", initials(project.name)));
  }
  head.appendChild(el("h3", "card-name", project.name));
  body.appendChild(head);

  if (project.tagline) {
    body.appendChild(el("p", "card-tagline", project.tagline));
  }
  if (project.description) {
    body.appendChild(el("p", "card-desc", project.description));
  }

  const tags = tagBadges(project);
  if (tags) body.appendChild(el("div", null, tags).firstChild);

  const links = linkButtons(project.links);
  body.appendChild(el("div", "card-links", links));

  card.appendChild(body);
  return card;
}

function renderGrid(projects) {
  const mount = document.getElementById("grid");
  if (!mount) return;
  projects.forEach((p) => mount.appendChild(renderCard(p)));
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof FEATURED !== "undefined") renderFeatured(FEATURED);
  if (typeof PROJECTS !== "undefined") renderGrid(PROJECTS);
});
