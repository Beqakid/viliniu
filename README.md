# Viliniu

A comprehensive platform built with PayloadCMS for farmers to manage their online stores, standalone websites, sales, and payroll management.

## 🌟 Features

- **Online Stores**: Custom storefronts for farmers
- **Standalone Websites**: Personalized websites with custom domains
- **Sales Management**: Order processing and inventory tracking
- **Payroll System**: Worker payments and wage tracking
- **Bookkeeping**: Revenue and expense management

## 🛠 Tech Stack

### Backend
- Framework: PayloadCMS (Managed Cloud, Headless CMS)
- Language: Node.js
- Database: PostgreSQL
- API: GraphQL
- Authentication: JWT-based via PayloadCMS
- File Storage: AWS S3/PayloadCMS storage
- Hosting: PayloadCMS Managed Cloud

### Frontend
- Framework: Next.js
- State Management: Apollo Client
- Styling: Tailwind CSS
- Deployment: Vercel

### Payment Processing
- Stripe Connect for farmer payouts
- Escrow system for secure transactions
- ACH payment support (planned)

### Notifications
- Firebase Cloud Messaging
- Twilio SMS updates

## 📦 Collections Structure

- **Farmers**: Profile management and store settings
- **Stores**: Online store configuration and branding
- **Websites**: Standalone website management
- **Products**: Product listings and inventory
- **Orders**: Order processing and tracking
- **Payments**: Transaction management
- **Payroll**: Worker payment tracking

## 🔒 Security Features

- Role-based access control (RBAC)
- JWT authentication
- End-to-end encryption for transactions
- Future support for 2FA and SSO

## 🚀 Getting Started

### Prerequisites
- Node.js
- PayloadCMS Cloud Account
- PostgreSQL
- Stripe Account (for payments)

### Installation
1. Clone the repository
```bash
git clone https://github.com/Beqakid/viliniu.git
cd viliniu
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Configure PayloadCMS
- Create a PayloadCMS Cloud Account
- Start a new project with PostgreSQL
- Enable GraphQL API
- Configure authentication settings

5. Run the development server
```bash
npm run dev
```

## 📚 Documentation

Detailed documentation for each component:
- [PayloadCMS Setup](docs/payload-setup.md)
- [GraphQL API Reference](docs/graphql-api.md)
- [Frontend Development](docs/frontend.md)
- [Payment Integration](docs/payments.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- [Your Name] - Initial work - [GitHub Profile]

## 🙏 Acknowledgments

- PayloadCMS team for the amazing CMS
- Next.js team for the frontend framework
- All contributors who help improve this project