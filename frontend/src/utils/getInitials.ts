const getInitials = (name: string | undefined) => {
  if (!name) return;
  const nameArray = name.split(" ");
  let initials = "";
  if (nameArray.length > 2) {
    initials = nameArray[0][0] + nameArray[1][0];
  } else {
    nameArray.forEach((word) => (initials += word[0]));
  }

  return initials.toUpperCase();
};

export default getInitials;
