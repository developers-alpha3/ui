import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Globe, Briefcase, Tv, Shirt, Users, Laptop, Heart, GraduationCap, Rocket, Plane, Utensils, Sparkles, Coffee, Clapperboard } from 'lucide-react';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const removeQuotes = (title) => {
  return title ? title.replace(/^"|"$/g, '') : '';
};

export const formatDate = (dateString) => {
  if (!dateString) return 'No date available';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid date';
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
};

export const categoryIcons = {
  all: Globe,
  politics: Users,
  business: Briefcase,
  beauty: Heart,
  sports: Coffee,
  entertainment: Tv,
  technology: Laptop,
  health: Heart,
  education: GraduationCap,
  influencers: Users,
  startups: Rocket,
  travel: Plane,
  food: Utensils,
  fashion: Shirt,
  lifestyle: Sparkles,
  movies: Clapperboard,
};
