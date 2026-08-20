import Link from "next/link";

/**
 * @typedef {Object} NavigationLink
 * @property {string} label
 * @property {string} href
 */

/**
 * @param {{
 *   previous?: NavigationLink,
 *   next?: NavigationLink
 * }} props
 */
export default function JourneyNavigation({ previous, next }) {
  return (
    <nav className="journey-navigation">
      {previous ? (
        <Link href={previous.href}>← {previous.label}</Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link href={next.href}>{next.label} →</Link>
      ) : (
        <span />
      )}
    </nav>
  );
}