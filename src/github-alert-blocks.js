const githubAlertTypes = {
  NOTE: "Note",
  TIP: "Tip",
  IMPORTANT: "Important",
  WARNING: "Warning",
  CAUTION: "Caution"
};

const alertPattern = /^\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/;

function replaceAlertMarker(paragraph, marker) {
  for (const node of paragraph.childNodes) {
    if (node.nodeType !== Node.TEXT_NODE) continue;

    node.textContent = node.textContent.replace(marker, "");
    return;
  }
}

function convertGithubAlert(blockquote) {
  const paragraph = blockquote.firstElementChild;
  if (paragraph?.tagName !== "P") return;

  const match = paragraph.textContent.match(alertPattern);
  if (!match) return;

  const type = match[1];
  const alert = document.createElement("div");
  const title = document.createElement("p");

  alert.className = `github-alert github-alert-${type.toLowerCase()}`;
  alert.setAttribute("role", "alert");

  title.className = "github-alert-title";
  title.textContent = githubAlertTypes[type];

  replaceAlertMarker(paragraph, match[0]);
  if (!paragraph.textContent.trim()) paragraph.remove();

  alert.append(title, ...blockquote.childNodes);
  blockquote.replaceWith(alert);
}

document.querySelectorAll("blockquote").forEach(convertGithubAlert);
