"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight, BookOpen, TrendingUp } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { WidgetAnimation } from "./widget-animation"
import { useState } from "react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  gradient: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Web Applications with Next.js and TypeScript",
    excerpt:
      "Learn how to create robust, type-safe web applications using Next.js 15 and TypeScript. Discover best practices for project structure, API routes, and performance optimization.",
    content: `
# Building Scalable Web Applications with Next.js and TypeScript

Next.js has revolutionized the way we build React applications, and when combined with TypeScript, it becomes an incredibly powerful tool for creating scalable, maintainable web applications.

## Why Next.js + TypeScript?

The combination of Next.js and TypeScript offers several advantages:

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better Developer Experience**: Enhanced IDE support with autocomplete and refactoring
- **Scalability**: Easier to maintain large codebases
- **Performance**: Built-in optimizations and code splitting

## Project Structure Best Practices

When building a Next.js application with TypeScript, organizing your project structure is crucial:

\`\`\`
src/
├── app/
│   ├── (auth)/
│   ├── api/
│   └── globals.css
├── components/
│   ├── ui/
│   └── features/
├── lib/
├── types/
└── utils/
\`\`\`

## API Routes with TypeScript

Creating type-safe API routes is essential for maintaining data integrity:

\`\`\`typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'

interface User {
  id: string
  name: string
  email: string
}

export async function GET(request: NextRequest) {
  const users: User[] = await fetchUsers()
  return NextResponse.json(users)
}
\`\`\`

## Performance Optimization

Next.js provides several built-in optimizations:

1. **Automatic Code Splitting**: Pages are automatically split into separate bundles
2. **Image Optimization**: Built-in Image component with lazy loading
3. **Static Generation**: Pre-render pages at build time for better performance

## Conclusion

The combination of Next.js and TypeScript provides a solid foundation for building modern web applications. By following best practices and leveraging the built-in optimizations, you can create applications that are both performant and maintainable.
    `,
    author: "Varad Deshpande",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "React", "Performance"],
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: "2",
    title: "Integrating AI and LLMs into Modern Web Applications",
    excerpt:
      "Explore how to seamlessly integrate Large Language Models and AI capabilities into your web applications using FastAPI, Python, and modern frontend frameworks.",
    content: `
# Integrating AI and LLMs into Modern Web Applications

Artificial Intelligence and Large Language Models (LLMs) are transforming the way we build web applications. This guide will show you how to integrate these powerful technologies into your projects.

## Understanding LLM Integration

Large Language Models like GPT, Claude, and others can be integrated into web applications to provide:

- **Natural Language Processing**: Text analysis, summarization, and generation
- **Conversational Interfaces**: Chatbots and virtual assistants
- **Content Generation**: Automated writing and code generation
- **Data Analysis**: Insights from unstructured data

## Setting Up the Backend with FastAPI

FastAPI is an excellent choice for building AI-powered APIs:

\`\`\`python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import openai

app = FastAPI()

class ChatRequest(BaseModel):
    message: str
    context: str = ""

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        response = await openai.ChatCompletion.acreate(
            model="gpt-4",
            messages=[
                {"role": "system", "content": request.context},
                {"role": "user", "content": request.message}
            ]
        )
        return {"response": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
\`\`\`

## Frontend Integration

On the frontend, you can create a seamless chat interface:

\`\`\`typescript
const sendMessage = async (message: string) => {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  })
  
  const data = await response.json()
  return data.response
}
\`\`\`

## Best Practices

1. **Rate Limiting**: Implement proper rate limiting to prevent abuse
2. **Error Handling**: Gracefully handle API failures and timeouts
3. **Caching**: Cache responses when appropriate to reduce costs
4. **Security**: Validate inputs and sanitize outputs

## Real-World Applications

I've successfully implemented AI integration in several projects:

- **Edustreak**: AI-powered study plan generation from YouTube videos and PDFs
- **Bloomify**: Exam paper classification and generation for universities
- **MediMitra**: Voice-enabled medicine reminders with OCR integration

## Conclusion

Integrating AI and LLMs into web applications opens up endless possibilities for creating intelligent, user-friendly experiences. Start small, focus on specific use cases, and gradually expand your AI capabilities.
    `,
    author: "Varad Deshpande",
    date: "2024-12-10",
    readTime: "12 min read",
    category: "AI/ML",
    tags: ["AI", "LLM", "FastAPI", "Python", "Integration"],
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: "3",
    title: "Modern Database Design Patterns with MongoDB and PostgreSQL",
    excerpt:
      "Discover advanced database design patterns and when to choose MongoDB vs PostgreSQL for your next project. Learn about schema design, indexing, and performance optimization.",
    content: `
# Modern Database Design Patterns with MongoDB and PostgreSQL

Choosing the right database and designing efficient schemas is crucial for application performance and scalability. This article explores modern patterns for both MongoDB and PostgreSQL.

## MongoDB vs PostgreSQL: When to Choose What

### Choose MongoDB when:
- Working with flexible, document-based data
- Rapid prototyping and schema evolution
- Horizontal scaling requirements
- Complex nested data structures

### Choose PostgreSQL when:
- ACID compliance is critical
- Complex relationships and joins
- Strong consistency requirements
- Advanced SQL features needed

## MongoDB Design Patterns

### 1. Embedded Documents Pattern
\`\`\`javascript
// User document with embedded addresses
{
  _id: ObjectId("..."),
  name: "John Doe",
  email: "john@example.com",
  addresses: [
    {
      type: "home",
      street: "123 Main St",
      city: "Pune",
      country: "India"
    }
  ]
}
\`\`\`

### 2. Reference Pattern
\`\`\`javascript
// Separate collections with references
// Users collection
{
  _id: ObjectId("user1"),
  name: "John Doe",
  email: "john@example.com"
}

// Orders collection
{
  _id: ObjectId("order1"),
  userId: ObjectId("user1"),
  items: [...],
  total: 299.99
}
\`\`\`

## PostgreSQL Design Patterns

### 1. Normalized Schema Design
\`\`\`sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table with foreign key
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  total DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

### 2. JSONB for Flexible Data
\`\`\`sql
-- Using JSONB for flexible attributes
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  attributes JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Query JSONB data
SELECT * FROM products 
WHERE attributes->>'color' = 'blue';
\`\`\`

## Performance Optimization

### MongoDB Indexing
\`\`\`javascript
// Compound index for efficient queries
db.users.createIndex({ "email": 1, "status": 1 })

// Text index for search
db.articles.createIndex({ "title": "text", "content": "text" })
\`\`\`

### PostgreSQL Indexing
\`\`\`sql
-- B-tree index for frequent queries
CREATE INDEX idx_users_email ON users(email);

-- Partial index for specific conditions
CREATE INDEX idx_active_users ON users(email) 
WHERE status = 'active';
\`\`\`

## Real-World Experience

In my projects, I've used both databases effectively:

- **MongoDB**: Used in Edustreak for flexible content storage and rapid development
- **PostgreSQL**: Implemented in email scheduler at Vulnuris for transactional data

## Conclusion

Both MongoDB and PostgreSQL have their strengths. The key is understanding your data patterns, consistency requirements, and scalability needs to make the right choice.
    `,
    author: "Varad Deshpande",
    date: "2024-12-05",
    readTime: "10 min read",
    category: "Database",
    tags: ["MongoDB", "PostgreSQL", "Database Design", "Performance"],
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: "4",
    title: "Building Real-time Applications with Apache Pulsar and WebSockets",
    excerpt:
      "Learn how to build scalable real-time applications using Apache Pulsar for message streaming and WebSockets for client communication. Perfect for chat apps, notifications, and live updates.",
    content: `
# Building Real-time Applications with Apache Pulsar and WebSockets

Real-time applications are becoming increasingly important in today's digital landscape. This guide explores how to build scalable real-time systems using Apache Pulsar and WebSockets.

## Why Apache Pulsar?

Apache Pulsar offers several advantages over traditional message brokers:

- **Multi-tenancy**: Built-in support for multiple tenants
- **Geo-replication**: Global message replication
- **Persistent Storage**: Messages are stored durably
- **Flexible Messaging**: Support for both streaming and queuing

## Setting Up Apache Pulsar

### Docker Setup
\`\`\`bash
# Start Pulsar in standalone mode
docker run -it -p 6650:6650 -p 8080:8080 \\
  --mount source=pulsardata,target=/pulsar/data \\
  --mount source=pulsarconf,target=/pulsar/conf \\
  apachepulsar/pulsar:latest \\
  bin/pulsar standalone
\`\`\`

### Producer Example
\`\`\`python
import pulsar

client = pulsar.Client('pulsar://localhost:6650')
producer = client.create_producer('my-topic')

# Send message
producer.send(('Hello Pulsar!').encode('utf-8'))

client.close()
\`\`\`

### Consumer Example
\`\`\`python
import pulsar

client = pulsar.Client('pulsar://localhost:6650')
consumer = client.subscribe('my-topic', 'my-subscription')

while True:
    msg = consumer.receive()
    print(f"Received message: {msg.data().decode('utf-8')}")
    consumer.acknowledge(msg)

client.close()
\`\`\`

## WebSocket Integration

### FastAPI WebSocket Server
\`\`\`python
from fastapi import FastAPI, WebSocket
import pulsar
import asyncio
import json

app = FastAPI()

class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []
    
    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
    
    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)
    
    async def broadcast(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)

manager = ConnectionManager()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            # Process message and send to Pulsar
            await process_message(data)
    except WebSocketDisconnect:
        manager.disconnect(websocket)
\`\`\`

### Frontend WebSocket Client
\`\`\`typescript
class WebSocketClient {
  private ws: WebSocket | null = null;
  
  connect(url: string) {
    this.ws = new WebSocket(url);
    
    this.ws.onopen = () => {
      console.log('Connected to WebSocket');
    };
    
    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.handleMessage(data);
    };
    
    this.ws.onclose = () => {
      console.log('WebSocket connection closed');
      // Implement reconnection logic
      setTimeout(() => this.connect(url), 5000);
    };
  }
  
  sendMessage(message: any) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
    }
  }
  
  private handleMessage(data: any) {
    // Handle incoming messages
    console.log('Received:', data);
  }
}
\`\`\`

## Real-World Implementation

At Vulnuris, I implemented a real-time email scheduler using Apache Pulsar:

### Email Scheduler Architecture
\`\`\`python
# Email scheduling with Pulsar
async def schedule_email(email_data: dict, delay_seconds: int):
    producer = client.create_producer(
        'email-topic',
        producer_name='email-scheduler'
    )
    
    # Schedule message with delay
    producer.send(
        json.dumps(email_data).encode('utf-8'),
        deliver_at=int(time.time() * 1000) + (delay_seconds * 1000)
    )
\`\`\`

### Results Achieved
- **35% improvement** in delivery reliability
- **Scalable architecture** handling thousands of concurrent connections
- **Real-time notifications** for email status updates

## Best Practices

1. **Connection Management**: Implement proper connection pooling and cleanup
2. **Error Handling**: Handle network failures and implement retry logic
3. **Message Ordering**: Use partitioned topics for ordered message delivery
4. **Monitoring**: Implement comprehensive logging and metrics

## Conclusion

Combining Apache Pulsar with WebSockets creates a powerful foundation for real-time applications. The durability of Pulsar with the immediacy of WebSockets provides the best of both worlds.
    `,
    author: "Varad Deshpande",
    date: "2024-11-28",
    readTime: "15 min read",
    category: "Backend",
    tags: ["Apache Pulsar", "WebSockets", "Real-time", "FastAPI"],
    gradient: "from-orange-500 to-red-600",
  },
]

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web Development":
        return "bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
      case "AI/ML":
        return "bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-700"
      case "Database":
        return "bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700"
      case "Backend":
        return "bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-700"
      default:
        return "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
    }
  }

  if (selectedPost) {
    return (
      <section id="blog" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Button
            onClick={() => setSelectedPost(null)}
            variant="outline"
            className="mb-8 hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            ← Back to Blog
          </Button>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-8">
              <Badge className={getCategoryColor(selectedPost.category)}>{selectedPost.category}</Badge>
              <h1 className="text-4xl font-bold mt-4 mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                {selectedPost.title}
              </h1>
              <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </div>

            <div
              className="prose-content text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{
                __html: selectedPost.content
                  .replace(/\n/g, "<br>")
                  .replace(/```(\w+)?\n([\s\S]*?)```/g, "<pre><code>$2</code></pre>"),
              }}
            />

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {selectedPost.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="hover:scale-105 transition-transform bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    )
  }

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <WidgetAnimation animation="scaleIn">
              <div className="inline-flex items-center gap-2 mb-4">
                <BookOpen className="h-6 w-6 text-blue-600 animate-bounce" />
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Blog & Articles
                </h2>
                <TrendingUp className="h-6 w-6 text-purple-600 animate-bounce delay-200" />
              </div>
            </WidgetAnimation>
            <WidgetAnimation delay={200}>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Insights, tutorials, and thoughts on web development, AI integration, and modern technology trends
              </p>
            </WidgetAnimation>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <WidgetAnimation key={post.id} delay={index * 150} animation="fadeInUp">
              <Card className="hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm group overflow-hidden h-full shadow-lg dark:shadow-white/5">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={getCategoryColor(post.category)}>{post.category}</Badge>
                  </div>

                  <CardTitle className="text-xl text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>

                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 flex flex-col h-full">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs hover:scale-105 transition-transform bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                        >
                          #{tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                        >
                          +{post.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button
                    onClick={() => setSelectedPost(post)}
                    className={`bg-gradient-to-r ${post.gradient} hover:scale-105 transition-all duration-300 group/btn w-full shadow-lg hover:shadow-xl`}
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </WidgetAnimation>
          ))}
        </div>

        <WidgetAnimation delay={600}>
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Want to stay updated with my latest articles?</p>
            <Button
              variant="outline"
              className="hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </WidgetAnimation>
      </div>
    </section>
  )
}
