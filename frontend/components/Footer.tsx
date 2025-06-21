export default function Footer() {
  const footerLinks = [
    {
      title: 'Support',
      links: ['Find a Store', 'Get Help', 'Order Status', 'Returns', 'Payment Options'],
    },
    {
      title: 'Company',
      links: ['About Us', 'News', 'Careers', 'Investors', 'Sustainability'],
    },
    {
      title: 'Resources',
      links: ['Journal', 'Become a Member', 'Promo Codes', 'Shipping and Delivery'],
    },
    {
      title: 'Legal',
      links: ['Terms of Use', 'Terms of Sale', 'Privacy Policy', 'Cookie Settings'],
    },
  ];

  return (
    <footer className="px-4 sm:px-6 py-12 bg-gray-100 text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h5 className="font-semibold mb-2">{section.title}</h5>
            <ul className="space-y-1">
              {section.links.map((link, i) => (
                <li key={i} className="hover:underline cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center text-xs text-gray-500">
        USA © 2023 Golden Silver, Inc. All Rights Reserved
      </div>
    </footer>
  );
}
