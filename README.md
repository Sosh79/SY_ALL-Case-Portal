# SY_ALL-Case-Portal - Emergency and Police Case Reporting Portal

## Overview

SY_ALL-Case-Portal is a web-based platform designed to streamline the reporting of emergency and police cases. This application provides a user-friendly interface for citizens to submit detailed reports for both emergency situations and police incidents.

## Features

### Emergency Case Reporting

- Quick and efficient submission of emergency cases
- Detailed form capture including:
  - Reporter's personal information
  - Location details
  - Age range of affected persons
  - Comprehensive case description
- Real-time submission confirmation

### Police Case Reporting

- Structured police case submission system
- Essential information collection:
  - Reporter's identification
  - Incident location
  - Case details
  - Contact information
- Secure data handling

### Technical Features

- Real-time form validation
- Responsive design for all devices
- Webhook integration for instant case processing
- Modern and accessible user interface

## Technology Stack

This project is built with modern web technologies:

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Form Handling**: React Hook Form with Zod validation
- **API Integration**: Webhook-based data submission
- **State Management**: React Hooks

The application is structured into several key components:

- `CaseForm`: Core component for both emergency and police case submissions
- `EmergencyForm`: Specialized form for emergency situations
- `PoliceForm`: Dedicated form for police case reporting
- `webhookService`: Handles secure data transmission

## Contributing

We welcome contributions to improve SY_ALL-Case-Portal. Please feel free to submit issues and pull requests.

## Security

This application handles sensitive information. All data is transmitted securely through encrypted channels. No personal information is stored locally.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
