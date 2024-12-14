# Movie Search App

A modern, responsive movie search application built with Next.js 14, Redux, and the TMDB API. Search for movies, view trending titles, and discover detailed information about your favorite films.

![Movie Search App](https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200&h=400)

## 🌟 Features

- **Movie Search**: Search for movies with real-time results
- **Trending Movies**: Display currently trending movies
- **Search History**: Track and quickly access recent searches
- **Responsive Design**: Beautiful UI that works on all devices

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 14
- **State Management**: Redux + Redux Saga
- **Styling**: 
  - Tailwind CSS
  - SCSS
  - shadcn/ui components
- **API Integration**: TMDB (The Movie Database)
- **HTTP Client**: Axios
- **TypeScript**: For type safety and better developer experience

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── movie-card.tsx    # Movie card component
│   ├── movie-grid.tsx    # Grid layout for movies
│   ├── providers.tsx     # App providers
│   └── search-bar.tsx    # Search functionality
├── lib/                   # Application logic
│   ├── api/              # API configuration
│   ├── redux/            # Redux store, actions, reducers
│   ├── services/         # API services
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
```

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file:
```env
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
```

4. **Start the development server**
```bash
npm run dev
```

## 💻 Development

### Code Organization
- **Components**: Small, reusable UI components
- **Lib**: Business logic, API calls, and utilities
- **Redux**: State management with actions, reducers, and sagas

### Best Practices
- Modular component architecture
- Type safety with TypeScript
- Clean code principles
- Efficient state management
- Responsive design patterns

## 🔑 API Integration

The app uses the TMDB API for movie data. Key endpoints:
- Search movies
- Fetch trending movies
- Get movie details
- Retrieve genres

## 🎨 UI/UX Features

- Responsive grid layout
- Smooth animations
- Loading states
- Error handling
- Search history
- Movie ratings display
- Beautiful movie cards

## 📱 Responsive Design

The app is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones

## 🔄 State Management

Redux is used for state management with the following features:
- Search results
- Trending movies
- Loading states
- Error handling
- Search history
- Selected movie details

## 🛠️ Future Improvements

- [ ] Advanced filtering options
- [ ] User authentication
- [ ] Favorite movies list
- [ ] Movie recommendations
- [ ] Trailer integration
- [ ] Social sharing features

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🙏 Acknowledgments

- TMDB for providing the movie database API
- shadcn/ui for the beautiful UI components
- Next.js team for the amazing framework
- The open-source community for various tools and libraries
