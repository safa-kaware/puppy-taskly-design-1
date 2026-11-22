export const IMAGES = {
  heroPuppy: '/src/assets/images/hero_golden_puppy_1795331704375.jpg',
  whyConfidence: '/src/assets/images/why_confidence_puppy_1795331704729.jpg',
  whyHabits: '/src/assets/images/why_habits_puppy_1795331704845.jpg',
  whyFriends: '/src/assets/images/why_friends_puppy_1795331703693.jpg',
  experienceClass: '/src/assets/images/experience_class_action_1795331704200.jpg',
  finalCtaPuppy: '/src/assets/images/final_cta_puppy_1795331704380.jpg',
} as const;

export interface NavLinkItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Why Train', href: '#why-train' },
  { label: 'Program', href: '#program' },
  { label: 'Experience', href: '#experience' },
  { label: 'Trainer', href: '#trainer' },
  { label: 'FAQ', href: '#faq' },
];

export interface WhyTrainCard {
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
  illustrationType: 'confidence' | 'habits' | 'friends';
  surfaceBg: string;
  accentTint: string;
}

export const WHY_TRAIN_CARDS: WhyTrainCard[] = [
  {
    id: 'confidence',
    number: '01',
    title: 'Build Confidence',
    description: 'Help puppies feel comfortable in new environments.',
    detail:
      'Gentle exposure to novel sounds, textures, and surfaces teaches young pups to approach unfamiliar moments with curiosity instead of worry.',
    image: IMAGES.whyConfidence,
    imageAlt: 'Mini Australian Shepherd puppy standing calmly on a birchwood balance board',
    illustrationType: 'confidence',
    surfaceBg: 'bg-[#EAF4FC]',
    accentTint: 'text-[#277D89]',
  },
  {
    id: 'habits',
    number: '02',
    title: 'Learn Good Habits',
    description: 'Develop positive everyday behaviours.',
    detail:
      'Kind, reward-based guidance replaces guesswork at home—supporting calm greetings, polite settling, and gentle mouth habits early on.',
    image: IMAGES.whyHabits,
    imageAlt: 'Bernese Mountain Dog puppy sitting politely and looking up at a trainer',
    illustrationType: 'habits',
    surfaceBg: 'bg-[#ECE9FB]',
    accentTint: 'text-[#4C458F]',
  },
  {
    id: 'friends',
    number: '03',
    title: 'Make New Friends',
    description: 'Encourage safe and positive social experiences.',
    detail:
      'Thoughtfully matched, supervised puppy play sessions help your pup read canine body language and build healthy social boundaries.',
    image: IMAGES.whyFriends,
    imageAlt: 'Corgi puppy and cream Labradoodle puppy greeting gently on a soft pale blue mat',
    illustrationType: 'friends',
    surfaceBg: 'bg-[#E2F2F3]',
    accentTint: 'text-[#246E78]',
  },
];

export interface WeekCurriculum {
  weekNumber: string;
  shortTitle: string;
  fullTitle: string;
  summary: string;
  description: string;
  learnings: string[];
  homeFocus: string;
  image: string;
  imageAlt: string;
  surfaceClass: string;
}

export const SIX_WEEK_PROGRAM: WeekCurriculum[] = [
  {
    weekNumber: '01',
    shortTitle: 'Puppy Foundations',
    fullTitle: 'Week 01 – Puppy Foundations',
    summary: 'Warm welcome, marker timing, and helping your puppy feel safe in class.',
    description:
      'We begin by helping both you and your puppy settle into a calm rhythm. You will learn how puppies process rewards, how to build immediate trust, and simple routines for smoother first weeks at home.',
    learnings: [
      'Positive reinforcement timing and clear reward markers',
      'Building a calm "check-in" habit in a new room',
      'Gentle handling exercises for paws, ears, and collar touches',
      'Practical tips for crate comfort, rest schedules, and teething',
    ],
    homeFocus: 'Five-minute calm check-in games in low-distraction rooms at home.',
    image: IMAGES.heroPuppy,
    imageAlt: 'Golden Retriever puppy sitting attentively on a cream mat in the studio',
    surfaceClass: 'bg-[#EAF4FC]',
  },
  {
    weekNumber: '02',
    shortTitle: 'Name Recognition & Focus',
    fullTitle: 'Week 02 – Name Recognition & Focus',
    summary: 'Turning your voice into a joyful cue for eye contact and engagement.',
    description:
      'Your puppy learns that hearing their name always predicts something wonderful. Together we practice capturing voluntary attention even as exciting sights and fellow puppies appear nearby.',
    learnings: [
      'Consistent, upbeat name response without repeating cues',
      'Eye-contact games that build natural focus on you',
      'Hand targeting ("touch") for gentle redirection anywhere',
      'Beginning impulse control around treats and toys',
    ],
    homeFocus: 'Charging your puppy’s name before meals, doorway waits, and backyard breaks.',
    image: IMAGES.whyHabits,
    imageAlt: 'Bernese Mountain Dog puppy focusing attentively on a trainer',
    surfaceClass: 'bg-[#ECE9FB]',
  },
  {
    weekNumber: '03',
    shortTitle: 'Sit, Stay & Everyday Manners',
    fullTitle: 'Week 03 – Sit, Stay & Everyday Manners',
    summary: 'Polite greetings, settling on a mat, and early duration around distractions.',
    description:
      'Everyday manners make life together effortless. Week three translates core cues into daily routines—like greeting guests with four paws on the floor and relaxing peacefully beside you.',
    learnings: [
      'Clean, reliable Sit and Down cues using gentle luring and fading',
      'Starter Stay foundations with distance and duration steps',
      'Mat settle ("place") for peaceful café or living-room downtime',
      'Polite greeting routines instead of excited jumping',
    ],
    homeFocus: 'Practicing 30-second mat settles while you prepare coffee or answer the door.',
    image: IMAGES.experienceClass,
    imageAlt: 'Puppy parents guiding their puppies on pastel blue training mats',
    surfaceClass: 'bg-[#E2F2F3]',
  },
  {
    weekNumber: '04',
    shortTitle: 'Leash Walking & Recall',
    fullTitle: 'Week 04 – Leash Walking & Recall',
    summary: 'Loose-leash strolling foundations and joyful, reliable come-when-called.',
    description:
      'Exploring Edmonton parks is much more enjoyable when the leash stays relaxed. We practice walking as a connected team and build an enthusiastic recall your puppy genuinely loves responding to.',
    learnings: [
      'Loose-leash positioning and rewarding slack-leash moments',
      'Smooth U-turns and direction changes when distractions pop up',
      'High-value recall games ("Puppy Ping-Pong" and emergency cues)',
      'Safe "Leave It" and "Drop It" swaps for outdoor curiosities',
    ],
    homeFocus: 'Short hallway and quiet sidewalk loose-leash loops with generous reinforcement.',
    image: IMAGES.whyConfidence,
    imageAlt: 'Australian Shepherd puppy poised calmly on a wooden training platform',
    surfaceClass: 'bg-[#EAF4FC]',
  },
  {
    weekNumber: '05',
    shortTitle: 'Socialisation & Confidence',
    fullTitle: 'Week 05 – Socialisation & Confidence',
    summary: 'Thoughtful sensory exploration, body-language reading, and resilient curiosity.',
    description:
      'Confidence is built thoughtfully—never rushed. Puppies navigate age-appropriate enrichment stations, gentle novelty objects, and structured peer interactions while parents learn to advocate for their dog.',
    learnings: [
      'Navigating novel surfaces, sounds, umbrellas, and gentle obstacles',
      'Understanding calm vs. overwhelmed puppy body language signals',
      'Supervised, well-matched puppy play and polite break-aways',
      'Supporting shy or exuberant pups through seasonal Edmonton weather gear',
    ],
    homeFocus: 'Two short, positive curiosity outings per week at your puppy’s own pace.',
    image: IMAGES.whyFriends,
    imageAlt: 'Two puppies greeting each other gently on a pale blue woven mat',
    surfaceClass: 'bg-[#ECE9FB]',
  },
  {
    weekNumber: '06',
    shortTitle: 'Real-World Skills & Graduation',
    fullTitle: 'Week 06 – Real-World Skills & Graduation',
    summary: 'Connecting every skill together, everyday proofing, and celebrating progress.',
    description:
      'In our final week, your puppy puts together focus, polite greetings, leash manners, and calm settles in realistic mini-scenarios—wrapping up with graduation keepsakes and a personalized next-steps roadmap.',
    learnings: [
      'Chaining cues smoothly in mock sidewalk and patio scenarios',
      'Distraction proofing with passing dogs, strollers, and friendly people',
      'Adolescent puppy roadmap for months 5 through 12',
      'Graduation celebration and take-home milestone certificate',
    ],
    homeFocus: 'Maintaining brief, joyful daily practice sessions as your puppy grows.',
    image: IMAGES.finalCtaPuppy,
    imageAlt: 'Happy Cavalier King Charles Spaniel puppy resting peacefully on a linen pillow',
    surfaceClass: 'bg-[#E2F2F3]',
  },
];

export interface ExperiencePillar {
  id: string;
  title: string;
  description: string;
  highlightNote: string;
}

export const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    id: 'small-group',
    title: 'Small group learning',
    description:
      'Intimate class sizes keep noise low and individual coaching high, giving every puppy plenty of breathing room.',
    highlightNote: 'Space to focus without feeling overwhelmed',
  },
  {
    id: 'positive-reinforcement',
    title: 'Positive reinforcement',
    description:
      'Science-backed, reward-based coaching that builds trust, enthusiasm, and lasting communication without harsh corrections.',
    highlightNote: 'Kind, modern training methods',
  },
  {
    id: 'guided-socialisation',
    title: 'Guided puppy socialisation',
    description:
      'Curated, structured introductions and supervised breaks teach puppies how to greet politely and self-regulate.',
    highlightNote: 'Supervised play matched by play style',
  },
  {
    id: 'practical-exercises',
    title: 'Practical exercises',
    description:
      'Every activity maps directly to real Edmonton life—doorway manners, vet handling, patio settles, and sidewalk walks.',
    highlightNote: 'Skills built for everyday routines',
  },
  {
    id: 'parent-support',
    title: 'Support for puppy parents',
    description:
      'Weekly take-home guides, open Q&A time, and judgement-free guidance for every question between classes.',
    highlightNote: 'Clear coaching for first-timers & families',
  },
];

export interface TrainerPlaceholderProfile {
  namePlaceholder: string;
  rolePlaceholder: string;
  certificationPlaceholder: string;
  introPlaceholder: string;
  philosophy: string;
  personalMessage: string;
}

export const TRAINER_PROFILE: TrainerPlaceholderProfile = {
  namePlaceholder: '[Trainer Name Placeholder]',
  rolePlaceholder: '[Lead Puppy Trainer · Pawuahas Edmonton]',
  certificationPlaceholder:
    '[Certification & Credentials Placeholder — e.g., Certified Professional Dog Trainer / Fear-Free or Positive Reinforcement Credentials]',
  introPlaceholder:
    '[Trainer Introduction Placeholder — Share your background with puppies in Edmonton, how Pawuahas began, and what draws you to guiding new dog families through early puppyhood.]',
  philosophy:
    'At Pawuahas, training is built on patience, clear communication, and positive reinforcement. Puppies learn best when they feel safe, understood, and celebrated for making good choices.',
  personalMessage:
    '"[Personal Message Placeholder — Welcome puppy parents with a warm note about what they can expect in your studio, why those first weeks matter so much, and how you will support them every step of the way.]"',
};

export interface ClassDetailItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
  isPlaceholder?: boolean;
  surfaceClass: string;
}

export const CLASS_DETAILS: ClassDetailItem[] = [
  {
    id: 'duration',
    label: 'Duration',
    value: '6 Weeks',
    subtext: 'Weekly 60-minute in-person sessions with take-home practice notes.',
    surfaceClass: 'bg-[#EAF4FC]',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Edmonton, Alberta, Canada',
    subtext: '[Editable Studio Neighbourhood & Address Placeholder]',
    surfaceClass: 'bg-[#ECE9FB]',
  },
  {
    id: 'class-size',
    label: 'Class Size',
    value: '[Editable Class Size Placeholder]',
    subtext: 'Small-group format capped for calm learning and attentive coaching.',
    isPlaceholder: true,
    surfaceClass: 'bg-[#E2F2F3]',
  },
  {
    id: 'price',
    label: 'Program Investment',
    value: '[Editable Price Placeholder]',
    subtext: 'Includes 6 live classes, weekly guides, and graduation keepsake.',
    isPlaceholder: true,
    surfaceClass: 'bg-[#EAF4FC]',
  },
  {
    id: 'status',
    label: 'Registration Status',
    value: '[Editable Registration Status Placeholder]',
    subtext: 'Upcoming Edmonton cohort dates and remaining spots.',
    isPlaceholder: true,
    surfaceClass: 'bg-[#ECE9FB]',
  },
];

export interface TestimonialPlaceholder {
  id: string;
  quote: string;
  authorPlaceholder: string;
  puppyPlaceholder: string;
  cohortPlaceholder: string;
  surfaceClass: string;
}

export const TESTIMONIAL_PLACEHOLDERS: TestimonialPlaceholder[] = [
  {
    id: 'placeholder-1',
    quote:
      '[Editable Testimonial Placeholder 01 — Add a real puppy parent quote describing how their puppy grew more confident during the 6-week Pawuahas program.]',
    authorPlaceholder: '[Puppy Parent Name Placeholder]',
    puppyPlaceholder: '[Puppy Name & Breed Placeholder]',
    cohortPlaceholder: '[Cohort / Season Placeholder]',
    surfaceClass: 'bg-[#EAF4FC]',
  },
  {
    id: 'placeholder-2',
    quote:
      '[Editable Testimonial Placeholder 02 — Highlight a client story about calmer leash walks, joyful recall, or smoother greetings at home in Edmonton.]',
    authorPlaceholder: '[Puppy Parent Name Placeholder]',
    puppyPlaceholder: '[Puppy Name & Breed Placeholder]',
    cohortPlaceholder: '[Cohort / Season Placeholder]',
    surfaceClass: 'bg-[#ECE9FB]',
  },
  {
    id: 'placeholder-3',
    quote:
      '[Editable Testimonial Placeholder 03 — Share feedback from a first-time puppy owner on the welcoming atmosphere and practical coaching support.]',
    authorPlaceholder: '[Puppy Parent Name Placeholder]',
    puppyPlaceholder: '[Puppy Name & Breed Placeholder]',
    cohortPlaceholder: '[Cohort / Season Placeholder]',
    surfaceClass: 'bg-[#E2F2F3]',
  },
  {
    id: 'placeholder-4',
    quote:
      '[Editable Testimonial Placeholder 04 — Feature a note about how guided puppy socialisation helped a shy or energetic pup thrive.]',
    authorPlaceholder: '[Puppy Parent Name Placeholder]',
    puppyPlaceholder: '[Puppy Name & Breed Placeholder]',
    cohortPlaceholder: '[Cohort / Season Placeholder]',
    surfaceClass: 'bg-[#EAF4FC]',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'age',
    question: 'What age should my puppy be?',
    answer:
      'Puppy Foundations is designed for young puppies typically between 8 and 20 weeks old at the start of the six-week program. Starting early takes advantage of their prime socialisation window in a safe, clean studio setting.',
  },
  {
    id: 'bring',
    question: 'What should I bring to class?',
    answer:
      'Please bring a flat collar or well-fitted harness, a standard 4- to 6-foot leash (no retractable leashes), plenty of soft pea-sized training treats your puppy loves, a small mat or towel for settle practice, and water for breaks.',
  },
  {
    id: 'vaccinations',
    question: 'Are vaccinations required?',
    answer:
      'Yes—age-appropriate puppy vaccinations (at least the first round of DHPP) and a clean veterinary health check prior to class are required so all puppies can learn and socialise safely together. Proof of vaccination is reviewed before your first session.',
  },
  {
    id: 'missed-class',
    question: 'What happens if I miss a class?',
    answer:
      'Life with a new puppy happens! If you need to miss a session, you will receive the week’s step-by-step practice summary and exercise notes so you can keep up smoothly at home, along with check-in support at your next class.',
  },
  {
    id: 'class-size',
    question: 'How many puppies are in each class?',
    answer:
      'Classes are intentionally kept small so puppies aren’t overwhelmed and every family receives attentive, one-on-one coaching throughout each exercise. Exact cohort caps can be customized in the Class Details section.',
  },
  {
    id: 'first-time',
    question: 'Can first-time dog owners join?',
    answer:
      'Absolutely! Many Pawuahas families are raising their very first puppy. Everything is explained step by step in plain, encouraging language with zero judgement and plenty of hands-on guidance.',
  },
];
