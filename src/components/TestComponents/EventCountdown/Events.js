export const eventCategories = [
  "Holiday",
  "Night away",
  "Weekend away",
  "Golf trip",
  "Work trip",
  "Day trip",
  "Celebration",
  "Public holiday",
  "Personal",
];

export const events = [
  {
    eventName: "Majorca",
    date: new Date(2025, 6, 1),
    categories: [eventCategories[0]],
    photo: "/events/majorca.jpg",
    isFavourite: true,
    repeats: false,
  },
  //   {
  //     eventName: "Glastonbury festival",
  //     date: new Date(2025, 5, 25),
  //     categories: [eventCategories[2], eventCategories[8]],
  //     photo: "/events/glastonbury.png",
  //     isFavourite: false,
  //     repeats: false,
  //   },
  {
    eventName: "Christmas",
    date: new Date(2025, 11, 25),
    categories: [eventCategories[7]],
    photo: "/events/christmas.jpg",
    isFavourite: false,
    repeats: true,
  },
  {
    eventName: "K&C wedding",
    date: new Date(2026, 5, 20),
    categories: [eventCategories[6]],
    photo: "/events/wedding.jpg",
    isFavourite: false,
    repeats: false,
  },
  {
    eventName: "Start new job",
    date: new Date(2025, 6, 14),
    categories: [eventCategories[6], eventCategories[8]],
    photo: "/events/pandadoc.png",
    isFavourite: false,
    repeats: false,
  },
  {
    eventName: "Center Parcs",
    date: new Date(2025, 9, 10),
    categories: [eventCategories[0]],
    photo: "/events/centerparcs.png",
    isFavourite: false,
    repeats: false,
  },
  {
    eventName: "Grand Theft Auto 6",
    date: new Date(2026, 4, 26),
    categories: [eventCategories[6], eventCategories[8]],
    photo: "/events/gta6.png",
    isFavourite: false,
    repeats: false,
  },
];

export const eventsAscending = events.toSorted((a, b) => a.date - b.date);
export const eventsDescending = events.toSorted((a, b) => b.date - a.date);

export const favouriteEvents = [];
