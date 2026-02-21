import AboutClient from './AboutClient';

export const metadata = {
    title: "About Us | Shashwat Wear",
    description: "Learn about Shashwat Wear's 15-year legacy of premium apparel manufacturing, our core values of quality and sustainability, and our leadership team.",
    openGraph: {
        title: "About Us | Shashwat Wear",
        description: "Learn about Shashwat Wear's 15-year legacy of premium apparel manufacturing, our core values of quality and sustainability, and our leadership team.",
        url: 'https://shashwatwear.com/about',
    }
};

export default function AboutPage() {
    return <AboutClient />;
}
