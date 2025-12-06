import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import './BlogList.css'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  author: string
  date: string
  category: string
  image: string
  readTime: string
}

// Sample blog posts - you can add more or load from API
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Buy Your First Home in Orlando: Complete Guide',
    slug: 'how-to-buy-first-home-orlando',
    excerpt: 'Everything you need to know about buying your first home in Orlando, Central Florida. From pre-approval to closing, we guide you through the entire process of buying properties.',
    author: 'Carla Carolina',
    date: '2025-01-15',
    category: 'Buying Properties',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'Top 10 Neighborhoods for Customizable Homes in Central Florida',
    slug: 'top-neighborhoods-customizable-homes',
    excerpt: 'Discover the best neighborhoods in Central Florida for building your customizable home. Find land for sale and new residential developments perfect for custom builds.',
    author: 'Carla Carolina',
    date: '2025-01-10',
    category: 'Customizable Homes',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    readTime: '10 min read'
  },
  {
    id: '3',
    title: 'Investment Properties: Residential vs Commercial Real Estate',
    slug: 'residential-vs-commercial-real-estate',
    excerpt: 'Compare residential and commercial real estate investment opportunities in Orlando. Learn which type of property investment is right for your portfolio.',
    author: 'Carla Carolina',
    date: '2025-01-05',
    category: 'Investment',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    readTime: '12 min read'
  },
  {
    id: '4',
    title: 'Land Buying Guide: What to Know Before You Buy Land in Central Florida',
    slug: 'land-buying-guide-central-florida',
    excerpt: 'Complete guide to buying land in Central Florida. Learn about zoning, utilities, permits, and everything you need to know before purchasing land for sale.',
    author: 'Carla Carolina',
    date: '2024-12-28',
    category: 'Land Sales',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    readTime: '9 min read'
  },
  {
    id: '5',
    title: 'New Residential Developments in Clermont, Florida',
    slug: 'new-residential-developments-clermont',
    excerpt: 'Explore the latest new residential developments in Clermont, Florida. Discover new homes, customizable properties, and growing communities in this family-friendly area.',
    author: 'Carla Carolina',
    date: '2024-12-20',
    category: 'New Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read'
  }
]

const BlogList = () => {
  const categories = ['All', 'Buying Properties', 'Selling Properties', 'Land Sales', 'Customizable Homes', 'New Residential', 'Commercial Real Estate', 'Investment']

  return (
    <div className="blog-list-page">
      <SEO
        title="Real Estate Blog - Buying, Selling, and Investing in Properties"
        description="Expert real estate advice, guides, and insights about buying properties, selling properties, land sales, new residential homes, commercial real estate, and customizable homes in Central Florida."
        keywords="real estate blog, buying properties guide, selling properties tips, land buying guide, customizable homes, new residential developments, commercial real estate, Orlando real estate blog"
        url="https://serenitylegacy.net/blog"
      />
      
      <section className="blog-hero">
        <div className="container">
          <h1>Real Estate Blog</h1>
          <p className="blog-subtitle">
            Expert insights, guides, and tips for buying properties, selling properties, land sales, 
            new residential homes, commercial real estate, and customizable homes in Central Florida.
          </p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <Link to={`/blog/${post.slug}`} className="blog-card-link">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                    <span className="blog-category">{post.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <h2>{post.title}</h2>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-meta">
                      <span className="blog-author">{post.author}</span>
                      <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span className="blog-read-time">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogList

