Supabase-Auth-App

A simple and secure authentication system built with React, Supabase, and TailwindCSS. This application supports user login, signup, password reset, and Google OAuth authentication.

Features
	•	User Authentication:
		Signup with email and password.
		Login with email and password.
		Logout functionality.
		Google OAuth signup and login.
	•	Password Reset:
		Users can request a password reset via email.
	•	User State Management:
		Tracks authentication state with real-time updates.
		Protects routes based on user authentication.
	•	Responsive UI:
		Built with TailwindCSS for a modern and mobile-friendly design.

Technologies Used
	•	Frontend:
		React: For building the user interface.
		React Router: For handling page navigation.
	•	Backend:
		Supabase: Backend-as-a-Service for authentication and database management.
	•	Styling:
		TailwindCSS: For responsive and modern UI design.

Setup and Installation

Prerequisites
	•	Node.js (v14 or later)
	•	npm or yarn
	•	A Supabase account with a project set up.

Clone the Repository

git clone https://github.com/abd-az1z/supabaseauthapp.git
cd auth-app

Install Dependencies

npm install

Setup Environment Variables
	1.	Create a .env file in the project root.
	2.	Add your Supabase credentials:

VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_KEY=your-anon-key

Run the Development Server

npm run dev

The app will be available at http://localhost:5173.

Project Structure

auth-app/
│
├── src/
│   ├── components/
│   │   ├── LoginPage.jsx       # Login page component
│   │   ├── SignupPage.jsx      # Signup page component
│   │   ├── ForgotPasswordPage.jsx # Password reset page component
│   │   ├── Navbar.jsx       # Navigation page component
│   │   └── HomePage.jsx        # Home page component
│   │
│   ├── helper/
│   │   └── supabaseClient.js   # Supabase client configuration
│   │
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # React entry point
│   └── index.css               # Main CSS file
│
├── public/                     # Public assets
├── .gitignore                  # Files to ignore in Git
├── .env                        # Environment variables (not tracked by Git)
├── package.json                # Dependencies and scripts
├── README.md                   # Project documentation
└── vite.config.js              # Vite configuration

Usage
	1.	Signup:
	•	Users can create an account using their email and password or Google OAuth.
	2.	Login:
	•	Access the app by logging in with registered credentials.
	3.	Forgot Password:
	•	Users can reset their password by entering their registered email.
	4.	Home Page:
	•	After login, the app redirects users to the home page, where they can see a welcome message and additional options.

Deployment

To deploy the app, use platforms like Vercel or Netlify.

Steps:
	1.	Push your code to GitHub or any other Git repository.
	2.	Connect your repository to the deployment platform.
	3.	Add the environment variables (VITE_SUPABASE_URL and VITE_SUPABASE_KEY) in the deployment platform’s settings.
	4.	Deploy your application.

Future Enhancements
	•	Add multi-factor authentication (MFA) for enhanced security.
	•	Implement role-based access control (RBAC) for user roles.
	•	Include a dashboard for users to manage their profile.

Contributing

Contributions are welcome! Please follow these steps:
	1.	Fork the repository.
	2.	Create a new branch (git checkout -b feature-branch).
	3.	Commit your changes (git commit -m 'Add feature').
	4.	Push to the branch (git push origin feature-branch).
	5.	Open a Pull Request.

Contact

For any inquiries or feedback, feel free to reach out:
	•	Author: Abdul Aziz
	•	Email: mohdabdulaziz2023@gmail.com
	•	GitHub: abd-az1z

