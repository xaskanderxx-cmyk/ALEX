
import { Course, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'دورة شاملة في تطوير المواقع (Full Stack)',
    category: 'البرمجة',
    description: 'تعلم بناء المواقع من الصفر باستخدام React و Node.js.',
    instructor: 'إسلام اسكندر',
    rating: 4.9,
    studentsCount: 1250,
    price: 199,
    image: 'https://picsum.photos/seed/web/600/400',
    level: 'مبتدئ'
  },
  {
    id: '2',
    title: 'احتراف Microsoft Office 2024',
    category: 'المهارات المكتبية',
    description: 'اتقن Word, Excel, و PowerPoint لزيادة إنتاجيتك.',
    instructor: 'إسلام اسكندر',
    rating: 4.8,
    studentsCount: 3400,
    price: 49,
    image: 'https://picsum.photos/seed/office/600/400',
    level: 'مبتدئ'
  },
  {
    id: '3',
    title: 'أساسيات الأمن السيبراني',
    category: 'تقنية المعلومات',
    description: 'احمِ نفسك وبياناتك من التهديدات الرقمية.',
    instructor: 'إسلام اسكندر',
    rating: 4.7,
    studentsCount: 890,
    price: 85,
    image: 'https://picsum.photos/seed/cyber/600/400',
    level: 'متوسط'
  },
  {
    id: '4',
    title: 'تصميم الواجهات UI/UX',
    category: 'التصميم',
    description: 'تعلم كيف تصمم تطبيقات ومواقع مريحة للمستخدم.',
    instructor: 'إسلام اسكندر',
    rating: 4.9,
    studentsCount: 560,
    price: 120,
    image: 'https://picsum.photos/seed/design/600/400',
    level: 'مبتدئ'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'أحمد محمود',
    role: 'مطور برمجيات جونيور',
    text: 'بفضل كورسات المهندس إسلام، تمكنت من الحصول على وظيفتي الأولى في البرمجة.',
    image: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: '2',
    name: 'سارة خالد',
    role: 'مصممة جرافيك',
    text: 'الشرح مبسط جداً ومبني على أساس عملي، أنصح الجميع بالاشتراك.',
    image: 'https://picsum.photos/seed/user2/100/100'
  }
];
