// src/data/siteConfig.js
// ============================================================
// SINGLE SOURCE OF TRUTH — rebrand the entire site here
// ============================================================

export const brand = {
  name: "FITNESS STACK UNISEX GYM",
  tagline: "Push Beyond Your Limits",
  city: "Dehradun",
  phone: "+91 98765 43210",
  email: "hello@fitnessstack.in",
  address: "Niranjanpur Mandi, Dehradun, India 248001",
  mapEmbedUrl: "https://maps.google.com/?q=Niranjanpur+Mandi+Dehradun",
  instagram: "https://instagram.com/fitnessstack",
  facebook: "https://facebook.com/fitnessstack",
  twitter: "https://twitter.com/fitnessstack",
  youtube: "https://youtube.com/@fitnessstack",
  hours: {
    weekdays: "5:00 AM – 11:00 PM",
    saturday: "6:00 AM – 10:00 PM",
    sunday: "7:00 AM – 8:00 PM",
  },
};

export const stats = [
  { value: 4800, suffix: "+", label: "Active Members" },
  { value: 32, suffix: "+", label: "Expert Trainers" },
  { value: 120, suffix: "+", label: "Weekly Classes" },
  { value: 12, suffix: "", label: "Years of Excellence" },
];

export const programs = [
  {
    id: 1,
    title: "Strength & Conditioning",
    description:
      "Build raw power and functional strength with compound lifts, progressive overload protocols, and expert coaching.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
    badge: "POPULAR",
    color: "#FF5A1F",
    duration: "60 min",
    level: "All Levels",
  },
  {
    id: 2,
    title: "CrossFit WOD",
    description:
      "High-intensity functional training combining gymnastics, weightlifting, and metabolic conditioning.",
    image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=600&q=80",
    badge: "INTENSE",
    color: "#C6FF3D",
    duration: "45 min",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Yoga & Mobility",
    description:
      "Restore flexibility, reduce injury risk, and improve mind-body connection with our certified yoga instructors.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    badge: "CALM",
    color: "#FFD400",
    duration: "75 min",
    level: "Beginner",
  },
  {
    id: 4,
    title: "Cardio Blast",
    description:
      "Torch calories and boost cardiovascular health with HIIT, cycling, and plyometric circuits.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    badge: "BURN",
    color: "#FF5A1F",
    duration: "50 min",
    level: "All Levels",
  },
  {
    id: 5,
    title: "Zumba Dance Fitness",
    description:
      "Sweat to the beat! Latin-inspired dance moves that make cardio feel like a party.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    badge: "FUN",
    color: "#C6FF3D",
    duration: "55 min",
    level: "Beginner",
  },
  {
    id: 6,
    title: "Boxing & MMA",
    description:
      "Develop discipline, reflexes, and total-body fitness through boxing fundamentals and mixed martial arts.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80",
    badge: "FIGHT",
    color: "#FFD400",
    duration: "60 min",
    level: "All Levels",
  },
];

export const trainers = [
  {
    id: 1,
    name: "Arjun Malhotra",
    role: "Head Strength Coach",
    specialty: "Powerlifting & Hypertrophy",
    experience: "8 Years",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&q=80",
    instagram: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Yoga & Mobility Expert",
    specialty: "Vinyasa & Restorative Yoga",
    experience: "6 Years",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    instagram: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Rahul Desai",
    role: "CrossFit Level 3 Coach",
    specialty: "Olympic Lifting & WODs",
    experience: "10 Years",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
    instagram: "#",
    twitter: "#",
  },
  {
    id: 4,
    name: "Meera Kapoor",
    role: "Cardio & Boxing Coach",
    specialty: "HIIT & Kickboxing",
    experience: "5 Years",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
    instagram: "#",
    twitter: "#",
  },
];

export const plans = [
  {
    id: 1,
    name: "Starter",
    monthlyPrice: 1499,
    yearlyPrice: 12999,
    color: "#FFF8F1",
    textColor: "#0B1B3A",
    popular: false,
    features: [
      "Access to gym floor",
      "2 group classes/week",
      "Locker room access",
      "Basic fitness assessment",
      "App access",
    ],
    notIncluded: ["Personal training sessions", "Nutrition plan", "Guest passes"],
  },
  {
    id: 2,
    name: "Pro",
    monthlyPrice: 2499,
    yearlyPrice: 21999,
    color: "#FF5A1F",
    textColor: "#FFFFFF",
    popular: true,
    features: [
      "Unlimited gym floor access",
      "Unlimited group classes",
      "2 PT sessions/month",
      "Nutrition consultation",
      "Locker + towel service",
      "App + progress tracking",
      "2 Guest passes/month",
    ],
    notIncluded: [],
  },
  {
    id: 3,
    name: "Elite",
    monthlyPrice: 3999,
    yearlyPrice: 35999,
    color: "#0B1B3A",
    textColor: "#FFFFFF",
    popular: false,
    features: [
      "Everything in Pro",
      "8 PT sessions/month",
      "Custom meal planning",
      "Priority class booking",
      "Spa & recovery access",
      "Unlimited guest passes",
      "Quarterly body analysis",
    ],
    notIncluded: [],
  },
];

export const schedule = {
  Monday: [
    { time: "6:00 AM", class: "Morning Yoga", trainer: "Priya S.", spots: 12 },
    { time: "8:00 AM", class: "CrossFit WOD", trainer: "Rahul D.", spots: 8 },
    { time: "10:00 AM", class: "Cardio Blast", trainer: "Meera K.", spots: 15 },
    { time: "5:00 PM", class: "Strength & Conditioning", trainer: "Arjun M.", spots: 10 },
    { time: "7:00 PM", class: "Zumba", trainer: "Meera K.", spots: 20 },
  ],
  Tuesday: [
    { time: "6:30 AM", class: "Power Hour", trainer: "Arjun M.", spots: 10 },
    { time: "9:00 AM", class: "Pilates Flow", trainer: "Priya S.", spots: 12 },
    { time: "11:00 AM", class: "Boxing Basics", trainer: "Meera K.", spots: 8 },
    { time: "6:00 PM", class: "CrossFit WOD", trainer: "Rahul D.", spots: 8 },
    { time: "8:00 PM", class: "Evening Yoga", trainer: "Priya S.", spots: 15 },
  ],
  Wednesday: [
    { time: "5:30 AM", class: "Early Bird Cardio", trainer: "Meera K.", spots: 18 },
    { time: "8:00 AM", class: "Strength Training", trainer: "Arjun M.", spots: 10 },
    { time: "10:30 AM", class: "Zumba", trainer: "Meera K.", spots: 20 },
    { time: "5:30 PM", class: "CrossFit WOD", trainer: "Rahul D.", spots: 8 },
    { time: "7:30 PM", class: "Mobility & Stretch", trainer: "Priya S.", spots: 15 },
  ],
  Thursday: [
    { time: "6:00 AM", class: "Morning Yoga", trainer: "Priya S.", spots: 12 },
    { time: "8:00 AM", class: "HIIT Bootcamp", trainer: "Meera K.", spots: 15 },
    { time: "10:00 AM", class: "Boxing Advanced", trainer: "Rahul D.", spots: 8 },
    { time: "5:00 PM", class: "Strength & Conditioning", trainer: "Arjun M.", spots: 10 },
    { time: "7:00 PM", class: "Cardio Dance", trainer: "Meera K.", spots: 20 },
  ],
  Friday: [
    { time: "6:30 AM", class: "CrossFit WOD", trainer: "Rahul D.", spots: 8 },
    { time: "9:00 AM", class: "Core & Abs", trainer: "Arjun M.", spots: 15 },
    { time: "11:00 AM", class: "Yoga Flow", trainer: "Priya S.", spots: 12 },
    { time: "6:00 PM", class: "Power Lifting", trainer: "Arjun M.", spots: 6 },
    { time: "7:30 PM", class: "Zumba Party", trainer: "Meera K.", spots: 25 },
  ],
  Saturday: [
    { time: "7:00 AM", class: "Weekend Warriors", trainer: "Rahul D.", spots: 20 },
    { time: "9:00 AM", class: "Yoga & Brunch", trainer: "Priya S.", spots: 15 },
    { time: "11:00 AM", class: "Boxing Circuit", trainer: "Meera K.", spots: 12 },
    { time: "4:00 PM", class: "Strength Clinic", trainer: "Arjun M.", spots: 8 },
  ],
  Sunday: [
    { time: "8:00 AM", class: "Sunday Stretch", trainer: "Priya S.", spots: 20 },
    { time: "10:00 AM", class: "Light Cardio", trainer: "Meera K.", spots: 18 },
    { time: "12:00 PM", class: "CrossFit Community WOD", trainer: "Rahul D.", spots: 25 },
  ],
};

export const testimonials = [
  {
    id: 1,
    name: "Kavya Nair",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    text: "FITNESS STACK UNISEX GYM completely transformed my relationship with fitness. In 6 months I lost 18kg and gained so much confidence. The trainers genuinely care about your progress!",
    rating: 5,
    tag: "Lost 18kg",
  },
  {
    id: 2,
    name: "Vikram Patel",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    text: "The CrossFit community here is incredible. Rahul's coaching style is world-class. I've tried 4 different gyms in Dehradun – FITNESS STACK UNISEX GYM is in a different league.",
    rating: 5,
    tag: "CrossFit Convert",
  },
  {
    id: 3,
    name: "Sneha Iyer",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    text: "The yoga studio here is serene and Priya is exceptional. The equipment is top-notch and the facility is always spotless. Best investment I've made in my health.",
    rating: 5,
    tag: "Yoga Devotee",
  },
  {
    id: 4,
    name: "Rohan Mehta",
    role: "College Student",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    text: "Student-friendly pricing and amazing environment. Went from 60kg skinny to feeling genuinely strong in 8 months. The nutrition guidance was a game-changer.",
    rating: 5,
    tag: "Gained 12kg muscle",
  },
  {
    id: 5,
    name: "Anita Desai",
    role: "Working Mom",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
    text: "With two kids and a full-time job I thought I had no time for fitness. The flexible class timings at FITNESS STACK UNISEX GYM made it possible. I feel 10 years younger!",
    rating: 5,
    tag: "Energy Renewed",
  },
];

export const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    alt: "Modern gym floor with weights",
    span: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    alt: "Treadmill cardio section",
    span: "normal",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80",
    alt: "Boxing training session",
    span: "normal",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "CrossFit rope climbing",
    span: "wide",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    alt: "Personal training session",
    span: "normal",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80",
    alt: "Yoga class",
    span: "tall",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=800&q=80",
    alt: "Dumbbell rack",
    span: "normal",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
    alt: "Group fitness class",
    span: "wide",
  },
];

export const transformations = [
  {
    id: 1,
    name: "Rohan M.",
    duration: "8 months",
    before: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&q=80",
    after: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
    lost: "22kg",
  },
];
