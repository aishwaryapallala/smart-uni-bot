export interface CampusService {
  id: string;
  name: string;
  description: string;
  hours?: string;
  location?: string;
  contact?: string;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const campusServices: CampusService[] = [
  {
    id: 'library',
    name: 'Library Services',
    description: 'Access to study spaces, research materials, and academic resources',
    hours: 'Mon-Thu: 7:00 AM - 12:00 AM, Fri: 7:00 AM - 9:00 PM, Sat: 9:00 AM - 9:00 PM, Sun: 10:00 AM - 12:00 AM',
    location: 'Main Library Building, 1st Floor',
    contact: 'library@campus.edu | (555) 123-4567'
  },
  {
    id: 'dining',
    name: 'Dining Services',
    description: 'Campus dining halls, cafes, and meal plan information',
    hours: 'Breakfast: 7:00-10:00 AM, Lunch: 11:00 AM-3:00 PM, Dinner: 5:00-9:00 PM',
    location: 'Multiple locations across campus',
    contact: 'dining@campus.edu | (555) 123-4568'
  },
  {
    id: 'fitness',
    name: 'Fitness Center',
    description: 'Gymnasium, fitness equipment, group classes, and recreational activities',
    hours: 'Mon-Fri: 5:30 AM - 11:00 PM, Sat-Sun: 7:00 AM - 10:00 PM',
    location: 'Recreation Center, Building C',
    contact: 'fitness@campus.edu | (555) 123-4569'
  },
  {
    id: 'parking',
    name: 'Parking Services',
    description: 'Parking permits, enforcement, and transportation information',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    location: 'Administration Building, Room 150',
    contact: 'parking@campus.edu | (555) 123-4570'
  },
  {
    id: 'registrar',
    name: 'Registrar Office',
    description: 'Course registration, transcripts, and academic records',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    location: 'Student Services Building, 2nd Floor',
    contact: 'registrar@campus.edu | (555) 123-4571'
  },
  {
    id: 'health',
    name: 'Health Services',
    description: 'Medical care, counseling, and wellness programs',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Emergency services 24/7',
    location: 'Health Center, East Campus',
    contact: 'health@campus.edu | (555) 123-4572'
  }
];

export const quickResponses = {
  greeting: [
    "Hello! I'm your Smart Campus Assistant. How can I help you today?",
    "Hi there! What campus information can I help you find?",
    "Welcome! I'm here to help with any campus-related questions you have."
  ],
  library: [
    `Our library is open ${campusServices.find(s => s.id === 'library')?.hours}. You can access study rooms, computers, and research databases. Need help with anything specific?`,
    "The library offers quiet study areas, group study rooms, research assistance, and 24/7 online resources. What would you like to know more about?"
  ],
  dining: [
    `Dining halls are open for ${campusServices.find(s => s.id === 'dining')?.hours}. We have vegetarian, vegan, and allergy-friendly options available!`,
    "Our campus has 5 dining locations including the main cafeteria, coffee shops, and grab-and-go stations. All accept meal plans and campus cards."
  ],
  fitness: [
    `The fitness center is open ${campusServices.find(s => s.id === 'fitness')?.hours}. We offer free group classes, modern equipment, and recreational sports!`,
    "Our recreation center includes a gym, indoor track, swimming pool, basketball courts, and yoga studios. All students get free access!"
  ],
  parking: [
    "Student parking permits are available for $150/semester. Visitor parking is $5/day. The parking office can help with permits and appeals.",
    "We have student, staff, and visitor parking zones. Download the campus parking app for real-time availability!"
  ],
  schedule: [
    "Class schedules are available through the student portal. Registration for next semester opens November 15th.",
    "You can view your class schedule, room locations, and professor contact info through the campus app or student portal."
  ],
  emergency: [
    "For emergencies, call Campus Safety at (555) 911-HELP or use the emergency blue phones located throughout campus.",
    "Campus Safety provides 24/7 security, emergency response, and safe walk services. Download the campus safety app!"
  ],
  default: [
    "I can help you with library hours, dining options, fitness center info, parking, class schedules, and more. What would you like to know?",
    "I'm here to help with campus services, facilities, dining, transportation, and general information. Just ask!"
  ]
};

export function getCampusResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return quickResponses.greeting[Math.floor(Math.random() * quickResponses.greeting.length)];
  }
  
  if (message.includes('library') || message.includes('study') || message.includes('books')) {
    return quickResponses.library[Math.floor(Math.random() * quickResponses.library.length)];
  }
  
  if (message.includes('dining') || message.includes('food') || message.includes('eat') || message.includes('meal')) {
    return quickResponses.dining[Math.floor(Math.random() * quickResponses.dining.length)];
  }
  
  if (message.includes('gym') || message.includes('fitness') || message.includes('exercise') || message.includes('recreation')) {
    return quickResponses.fitness[Math.floor(Math.random() * quickResponses.fitness.length)];
  }
  
  if (message.includes('parking') || message.includes('car') || message.includes('permit')) {
    return quickResponses.parking[Math.floor(Math.random() * quickResponses.parking.length)];
  }
  
  if (message.includes('schedule') || message.includes('class') || message.includes('registration') || message.includes('course')) {
    return quickResponses.schedule[Math.floor(Math.random() * quickResponses.schedule.length)];
  }
  
  if (message.includes('emergency') || message.includes('help') || message.includes('safety')) {
    return quickResponses.emergency[Math.floor(Math.random() * quickResponses.emergency.length)];
  }
  
  return quickResponses.default[Math.floor(Math.random() * quickResponses.default.length)];
}