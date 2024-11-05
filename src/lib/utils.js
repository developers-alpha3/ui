import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  Globe,
  Briefcase,
  Tv,
  Shirt,
  Users,
  Laptop,
  Heart,
  GraduationCap,
  Rocket,
  Plane,
  Utensils,
  Sparkles,
  Coffee,
  Clapperboard,
  Bitcoin,
  Gamepad2,
  Palette,
  FlaskConical,
} from 'lucide-react';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString) => {
  if (!dateString) return 'No date available';

  const date = new Date(dateString);

  return isNaN(date.getTime())
    ? 'Invalid date'
    : date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
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
  crypto: Bitcoin,
  gaming: Gamepad2,
  art: Palette,
  science: FlaskConical,
};
