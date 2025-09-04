export function slugify(text) {
  return text
    .toString()
    .normalize("NFD")            // remove accents
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace spaces and special chars with dash
    .replace(/^-+|-+$/g, "");    // remove leading/trailing dashes
}
