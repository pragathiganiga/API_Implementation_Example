# React API Fetching App

This project is a React application that fetches and displays posts from the JSONPlaceholder API.

## Features
- Fetch posts from `https://jsonplaceholder.typicode.com/posts`
- Display the list of posts using reusable components

## Technologies Used
- React (TypeScript)
- Axios

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/react-api-app.git
   cd react-api-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the application:
   ```sh
   npm start
   ```

## File Structure
```
react-api-app/
│── src/
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── Post.tsx
│   ├── App.tsx
│   ├── index.tsx
│── package.json
│── README.md
```

## Code Overview

### Post Component (`Post.tsx`)
```typescript
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Post: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <Card key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default Post;
```

### Card Component (`Card.tsx`)
```typescript
import React from 'react';

interface CardProps {
  title: string;
  body: string;
}

const Card: React.FC<CardProps> = ({ title, body }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Card;
```

### App Component (`App.tsx`)
```typescript
import React from 'react';
import Post from './components/Post';

const App: React.FC = () => {
  return (
    <div>
      <h1>API Fetching App</h1>
      <Post />
    </div>
  );
};

export default App;
```

## Contributing
Feel free to submit pull requests to improve the project.

## License
This project is open-source under the MIT license.
