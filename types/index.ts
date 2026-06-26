export interface MenuItem {
  name: string;
  description: string;
  price: string;
  isRecommended?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export interface DishCardProps {
  name: string;
  description: string;
  price: string;
  isRecommended?: boolean;
  imageSrc?: string;
  className?: string;
}

export interface PhilosophyBlockProps {
  label?: string;
  heading: string;
  body: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  textBg?: "cream" | "white";
  className?: string;
}

export interface SectionHeadingProps {
  label?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export interface FadeRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}
