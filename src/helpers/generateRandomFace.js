export default function generateRandomFace() {
  const randomNumber = Math.floor(Math.random() * 130) + 1;
  return `/faces/${randomNumber}.png`;
}

export function generateRandomFaceFemale() {
  const randomFemale = Math.floor(Math.random() * 66) + 1;
  return `/faces/${randomFemale}.png`;
}

export function generateRandomFaceMale() {
  const randomMale = Math.floor(Math.random() * 64) + 67;
  return `/faces/${randomMale}.png`;
}
