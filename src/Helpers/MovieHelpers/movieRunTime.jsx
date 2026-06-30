export function movierRunTime(runtime) {
  let hours = runtime / 60;
  let minutes = runtime % 60;
  let stringHours = `${Math.floor(hours)}h${minutes}m`;
  return stringHours;
}
