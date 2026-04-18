export const roles = {
  tourist: "tourist",
  companion: "companion",
  admin: "admin",
};

export function classNames(...values) {
  return values.filter(Boolean).join(" ");
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat("ar-EG", {
    style: "currency",
    currency: "EGP",
  }).format(amount);
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
