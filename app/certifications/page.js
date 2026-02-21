import CertificationsClient from './CertificationsClient';

export const metadata = {
    title: "Our Certifications | Shashwat Wear",
    description: "Shashwat Wear is an ISO 9001:2015, GOTS, OEKO-TEX, SEDEX, and BSCI certified apparel manufacturer ensuring premium quality and ethical sourcing.",
    openGraph: {
        title: "Our Certifications | Shashwat Wear",
        description: "Shashwat Wear is an ISO 9001:2015, GOTS, OEKO-TEX, SEDEX, and BSCI certified apparel manufacturer ensuring premium quality and ethical sourcing.",
        url: 'https://shashwatwear.com/certifications',
    }
};

export default function CertificationsPage() {
    return <CertificationsClient />;
}
