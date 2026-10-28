export function estimate(text, rtt) {
  if (typeof text !== 'string') throw new TypeError('Text must be a string.');
  if (!Number.isFinite(rtt) || rtt < 0 || rtt > 2000) throw new RangeError('Round-trip time must be between 0 and 2000 ms.');
  const characters = Array.from(text).length;
  const remoteTrips = characters;
  const localTrips = characters ? 1 : 0;
  return { characters, remoteTrips, localTrips, remoteMs: remoteTrips*rtt, localMs: localTrips*rtt, savedTrips: remoteTrips-localTrips };
}
