const generatedIDs = new Set<string>();

const generateUniqueId = (): string => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let uniqueId = "_";
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueId += characters[randomIndex];
  }
  if (generatedIDs.has(uniqueId)) {
    return generateUniqueId();
  }
  generatedIDs.add(uniqueId);
  return uniqueId;
};

export default generateUniqueId;
