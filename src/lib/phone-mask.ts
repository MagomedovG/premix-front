export function formatRuPhoneMask(raw: string) {
  let digits = raw.replace(/\D/g, "");

  if (digits.startsWith("8")) {
    digits = `7${digits.slice(1)}`;
  }
  if (digits.length > 0 && !digits.startsWith("7")) {
    digits = `7${digits}`;
  }

  digits = digits.slice(0, 11);
  const local = digits.slice(1);

  if (!local.length) return "+7";

  let result = "+7";

  if (local.length <= 3) {
    return `${result} (${local}`;
  }

  result += ` (${local.slice(0, 3)})`;

  if (local.length <= 3) return result;

  if (local.length <= 6) {
    return `${result} ${local.slice(3)}`;
  }

  result += ` ${local.slice(3, 6)}`;

  if (local.length <= 8) {
    return `${result}-${local.slice(6)}`;
  }

  result += `-${local.slice(6, 8)}`;

  if (local.length <= 10) {
    return `${result}-${local.slice(8)}`;
  }

  return `${result}-${local.slice(8, 10)}`;
}

export function isRuPhoneComplete(masked: string) {
  return masked.replace(/\D/g, "").length === 11;
}
