export type RoomPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

// Real photos of the daycare space.
export const backyardPhoto: RoomPhoto = {
  src: "/room3.jpg",
  alt: "Covered backyard play area with a picnic table, playhouse, and outdoor toys",
  caption: "Backyard Play Area",
  width: 680,
  height: 308,
};

export const roomPhotos: RoomPhoto[] = [
  {
    src: "/room1.jpg",
    alt: "Playroom with a play mat, toys, and a reading nook",
    caption: "Playroom",
    width: 680,
    height: 510,
  },
  {
    src: "/room2.jpg",
    alt: "Nap room with cribs and sleeping mats",
    caption: "Nap Room",
    width: 680,
    height: 510,
  },
  {
    src: "/room4.jpg",
    alt: "Activity area with a learning calendar and play mats",
    caption: "Activity Corner",
    width: 680,
    height: 510,
  },
  {
    src: "/room5.jpg",
    alt: "Reading and play corner with books and toys",
    caption: "Reading Corner",
    width: 680,
    height: 510,
  },
];
