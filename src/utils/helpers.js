export function formatReadingTime(minutes) {
  // The reading time in minutes is calculated on an average rate of 200 words per minute (wpm).
  // I want to give a little more nuance and show an interval between a non-native rate of about 150 wpm and native reader of about 250 wpm.

  let cups = Math.round(minutes / 5);
  let slowReading = Math.round(minutes * 1.25);
  let fastReading = Math.round(minutes * 0.75);
  return `${new Array(cups || 1).fill('☕️').join('')} ${fastReading} – ${slowReading} minutes read`;
}
