export type Testimonial = {
  quote: string;
  name: string;
  initials: string;
};

// Exact testimonials from the daycare's existing Google reviews.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Little Bubz Daycare has been a wonderful place for my child. The caring staff and engaging activities have made a positive impact on my child's development.",
    name: "Jenzen N.",
    initials: "JN",
  },
  {
    quote:
      "This facility was my first experience with childcare as a parent, and has set the bar high. They were easily able to contact, and I received lots of photos and crafts from each day.",
    name: "Victoria.H",
    initials: "VH",
  },
  {
    quote:
      "Sophia (the manager) goes above and beyond to ensure your children are happy and safe! Very attentive and communicative to all. I'd highly recommend her daycare to anyone and everyone!",
    name: "Jennifer C.",
    initials: "JC",
  },
];
