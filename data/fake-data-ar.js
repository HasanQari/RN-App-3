import Category from '../models/category';

const WFC = ['0', 'الأطباق العربية', 'الأطباق الإيطالية', 'الأطباق الأميريكية', 'الأطباق الآسيوية', 'الأطباق الألمانية', 'الأطباق المكسيكية', ''];
const GF = ['الإفطار', 'الغداء', 'العشاء', 'وصفات سهلة وسريعة']

export const CATEGORIES = [
    new Category('c1', WFC[2], '#f5428d'),
    new Category('c2', WFC[1], '#f54242'),
    new Category('c3', WFC[3], '#f5a442'),
    new Category('c4', WFC[4], '#f5d142'),
    new Category('c5', WFC[5], '#368dff'),
    new Category('c6', WFC[6], '#41d95d'),
    new Category('c7', GF[1], '#9eecff'),
    new Category('c8', GF[0], '#b9ffb0'),
    new Category('c9', GF[3], '#ffc7ff'),
    new Category('c10',GF[2], '#47fced')
];
