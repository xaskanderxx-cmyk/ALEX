
export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  instructor: string;
  rating: number;
  studentsCount: number;
  price: number;
  image: string;
  level: 'مبتدئ' | 'متوسط' | 'متقدم';
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  role: string;
  image: string;
}
